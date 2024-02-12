"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-64 text-center">
      <h2 className="text-red-600 text-2xl"> Something went wrong!</h2>
    </div>
  );
}