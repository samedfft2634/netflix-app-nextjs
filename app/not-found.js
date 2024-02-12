"use client";

import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src="/images/404-page-not-found.png" />
      <button
        className="  text-gray-100 bg-gray-800 hover:bg-gray-950 font-semibold py-2 px-4   rounded shadow mt-4"
        type="button"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </div>
  );
}