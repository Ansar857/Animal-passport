"use client";
import Image from "next/image";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [session, setSession] = useState("");
  // const [challengeName, setChallengeName] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (data: any) => {
    // Handle form submission logic here
    console.log(data);
  };

  // HANDELING SING IN //

  const handleSignIn = async () => {
    try {
      const res = await fetch(`https://animalpassport.app/login`, {
        method: "POST",
        body: JSON.stringify({
          email: username,
          password: password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      // console.log(data.data.token);

      data.status == "successful" && router.push("/");

      if (data.status == "successful") {
        const token = data.data.token;
        router.push("/");
        localStorage.setItem("LoginToken", token);
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  return (
    <main className="flex justify-center gap-5 h-[100vh] ">
      <div className="lg:w-2/6 sm:w-full min-h-screen flex flex-col lg:flex-row items-center justify-center ">
        <div className="lg:hidden">
          <Image
            src="/Animal_passport.svg"
            priority={true}
            alt="logo"
            width={"100"}
            height={"100"}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white p-6 rounded-lg "
        >
          <text className="text-2xl font-bold text-slate-800">
            Welcome Back!
          </text>

          <div className="mt-10 pb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              placeholder="Enter email"
              type="email"
              id="email"
              name="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border-2 rounded-md focus:outline-none  focus:border-gray-300"
            />
          </div>
          <div className="pb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border-2 rounded-md focus:outline-none  focus:border-gray-300"
            />
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute mt-1 inset-y-0 right-0 flex items-center mr-3"
            >
              {showPassword ? (
                <RiEyeOffLine className="h-5 w-5 text-gray-500" />
              ) : (
                <RiEyeLine className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMe}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring focus:border-indigo-300"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>
          <div className="pt-6">
            <button
              onClick={handleSignIn}
              className="w-full bg-black py-2 px-4 border border-transparent rounded-md text-white hover:bg-slate-800"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="lg:w-3/4 hidden  bg-slate-100  lg:flex lg:justify-center shadow-md ">
        <Image
          src="/Animal_passport.svg"
          priority={true}
          alt="logo"
          width={"500"}
          height={"500"}
        />
      </div>
    </main>
  );
};

export default LoginForm;
