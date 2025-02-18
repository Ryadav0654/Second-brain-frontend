"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import React from "react";
import getContent from "@/lib/actions/getContent";
import AddBrainModal from "@/components/AddBrainModal";

interface Content {
  _id: string;
  title: string;
  type: string;
  userId: {
    username: string;
  };
  createdAt: Date;
  link: string;
  tags: string[];
}
const Dashboard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [contents, setContent] = useState<Content[]>([]);
  useEffect(() => {
    const fetchContent = async () => {
      const content = await getContent();
      setContent(content);
    };
    fetchContent();
  }, []);

  const handleOpenModal = () => {
    // console.log("add button clicked", openModal);
    // toast.success("add button clicked");
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal && <AddBrainModal handleOpenModal={handleOpenModal} />}
      <div className="grid grid-cols-6 fixed top-0 max-h-screen w-full">
        <div className="hidden lg:block lg:col-span-1 bg-transparent">
          <Sidebar />
        </div>
        <div className="col-span-6 lg:col-span-5 px-6 py-2">
          <DashboardHeader handleOpenModal={handleOpenModal} />
          <div className="flex justify-start  flex-wrap gap-8 pb-36 pt-6 max-h-screen md:px-6 md:pt-6 md:pb-24  overflow-y-scroll scrollbar-none">
            {contents.length === 0 && (
              <h1 className="text-3xl font-bold text-center">
                No contents found. Please add one.
              </h1>
            )}
            {contents.map((content) => (
              <Card
                key={content._id}
                id={content._id}
                title={content.title}
                type={content.type}
                username={content?.userId?.username}
                link={content?.link}
                createdAt={content.createdAt}
                tags={content?.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
