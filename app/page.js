import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link className={"block"} href={"/auth/sign-in"}>
        Sign in page
      </Link>
      <Link className={"block"} href={"/auth/sign-up"}>
        Sign up page
      </Link>
      <Link className={"block"} href={"/protected"}>
        Protected page
      </Link>
    </div>
  );
}
