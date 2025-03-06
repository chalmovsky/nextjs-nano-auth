import "server-only";
import { compare, hash } from "bcrypt";
import * as crypto from "node:crypto";
import { getUserByEmail, insertUser, setVerifiedEmail } from "@/lib/dal";
import { createSession, getUserFromSession } from "@/lib/session";
import { sendVerifyEmail } from "@/lib/email";
const saltRounds = 10;

export async function createUserAndSendVerificationEmail(
  email,
  plainTextPassword,
) {
  if (await getUserFromSession()) {
    return null;
  }
  const passwordHash = await hashString(plainTextPassword);

  const tokenForVerification = generateToken();
  const tokenForVerificationHash = await hashString(tokenForVerification);

  const oneWeekInTheFuture = new Date();
  oneWeekInTheFuture.setDate(oneWeekInTheFuture.getDate() + 7);
  const tokenForVerificationExpiry = oneWeekInTheFuture.toISOString();

  const newUser = {
    email,
    passwordHash,
    tokenForVerificationHash,
    tokenForVerificationExpiry,
  };

  const createdUser = await insertUser(newUser);

  if (!createdUser) {
    return null;
  }

  sendVerifyEmail(email, tokenForVerification);
  return createdUser;
}

export async function verifyEmail(email, token) {
  if (await getUserFromSession()) {
    return null;
  }
  const user = await getUserByEmail(email);
  if (!user || user.emailVerified === "yes") {
    return null;
  }
  const tokenExpiry = new Date(user.tokenForVerificationExpiry);
  const dateNow = new Date();
  if (tokenExpiry < dateNow) {
    return null;
  }
  const isTokenValid = await comparePlainToHashed(
    token,
    user.tokenForVerificationHash,
  );
  if (!isTokenValid) {
    return null;
  }
  // all is good, verify the email
  await setVerifiedEmail(email);

  return email;
}

export async function signInUserAndCreateSession(email, passwordPlainText) {
  if (await getUserFromSession()) {
    return false;
  }
  const user = await getUserByEmail(email);
  if (user?.passwordHash) {
    const isPasswordValid = await comparePlainToHashed(
      passwordPlainText,
      user.passwordHash,
    );
    if (isPasswordValid && user.emailVerified === "yes") {
      await createSession(user.id);
      return true;
    }
  }
  return false;
}

async function hashString(plainString) {
  return await hash(plainString, saltRounds);
}

async function comparePlainToHashed(plainString, hashedString) {
  return await compare(plainString, hashedString);
}

function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}
