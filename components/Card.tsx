"use client";
import React from "react";
import ShareIcon from "./icons/ShareIcon";
import Tags from "./Tags";
import DeleteIcon from "./icons/DeleteIcon";
import DocumentIcon from "./icons/DocumentIcon";
import apiClient from "@/lib/apiClient";

interface CardProps {
  id: string;
  type: string;
  title: string;
  username: string;
  link: string;
  createdAt: Date;
  tags?: string[];
}
const Card = ({
  type,
  title,
  username,
  link,
  id,
  tags,
  createdAt,
}: CardProps) => {
  const handleDelete = async () => {
    try {
      const res = await apiClient.delete(`/api/v1/content/delete/${id}`, {
        withCredentials: true,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    // bg-slate-500/20
    <div className="bg-slate-500/20 text-white md:max-w-[40vw] lg:max-w-[30vw] xl:max-w-[24vw] w-full px-5 py-4 rounded-xl max-h-84 shadow-lg shadow-persian-blue-300/50">
      <div className="flex justify-between items-center ">
        <div className="flex gap-2 justify-center items-center">
          <DocumentIcon />
          <p className="font-semibold">{type.toUpperCase()}</p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <ShareIcon />
          <span className="cursor-pointer" onClick={handleDelete}>
            <DeleteIcon />
          </span>
        </div>
      </div>
      <div className="mt-4">
        {/* <blockquote className="twitter-tweet">
          <a href="https://twitter.com/username/status/807811447862468608"></a>
        </blockquote> */}
        <iframe
          className="w-full rounded-lg my-3 scrollbar-none"
          src={link}
        ></iframe>
        {/* <iframe className="w-full rounded-lg" Content-Security-Policy src="https://stackoverflow.com/questions/41090108/how-to-embed-a-tweet-on-a-page-if-i-only-know-its-id" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        <iframe className="w-full rounded-lg" src="https://www.youtube.com/embed/bEbszuGQdeQ?si=tIAQAuisCXdN1nBL" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
      </div>
      <div className="mt-3">
        <h1 className="text-2xl text-white">{title}</h1>
        <div className="flex justify-between items-center">
          <p className="text-white/60 text-sm">Author: {username}</p>
          <p className="text-white/60 text-sm">
            {new Date(createdAt).toDateString()}
          </p>
        </div>
        <div className="flex gap-3 mt-2 overflow-x-scroll scrollbar-none">
          {tags?.map((text) => <Tags key={text} text={text} />)}
        </div>
      </div>
    </div>
  );
};

export default Card;
