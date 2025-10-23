import { NextResponse } from "next/server";
import { headers } from "next/headers";
import crypto from "crypto";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(req) {
  try {
    const body = await req.text();
    const hmac = crypto.createHmac("sha256", process.env.LS_SIGNING_SECRET);
    const digest = Buffer.from(hmac.update(body).digest("hex"), "utf8");
    const signature = Buffer.from(headers().get("x-signature"), "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const payload = JSON.parse(body);
    const eventName = payload.meta.event_name;
    if (eventName === "order_created") {
      await connectMongo();
      const user = await User.findById(payload.meta.custom_data.user_id);
      user.hasAccess = true;
      user.customerId = String(payload.data.attributes.customer_id);
      user.markModified("customerId");
      await User.findByIdAndUpdate(
        payload.meta.custom_data.user_id,
        {
          hasAccess: true,
          customerId: String(payload.data.attributes.customer_id),
        },
        { new: true }
      );
    } else if (
      eventName === "subscription_expired" ||
      eventName === "subscription_payment_failed"
    ) {
      await connectMongo();
      const user = await User.findById(payload.meta.custom_data.user_id);
      user.hasAccess = false;
      await user.save();
    }
  } catch (e) {
    console.error("LemonSqueezy error: ", e?.message);
  }
  return NextResponse.json({});
}
