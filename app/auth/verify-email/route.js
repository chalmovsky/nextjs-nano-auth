import { redirect } from "next/navigation";
import { verifyEmail } from "@/lib/auth";
import { getUserFromSession } from "@/lib/session";

export async function GET(request) {
  const user = await getUserFromSession();
  if (user) {
    redirect("/protected");
  }
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const verifiedEmail = await verifyEmail(email, token);
  redirect(`/auth/sign-up/${email}/${verifiedEmail}`);
}
