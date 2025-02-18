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
import toast from "react-hot-toast";

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
      // if (!res) {
      //   console.error("error occured while login: ", res);
      // };
      // console.log("res", res);
      if (res.status === 200) {
        toast.success(res.data.message);
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      } else {
        console.error("error occured while login!");
      }
    } catch (error) {
      console.error("error occured while login: ", error);
    }
  };

  return (
    <div className="flex h-screen  w-full px-6 py-6 lg:px-24 lg:py-10">
      <div className="md:flex justify-center items-center w-[60vw] hidden ">
        {/* <h1 className="text-4xl">signIn photo</h1> */}
        <Image
          width={500}
          height={500}
          src="/login-bg.png"
          alt="login image"
          priority={true}
        />
        {/* <video className="z-10 w-full  bg-center bg-cover" loop src="./signIn.mp4"></video> */}
      </div>
      <div className="flex justify-center items-center flex-col md:w-[40vw] w-full">
        <h1 className="text-5xl md:text-4xl font-extrabold text-center ">
          {" "}
          Welcome to <span className="text-persian-blue-500">BrainSync</span>
        </h1>
        <form
          onSubmit={handleSubmit(hanldeSignIn)}
          className="flex flex-col gap-4 w-full text-xl md:text-lg  mt-6"
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
            {...register("password", {
              required: true,
              maxLength: 20,
              minLength: 8,
            })}
            placeholder="Enter your password"
            extraStyle="bg-gray-500/20 focus:outline-persian-blue-500"
          ></Input>
          {errors.password && (
            <span className="text-red-500/80">Password is required.</span>
          )}

          <Button
            type="submit"
            variant="secondry"
            text="Signin"
            extraStyle="flex text-persian-blue-500 font-bold items-center justify-center gap-2 w-full hover:bg-persian-blue-500/80 hover:text-white"
          />
        </form>
        <p className="mt-4 ">
          Don&#39;t have an account?{" "}
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
