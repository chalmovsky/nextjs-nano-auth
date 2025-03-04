export default async function VerifyEmailInfoPage({ params }) {
  const { email } = await params;
  return (
    <p>
      Verification email was sent to {email}. Please click the link there to
      activate the account.
    </p>
  );
}
