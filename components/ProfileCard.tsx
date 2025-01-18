"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/apiClient";
import Image from "next/image";
import LogoutIcon from "./icons/LogoutIcon";
import toast from "react-hot-toast";
import getUser from "@/lib/actions/getUser";


interface User {
  username: string;
}

const ProfileCard = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await apiClient.post("/api/v1/logout", {});
      console.log(res);
      if (res.status === 201) {
        toast.success(res.data.message);
        router.push("/signin");
      }
    } catch (error) {
      console.error("error occured while login: ", error);
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const userDetails = await getUser();
      console.log("userDetails", userDetails);
      setUser(userDetails);
    };

    getUserDetails();
  }, []);
  return (
    <div className=" flex gap-3 flex-col w-full bg-transparent/20 rounded-2xl xl:p-4 p-2">
      <div className="flex flex-col xl:flex-row items-center gap-4 w-full">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          width={50}
          height={50}
          alt=""
        />
        <p className="text-white font-semibold">{user?.username}</p>
      </div>
      <div className="flex flex-col items-center gap-4 w-full mt-3">
        <Button
          type="button"
          variant="logout"
          text="Logout"
          onclick={handleLogout}
          extraStyle="flex items-center justify-center gap-2 w-full text-white font-normal"
          startIcon={<LogoutIcon />}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
