"use client";
// import apiClient from "@/lib/apiClient";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     try {
  //       const res = await apiClient.get("/api/v1/user", {
  //         withCredentials: true, // Ensure cookies are sent
  //       });

  //       if (res.status === 200) {
  //         router.push("/dashboard");
  //       } else {
  //         router.push("/signin");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user details:", error);
  //       router.push("/signin");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getUserDetails();
  // }, [router]);

  // if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl text-white font-extrabold">
        Hello from <span className="text-persian-blue-500">BrainSync</span>
      </h1>
    </div>
  );
}
