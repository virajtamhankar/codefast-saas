"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Buttonlogin = ({ session, extraStyle }) => {
  const dashboardUrl = "/user_dashboard";
  if (session) {
    return (
      <Link
        href={dashboardUrl}
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {session.user.name || "Hermione fan club member"}
      </Link>
    );
  }
  return (
    <p
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      onClick={() => {
        signIn(undefined, { callbackUrl: dashboardUrl });
      }}
    >
      Login
    </p>
  );
};
export default Buttonlogin;
