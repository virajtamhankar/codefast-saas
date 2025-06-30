import Link from "next/link";
import { Children } from "react";

const Buttonlogin = ({ isLoggedIn, name, extraStyle, children }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/user_dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome {(isLoggedIn = true ? name : "there")}
      </Link>
    );
  }
  return <p className="btn btn-secondary">Log In</p>;
};
export default Buttonlogin;
