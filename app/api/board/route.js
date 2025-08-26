import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.name) {
      return NextResponse.json(
        { error: "Board name is required" },
        { status: 400 }
      );
    }
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { error: "User not authorized" },
        { status: 401 }
      );
    }

    await connectMongo();
    const user = await User.findById(session.user.id);

    const board = await Board.create({
      userId: user._id,
      name: body.name,
    });

    await User.findByIdAndUpdate(session.user.id, {
      $push: { boards: board._id },
    });
    console.log(user.boards);

    return NextResponse.json(board);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
