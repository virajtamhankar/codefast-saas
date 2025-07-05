import Link from "next/link";

const Buttonlogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/user_dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome {isLoggedIn ? name : "there"}
      </Link>
    );
  }
  return <p className="btn btn-secondary">Log In</p>;
};
export default Buttonlogin;
