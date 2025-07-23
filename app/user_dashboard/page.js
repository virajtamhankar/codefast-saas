"use client";
import ButtonLogout from "@/components/ButtonLogout";
import { Example } from "@/components/UseStateExample";

export default function user_dashboard() {
  return (
    <main>
      <h1>User dashboard</h1>
      {Example()}
      <ButtonLogout />
    </main>
  );
}
