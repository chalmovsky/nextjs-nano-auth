import Link from "next/link";
import { getUserFromSession } from "@/lib/session";

export default async function ProtectedPage() {
  const user = await getUserFromSession();
  if (!user) {
    return <p>This content is protected and you are not signed in.</p>;
  }

  return (
    <p>
      Hi, {user.email}. You can only see this paragraph because you are signed
      in.
      <Link className={"block"} href={"/auth/sign-out"}>
        Click here to sign out
      </Link>
    </p>
  );
}
