import Link from "next/link";

export default async function successPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-xl font-bold">Thank you for your purchase!</h1>
      <Link href="/user_dashboard" className="btn btn-primary">
        Dashboard
      </Link>
    </main>
  );
}
