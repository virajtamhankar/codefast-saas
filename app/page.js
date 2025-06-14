import Buttonlogin from "@/Components/Buttonlogin";
const isLoggedIn = true;
const name = "Viraj";

export default function Home() {
  return (
    <main>
      {/* header section */}
      <section className="bg-slate-200">
        <section className="flex justify-between items-center px-8 py-4 max-w-3xl mx-auto">
          <div className="font-bold">CodeFastSaas</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div className="bg-yellow-500">
            <Buttonlogin />
          </div>
        </section>
      </section>
      {/* body section */}
      <section className="text-center py-24 px-16 max-w-3xl mx-auto">
        <h1 className="text-5xl p-2">
          Collect customer feedback and gather insights to improve your business
        </h1>
        <div className="p-5 font-bold">
          Understand what your customers really want from your product.
        </div>
        <Buttonlogin isLoggedIn={isLoggedIn} name={name} />
      </section>
      {/* pricing */}
      <section className="bg-base-200 space-y-2">
        <section className=" py-24 px-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-extrabold text-center text-primary mb-3 w-c">
            pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Pricing that adapts to your needs
          </h2>

          <div className="p-8 bg-base-300 rounded-3xl max-w-96 mx-auto">
            <div className="flex gap-2 justify-start items-baseline">
              <p className="text-4xl font-black">$19</p>
              <p className="text-sm opacity-50 uppercase">/month</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
                Collect feedback
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
                Add users
              </li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
