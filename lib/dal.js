import "server-only";

import { usersTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/drizzle";

export async function getUserById(id) {
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id))
    .limit(1);

  if (users.length === 0) {
    return null;
  }

  return users[0];
}

export async function getUserByEmail(email) {
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  if (users.length === 0) {
    return null;
  }

  return users[0];
}

export async function setVerifiedEmail(email) {
  await db
    .update(usersTable)
    .set({ emailVerified: "yes" })
    .where(eq(usersTable.email, email));
}

export async function insertUser({
  email,
  passwordHash,
  tokenForVerificationHash,
  tokenForVerificationExpiry,
}) {
  let createdUser = null;
  try {
    const createdUserList = await db
      .insert(usersTable)
      .values({
        email,
        passwordHash,
        tokenForVerificationHash,
        tokenForVerificationExpiry,
      })
      .returning();
    createdUser = createdUserList[0];
  } catch (e) {
    console.log(e);
  }

  if (!createdUser) {
    return null;
  } else {
    return createdUser;
  }
}
