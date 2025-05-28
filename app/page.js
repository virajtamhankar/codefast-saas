import Buttonlogin from "@/Components/Buttonlogin";
const isLoggedIn = true;
const name = "Viraj";

export default function Home() {
  return (
    <main>
      <section className="bg-slate-200">
        <section className="flex justify-between items-center px-8 py-4 max-w-3xl mx-auto">
          <div className="font-bold">CodeFastSaas</div>
          <div className="space-x-4">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div className="bg-yellow-500">
            <Buttonlogin />
          </div>
        </section>
      </section>
      <section className="text-center py-24 px-16 max-w-3xl mx-auto">
        <h1 className="text-5xl p-2">
          Collect customer feedback and gather insights to improve your business
        </h1>
        <div className="p-5 font-bold">
          Understand what your customers really want from your product.
        </div>
        <Buttonlogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
