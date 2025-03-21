# Catalyze auth into your Next.js apps

### Fully functional email and password authentication including email verification.
- This is meant to be used as starting point to add auth to an existing Next.js app.
- Copy the files into your project and adapt according to your requirements.

### Prerequisites:
- Set up Resend account (if you don't have Resend you can swap it out for other email sender in `email.js`, but it's gonna be more work)

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
- Rate limiting with a 3rd party provider
- Adding cache where it makes sense
- Add some example for authorization (e.g. adding credits to the users table and then only allowing certain action if there are enough credits)
- An option to use custom, fully featured, beautifully styled Sign In and Sign Up components
- Add a script that scaffold all of this more dynamically and conveniently 
- Restructure this so only the necessary files are here and put runnable Next.js app into example folder