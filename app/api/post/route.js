import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import { auth } from "@/auth";
import { Filter } from "bad-words";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");
    const badWordsFilter = new Filter();
    const sanitizedTitle = badWordsFilter.clean(title);
    const sanitizedDescription = badWordsFilter.clean(description);

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const session = await auth();

    await connectMongo();
    const post = await Post.create({
      title: sanitizedTitle,
      description: sanitizedDescription,
      boardId,
      userId: session?.user?.id,
    });

    return NextResponse.json(post);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "postId is required" },
        { status: 400 }
      );
    }

    const session = await auth();

    await connectMongo();
    const user = await User.findById(session?.user?.id);

    if (!user.hasAccess) {
      return NextResponse.json(
        { error: "Please subscribe first!" },
        { status: 403 }
      );
    }

    //check if the person who is deleting the post is the same as the user who created it
    const post = await Post.findById(postId);
    if (post.userId.toString() !== session?.user?.id) {
      return NextResponse.json(
        { error: "You can only delete your own posts!" },
        { status: 403 }
      );
    }

    await Post.deleteOne({
      _id: postId,
      userId: session?.user?.id,
    });

    return NextResponse.json({ message: "Post deleted successfully!" });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
