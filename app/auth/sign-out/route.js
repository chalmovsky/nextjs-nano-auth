import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  (await cookies()).delete("session");
  redirect("/");
}
