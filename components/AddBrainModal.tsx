"use client";
import React from "react";
import Input from "./Input";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import CrossIcon from "./icons/CrossIcon";
import apiClient from "@/lib/apiClient";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  type: string;
  link: string;
};
const AddBrainModal = ({
  handleOpenModal,
}: {
  handleOpenModal: () => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const handleAddBrain: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);
    reset();
    const res = await apiClient.post("/api/v1/content/new", {
      ...data,
    });
    if (res.status !== 201) {
      console.error("error occured while adding brain: ", res);
    }
    handleOpenModal();
    window.location.reload();
  };

  return (
    <div className="fixed flex z-10 justify-center items-center top-0 left-0 right-0 h-screen w-full bg-[#212035]/90 p-6">
      <div className="bg-transparent/20  rounded-3xl p-6 xl:p-8 md:max-w-[45vw] lg:max-w-[35vw] w-full shadow-xl shadow-persian-blue-500/20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Add your brain</h1>
          <span className="cursor-pointer" onClick={handleOpenModal}>
            <CrossIcon />
          </span>
        </div>

        <form
          onSubmit={handleSubmit(handleAddBrain)}
          className="flex flex-col justify-center gap-5 mt-6"
        >
          <Input
            type="text"
            placeholder="Enter title"
            {...register("title", { required: true })}
            extraStyle="rounded-xl bg-transparent/20 outline-none focus:outline-persian-blue-500 font-normal"
          />
          {errors.title && (
            <span className="text-red-500">Title is required!</span>
          )}

          <Input
            type="text"
            placeholder="Enter link"
            {...register("link", { required: true })}
            extraStyle="rounded-xl bg-transparent/20 outline-none focus:outline-persian-blue-500 font-normal"
          />
          {errors.link && (
            <span className="text-red-500">Link is required!</span>
          )}

          <select
            {...register("type", { required: true })}
            className="py-3 px-4 rounded-xl bg-transparent/20 outline-none focus:outline-blue-500 font-normal"
          >
            <optgroup className="font-semibold bg-[#212035]/95 text-white">
              <option disabled>Select Type</option>
              <option defaultChecked>Link</option>
              <option>Tweet</option>
              <option>Youtube</option>
              <option>Blog</option>
              <option>Document</option>
              <option>Question</option>
            </optgroup>
          </select>
          {errors.type && (
            <span className="text-red-500">Type is required</span>
          )}
          <select
            disabled
            className="py-3 px-4 rounded-xl bg-transparent/20 outline-none focus:outline-blue-500 font-normal"
          >
            <optgroup className="font-semibold bg-[#212035]/95 text-white">
              <option disabled>Select Type</option>
              <option defaultChecked>Productivity</option>
              <option>Latest News</option>
              <option>Health</option>
              <option>Motivation</option>
            </optgroup>
          </select>

          <Button
            type="submit"
            variant="primary"
            text="Add New Brain"
            extraStyle="flex items-center gap-3 w-full text-white justify-center hover:bg-persian-blue-100/20 font-semibold"
            startIcon={<PlusIcon />}
          />
        </form>
      </div>
    </div>
  );
};

export default AddBrainModal;
