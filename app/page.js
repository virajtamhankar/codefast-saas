import Buttonlogin from "@/Components/Buttonlogin";
import ListItem from "@/Components/ListItem";
import FaqListItem from "@/Components/FaqListItems";
import Image from "next/image";
import productDemo from "@/app/productDemo.jpeg";

const isLoggedIn = true;
const name = "Viraj";
const pricingItemsList = ["Collect feedback", "Add users"];

export default function Home() {
  return (
    <main>
      {/* header section */}
      <section className="bg-slate-200">
        <section className="flex justify-between items-center px-8 py-4 max-w-5xl mx-auto">
          <div className="font-bold">CodeFastSaas</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <div className="bg-yellow-500">
            <Buttonlogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </section>
      </section>

      {/* body section */}
      <section className="text-center lg:text-left py-24 px-16 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
        <Image
          src={productDemo}
          alt="Product Demo Image"
          className="w-96 rounded-xl"
        />
        <div>
          <h1 className="text-4xl p-2">
            Collect customer feedback and gather insights to improve your
            business
          </h1>
          <div className="p-2 font-bold">
            Understand what your customers really want from your product.
          </div>
          <Buttonlogin
            isLoggedIn={isLoggedIn}
            name={name}
            extraStyle="w-full"
          />
        </div>
      </section>

      {/* pricing */}
      <section className="bg-base-200 space-y-2" id="pricing">
        {/* Marc's pricing card */}
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
              <ListItem text="Collect feedback" />
              <ListItem text="Add users" />
              {pricingItemsList.map((priceItem) => {
                return <ListItem text={priceItem} key={priceItem} />;
              })}
            </ul>
          </div>
        </section>
        {/* DaisyUI card */}
        <div className="card bg-base-400 w-96 shadow-sm mx-auto max-w-3xl py-1">
          <figure>
            <img
              width={200}
              height={200}
              src="https://static.wikia.nocookie.net/harrypotter/images/e/e1/Hogwarts_Castle_DHF2.jpg/revision/latest?cb=20120128145344"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hogwarts prep school</h2>
            <p>We bribe Dumbledore to get you a Hogwarts admission letter</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Abracadabra!</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className=" py-24 px-16 max-w-3xl mx-auto" id="faq">
        <p className="text-sm uppercase font-extrabold text-center text-primary mb-3 w-c">
          FAQ
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          Frequenctly asked questions
        </h2>
        <ul className="max-w-lg mx-auto">
          {[
            {
              question: "Who did Hermionie have an affair with?",
              answer: "Viraj",
            },
            {
              question: "Who did Hermionie regret not having met earlier?",
              answer: "Ofc Viraj",
            },
          ].map((qa) => (
            <FaqListItem key={qa.question} qa={qa} />
          ))}
        </ul>
      </section>
    </main>
  );
}
