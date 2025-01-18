"use client";
import React from "react";
import ShareIcon from "./icons/ShareIcon";
import Tags from "./Tags";
import DeleteIcon from "./icons/DeleteIcon";
import DocumentIcon from "./icons/DocumentIcon";
import apiClient from "@/lib/apiClient";
import deleteBrain from "@/lib/actions/deleteBrain";
import Link from "next/link";

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
  console.log("type", type);  
  if(type === "Youtube"){
    const ylink = link.replace("watch?v=", "embed/");
    console.log(ylink);
  }
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
          <span className="cursor-pointer" onClick={() => deleteBrain(id)}>
            <DeleteIcon />
          </span>
        </div>
      </div>
      <div className="mt-4">
        {type === "Youtube" ? (
          <iframe className="w-full rounded-lg" src={link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        ) : (
          <iframe
            className="w-full rounded-lg my-3 scrollbar-none"
            src={link}
          ></iframe>
        )}
      </div>
      <div className="mt-3">
        <Link href={link} target="_blank">
          <h1 className="text-2xl text-white font-semibold">{title}</h1>
        </Link>
        <div className="flex justify-between items-center text-white/60 text-sm mb-2">
          <p className="">Author: {username}</p>
          <p className="">{new Date(createdAt).toDateString()}</p>
        </div>
        <div className="flex gap-3 mt-2 overflow-x-scroll scrollbar-none">
          {tags?.map((text) => <Tags key={text} text={text} />)}
        </div>
      </div>
    </div>
  );
};

export default Card;
