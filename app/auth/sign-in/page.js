import { redirect } from "next/navigation";
import { getUserFromSession } from "@/lib/session";
import { signInUserAndCreateSession } from "@/lib/auth";

async function loginAction(formData) {
  "use server";
  // we do not have an active session currently, try to sign in
  const email = formData.get("email");
  const password = formData.get("password");

  const isSuccessfullySignedIn = await signInUserAndCreateSession(
    email,
    password,
  );
  if (isSuccessfullySignedIn) {
    redirect("/protected");
  } else {
    return { error: "Invalid credentials or email was not verified" };
  }
}

export default async function SignInPage() {
  const user = await getUserFromSession();
  if (user) {
    redirect("/protected");
  }
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign in</h2>
      <form action={loginAction}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
