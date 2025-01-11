import React from "react";
import Button from "./Button";
import Image from "next/image";
import LogoutIcon from "./icons/LogoutIcon";
import apiClient from "@/lib/apiClient";
import { redirect } from "next/navigation";

const ProfileCard = () => {
  const handleLogout = async () => {
    const res = await apiClient.post("/api/v1/logout", {});
    console.log(res);
    if (res.status === 201) {
      redirect("/signin");
    }
  };
  return (
    <div className="absolute  bottom-0 left-0 flex gap-3 flex-col w-full bg-transparent/20 rounded-2xl xl:p-4 p-2">
      <div className="flex flex-col xl:flex-row items-center gap-4 w-full">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          width={50}
          height={50}
          alt=""
        />
        <p className="text-white font-semibold">Ravindra yadav</p>
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
