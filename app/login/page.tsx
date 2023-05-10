"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();

  const { register, handleSubmit, watch } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    router.push("/");
  };

  const email = watch("email");
  const password = watch("password");

  return (
    <main className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-full bg-white flex flex-col px-40 py-20">
        <span className="font-semibold text-5xl text-neutral-800">Log in</span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="flex flex-col mt-16"
          >
            <label
              htmlFor="email"
              className={`text-sm transition duration-300 ease-in-out ${
                email ? "opacity-100" : "opacity-0 translate-x-4"
              }`}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full text-sm border border-neutral-300 hover:shadow transition duration-300 ease-in-out px-2 py-2 rounded-md appearance-none outline-none bg-white"
              placeholder="email"
              {...register("email", { required: true })}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              delay: 0.1,
              damping: 20,
            }}
            className="flex flex-col mt-4"
          >
            <label
              htmlFor="password"
              className={`text-sm transition duration-300 ease-in-out ${
                password ? "opacity-100" : "opacity-0 translate-x-4"
              }`}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              className="w-full border text-sm border-neutral-300 hover:shadow transition duration-300 ease-in-out px-2 py-2 rounded-md appearance-none outline-none bg-white"
              {...register("password", { required: true })}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              delay: 0.2,
              damping: 20,
            }}
          >
            <input
              type="submit"
              value={"Continue with email"}
              className="text-sm flex w-full mt-8 bg-indigo-400 text-white rounded-md px-10 py-2 justify-center items-center cursor-pointer transition duration-300 ease-in-out hover:bg-indigo-500"
            />
          </motion.div>

          <div className="w-full flex flex-row space-x-4 justify-center items-center my-10">
            <div className="w-full h-[1px] bg-neutral-300"></div>
            <span className="text-xs text-neutral-300">OR</span>
            <div className="w-full h-[1px] bg-neutral-300"></div>
          </div>

          <motion.button
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              delay: 0.5,
              damping: 20,
            }}
            type="button"
            className="w-full text-sm text-gray-600 bg-white border border-neutral-200 px-10 py-2 flex justify-center items-center rounded-md shadow"
          >
            <Image
              src="/icons8-apple-48.png"
              className="max-h-6 mr-2"
              alt="apple logo"
              height={20}
              width={20}
            />
            Continue with Apple
          </motion.button>
          <motion.button
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              delay: 0.6,
              damping: 20,
            }}
            type="button"
            className="mt-4 text-sm text-gray-600 w-full bg-white border border-neutral-200 px-10 py-2 flex justify-center items-center rounded-md shadow"
          >
            <Image
              src="/icons8-facebook-48.png"
              className="max-h-6 mr-2"
              alt="facebook logo"
              height={20}
              width={20}
            />
            Continue with Facebook
          </motion.button>
          <motion.button
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              delay: 0.7,
              damping: 20,
            }}
            type="button"
            className="mt-4 text-sm text-gray-600 w-full bg-white border border-neutral-200 px-10 py-2 flex justify-center items-center rounded-md shadow"
          >
            <Image
              src="/icons8-google-48.png"
              className="max-h-6 mr-2"
              alt="google logo"
              height={20}
              width={20}
            />
            Continue with Google
          </motion.button>
        </form>
      </div>
      <div className="w-1/2 h-full bg-gradient-to-tr to-[#CC6DFF]/40 from-[#76CDFF]/40 flex flex-col justify-start items-start px-40 py-40 relative">
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            delay: 0.9,
            damping: 20,
          }}
          className="flex flex-col"
        >
          <span className="font-semibold text-neutral-800">
            Pryzm has redefined my perceptions of renting and buying properties.
            I've been able to save not only money but, more importantly, my
            precious time.
          </span>
          <span className="mt-2 text-black/50">
            {"->"} Joe Smith, CEO Zillow
          </span>
        </motion.div>
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            delay: 1,
            damping: 20,
          }}
          className="absolute bottom-0 right-0 w-4/5 h-1/2"
        >
          <Image
            src="/demoapp.png"
            className="border border-neutral-300 drop-shadow-xl  rounded-tl-xl"
            alt="demo of the app"
            fill={true}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Login;
