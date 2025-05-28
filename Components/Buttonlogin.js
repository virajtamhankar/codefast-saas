import Link from "next/link";
import { Children } from "react";

const Buttonlogin = ({ isLoggedIn, name, children }) => {
  if (isLoggedIn) {
    return (
      <Link href="/user_dashboard" className="btn btn-primary">
        Welcome {name}
      </Link>
    );
  }
  return <p className="btn btn-secondary">Log In</p>;
};
export default Buttonlogin;
