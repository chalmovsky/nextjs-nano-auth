import { Resend } from "resend";
import EmailTemplate from "@/lib/EmailVerificationTemplate.jsx";
import EmailVerificationTemplate from "@/lib/EmailVerificationTemplate.jsx";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerifyEmail(email, token) {
  const { data, error } = await resend.emails.send({
    from: "Snowy Owl <SnowyOwl@verification.chalmo.net>",
    to: [email],
    subject: "Verification",
    react: <EmailVerificationTemplate email={email} token={token} />,
  });

  if (error) {
    return console.error({ error });
  }
}
