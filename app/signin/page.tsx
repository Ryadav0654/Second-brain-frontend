"use client";
import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Input from "@/components/Input";
import apiClient from "@/lib/apiClient";
import { signInUrl } from "@/lib/config";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SigninProps {
  username: string;
  password: string;
}
const Signin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SigninProps>();
  const router = useRouter();
  const hanldeSignIn: SubmitHandler<SigninProps> = async (data) => {
    try {
      reset();
      const res = await apiClient.post(signInUrl, { ...data });
      if (!res) {
        console.error("error occured while login: ", res);
      }
      console.log(res);

      if (res.status === 200) {
        router.push("/dashboard");
      } else {
        console.error("error occured while login!");
      }
    } catch (error) {
      console.error("error occured while login: ", error);
    }
  };

  return (
    <div className="flex h-screen w-full px-24 py-10">
      <div className=" flex justify-center items-center w-[60vw]">
        {/* <h1 className="text-4xl">signIn photo</h1> */}
        <Image width={500} height={500} src="/login-bg.png" alt="login image" />
        {/* <video className="z-10 w-full  bg-center bg-cover" loop src="./signIn.mp4"></video> */}
      </div>
      <div className="flex justify-center items-center flex-col w-[40vw]">
        <h1 className="text-4xl font-extrabold"> Welcome to second Brain</h1>
        <form
          onSubmit={handleSubmit(hanldeSignIn)}
          className="flex flex-col gap-4 w-full  mt-6"
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
            text="Signin"
            extraStyle="flex text-persian-blue-500 font-bold items-center justify-center gap-2 w-full  font-normal"
          />
        </form>
        <p className="mt-4 ">
          Don't have an account?{" "}
          <Link
            className="text-persian-blue-500 font-bold cursor-pointer"
            href="/signup"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
