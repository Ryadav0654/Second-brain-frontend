"use client";
import apiClient from "@/lib/apiClient";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await apiClient.get("/api/v1/user");
      const user = res.data.data;
      console.log("user", user);
      if (res.status !== 200) {
        router.push("/signin");
        console.error("error occured while getting user details: ", res);
      }
      router.push("/dashboard");
    };
    getUserDetails();
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl text-white font-extrabold">
        Hello from second Brain
      </h1>
    </div>
  );
}
