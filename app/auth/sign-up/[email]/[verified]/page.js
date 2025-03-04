export default async function VerifyEmailInfoPage({ params }) {
  const { email, verified } = await params;
  return (
    <p>
      {verified !== "null"
        ? `${email} was successfully verified. You can now sign in.`
        : `${email} failed to be verified`}
    </p>
  );
}
