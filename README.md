# Catalyst for new Next.js apps that need auth.

### Fully functional email and password authentication including email verification.
- This is meant to be used as starting point to add auth to a existing Next.js app.
- Copy it to the existing project and adjust according to your needs.

### Prerequisites:
- Set up Resend account (if you dont have Resend you can swap it out for other email sender in `email.js`, but it's gonna be more work)

### How to use:
Download `nna-just-the-files.zip` copy and integrate the files into your own project.

These are the files:
- `.gitignore`
- `.env`
- `.env.local`
- `drizzle.config.ts`
- `package.json`
- `./app/auth/sign-in/page.js`
- `./app/auth/sign-out/page.js`
- `./app/auth/sign-up/page.js`
- `./app/auth/sign-up/[email]/page.js`
- `./app/auth/sign-up/[email]/[verified]page.js`
- `./app/auth/verify-email/route.js`
- `./app/protected/page.js`
- `./lib/auth.js`
- `./lib/dal.js`
- `./lib/email.js`
- `./lib/EmailVerificationTeamplate.jsx`
- `./lib/session.js`
- `./lib/db/migrations`
- `./lib/db/drizzle.js`
- `./lib/db/schema.tex`
- 



### Made with:

- jose
- drizzle
- sqlite
- resend for email sending
- placeholder Sign In and Sign Up pages ready to be customized





### Planned improvements
- Forgot password reset
- Rate limiting based on IP
- Adding cache where it makes sense
- Add some example for authorization (e.g. adding credits to the users table and then only allowing certain action if there are enough credits)
- An option to use custom, fully featured, beautifully styled Sign In and Sign Up components
