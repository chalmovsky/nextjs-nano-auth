export default function EmailVerificationTemplate({ email, token }) {
  const baseDomainUrl =
    process.env.NODE_ENV === "development"
      ? process.env.LOCAL_DOMAIN_URL
      : process.env.PRODUCTION_DOMAIN_URL;
  const verificationLink = `${baseDomainUrl}/auth/verify-email/?email=${email}&token=${token}`;
  return (
    <div>
      <h1>
        To activate your account please click here:
        <a href={verificationLink}> activate</a>
      </h1>
    </div>
  );
}
