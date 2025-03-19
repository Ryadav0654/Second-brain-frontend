"use client";
import React from "react";
import Button from "./Button";
import ProfileCard from "./ProfileCard";
import DocumentIcon from "./icons/DocumentIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import TwitterIcon from "./icons/TwitterIcon";
import QuestionIcon from "./icons/QuestionIcon";
import HomeIcon from "./icons/HomeIcon";
import LinkIcon from "./icons/LinkIcon";

const Sidebar = () => {
  return (
    <div className=" px-4 py-8 min-h-screen w-full flex flex-col justify-between bg-slate-900/30 border-r-2 border-white/40">
      <div className="flex flex-col  gap-4 ">
        <h1 className="text-2xl font-extrabold text-white">BrainSync</h1>
        <Button
          type="button"
          variant="secondry"
          text="Home"
          onclick={() => {}}
          extraStyle="flex items-center gap-3 w-full text-white bg-transparent hover:bg-persian-blue-100/20 font-normal"
          startIcon={<HomeIcon />}
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
          text="Links"
          onclick={() => {}}
          extraStyle="flex items-center gap-3 w-full text-white bg-transparent hover:bg-persian-blue-100/20 font-normal"
          startIcon={<LinkIcon />}
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
      <div className=" w-full">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Sidebar;
