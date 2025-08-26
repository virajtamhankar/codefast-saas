import ButtonLogout from "@/components-new/ButtonLogout";
import FormNewBoard from "@/components-new/FormNewBoard";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

async function getUser() {
  const session = await auth();
  await connectMongo();
  return await User.findById(session.user.id).populate("boards");
}

export default async function user_dashboard() {
  const user = await getUser();
  console.log(user);
  return (
    <main className="bg-base-200 min-h-screen">
      <h1>User dashboard</h1>
      <section className="bg-base-100">
        <div className="mx-5xl mx-auto px-5 py-3 flex justify-end">
          <ButtonLogout />
        </div>
      </section>
      <section className="mx-5xl mx-auto px-5 py-10 space-y-12">
        <FormNewBoard />

        <div>
          {" "}
          <h1 className="font-extrabold text-xl mb-4">
            {user.boards.length} Boards
          </h1>
          <ul className="space-y-4">
            {user.boards.map((board) => {
              return (
                <div key={board._id} className="bg-base-100 p-6 rounded-3xl">
                  {board.name}
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
