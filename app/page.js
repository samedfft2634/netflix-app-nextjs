'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
    <div className="bg-black w-full h-full bg-opacity-50">
      <div className="text-white text-center relative top-2/4 m-auto">
        <h1 className="text-5xl font-[900] text-center mb-3">Unlimited movies, TV shows, and more...</h1>
        <p className="text-2xl font-[400]">Watch anywhere. Cancel anytime.</p>
        <button className="btn-danger w-[250px] " onClick={()=> router.push("/register")}>Get Started</button>
      </div>

    </div>
  </div>;
}
