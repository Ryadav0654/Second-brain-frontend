"use client";
import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import apiClient from "@/lib/apiClient";
import { signUpUrl } from "@/lib/config";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

interface SignupProps {
  username: string;
  password: string;
}
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupProps>();
  const hanldeSignIn: SubmitHandler<SignupProps> = async (data) => {
    reset();
    try {
      const res = await apiClient.post(signUpUrl, { ...data });
      if (!res) {
        console.error("error occured while login: ", res);
      }
      console.log(res);
    } catch (error) {
      console.error("error occured while login: ", error);
    }
  };

  return (
    <div className="flex h-screen w-full px-24 py-10">
      <div className=" flex justify-center items-center w-[60vw]">
        {/* <h1 className="text-4xl">signIn photo</h1> */}
        <Image width={500} height={500} src="/login-bg.png" alt="" />
        {/* <video className="z-10 w-full  bg-center bg-cover" loop src="./signIn.mp4"></video> */}
      </div>
      <div className=" flex justify-center items-center flex-col w-[40vw]">
        <h1 className="text-4xl font-extrabold"> WelCome to second Brain</h1>
        <form
          onSubmit={handleSubmit(hanldeSignIn)}
          className="flex flex-col gap-4 w-full mt-6"
        >
          <Input
            type="text"
            {...register("username", { required: true, maxLength: 20 })}
            placeholder="Enter your name"
            extraStyle="bg-gray-500/20 focus:outline-persian-blue-500"
          ></Input>
          {errors.username && (
            <span className="text-red-500/80">Username is required</span>
          )}
          <Input
            type="password"
            {...register("password", { required: true, maxLength: 20 })}
            placeholder="Enter your password"
            extraStyle="bg-gray-500/20 focus:outline-persian-blue-500"
          ></Input>
          {errors.password && (
            <span className="text-red-500/80">Password is required</span>
          )}
          <Button
            type="submit"
            variant="secondry"
            text="Signup"
            extraStyle="flex items-center text-persian-blue-500 justify-center gap-2 w-full font-normal"
          />
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link
            href={"/signin"}
            className="text-persian-blue-500 font-semibold cursor-pointer"
          >
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
