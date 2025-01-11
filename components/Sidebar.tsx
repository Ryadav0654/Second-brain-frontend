"use client";
import React from "react";
import Button from "./Button";
import ProfileCard from "./ProfileCard";
import DocumentIcon from "./icons/DocumentIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import TwitterIcon from "./icons/TwitterIcon";
import QuestionIcon from "./icons/QuestionIcon";

const Sidebar = () => {
  return (
    <div className=" px-4 py-6 min-h-screen w-full bg-slate-900/30 border-r-2 border-white/40">
      <h1 className="text-2xl font-extrabold text-white">Second Brain</h1>
      <div className="flex flex-col items-center gap-4 mt-12">
        <Button
          type="button"
          variant="secondry"
          text="Home"
          onclick={() => {}}
          extraStyle="flex items-center gap-3 w-full text-white bg-transparent hover:bg-persian-blue-100/20 font-normal"
          startIcon={<DocumentIcon />}
        />
        <Button
          type="button"
          variant="secondry"
          text="Blogs"
          onclick={() => {}}
          extraStyle="flex items-center gap-3 w-full text-white bg-transparent hover:bg-persian-blue-100/20 font-normal"
          startIcon={<DocumentIcon />}
        />
        <Button
          type="button"
          variant="secondry"
          text="Tweets"
          onclick={() => {}}
          extraStyle="flex items-center gap-3 w-full text-white bg-transparent hover:bg-persian-blue-100/20 font-normal"
          startIcon={<TwitterIcon />}
        />
        <Button
          type="button"
          variant="secondry"
          text="Youtube"
          onclick={() => {}}
          extraStyle="flex items-center gap-3 w-full  text-white bg-transparent hover:bg-persian-blue-100/20 font-normal"
          startIcon={<YoutubeIcon />}
        />
        <Button
          type="button"
          variant="secondry"
          text="Questions"
          onclick={() => {}}
          extraStyle="flex items-center gap-3 w-full  text-white bg-transparent hover:bg-persian-blue-100/20 font-normal"
          startIcon={<QuestionIcon />}
        />
        <Button
          type="button"
          variant="secondry"
          text="Documents"
          onclick={() => {}}
          extraStyle="flex items-center gap-3 w-full  text-white bg-transparent hover:bg-persian-blue-100/20 font-normal"
          startIcon={<DocumentIcon />}
        />
      </div>
      <div className="relative bottom-0 top-[42vh] mt-12 w-full">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Sidebar;
