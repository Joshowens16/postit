"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="text-sm text-sm bg-gray-700 py-2 px-6 text-white"
      >
        Sign In
      </button>
    </li>
  );
}
