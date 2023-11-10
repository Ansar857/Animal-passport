

"use client";
import { Box, Image, Input, Text, chakra } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// USE STATES



const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [session, setSession] = useState("");
  const [challengeName, setChallengeName] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const router = useRouter();

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

    // data.status == 'successful' && router.push('/')

    if(data.status == 'successful'){
      const token = data.data.token
      localStorage.setItem("LoginToken" , token)
    }
    
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      margin={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Box
        display={"flex"}
        width={{ "md": "1440px" }}
        height={{ "md": "960px" }}
        padding={{ "md": "48px 32px" }}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ "md": "32px" }}
        background={"var(--base-white, #FFF)"}
      >
        {/* ############# CONTNENT BOX  ########################## */}

        <Box
          display={"flex"}
          width={{ "md": "360px" }}
          flexDirection={"column"}
          alignItems={"center"}
          gap={{ "md": "32px" }}
        >
          {/* #############   HEADER  ########################## */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={{ "md": "30px" }}
            alignSelf={"stretch"}
          >
            {/* Logo */}
            <Image
              src="/Animal_passport.svg"
              alt="serve command logo"
              width={{sm:"120px" , "md" : "80px"}}
              height={{sm:"120px" , "md" : "80px"}}
              fill={"var(--primary-main, #11190C)"}
              padding={{sm:'20px' , md : "0" }} 
            />

            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={{sm:"10px" , "md" : "12px"}}
              alignSelf={"stretch"}
            >
              <Text
                alignSelf={"stretch"}
                color={"var(--gray-900, #101828)"}
                textAlign={"center"}
                fontFamily={"Chivo"}
                fontSize={{ sm:"22px"  ,  "md" : "30px"}}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"39.9px"}
                paddingBottom={{sm:'20px' , md:'0' }}
              >
                Log in to your account
              </Text>
            </Box>
          </Box>

          {/* #############   CONTNENT   ########################## */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={{ sm:"50px" ,"md":"24px"}}
            alignSelf={"stretch"}
            borderRadius={"12px"}
          >
            {/* Form */}
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={{ sm:"25px" ,"md":"20px"}}
              alignSelf={"stretch"}
            >
              {/* Input */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={{ sm:"8px" ,"md":"8px"}}
                alignSelf={"stretch"}
              >
                <Text
                  height={"16px"}
                  alignSelf={"stretch"}
                  color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                  fontFamily={"Inter"}
                  fontSize={{ sm:"11px" ,"md":"12px"}}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"16px"}
                  letterSpacing={"0.3px"}
                >
                  Email
                </Text>

                {/* Input Group */}
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  alignSelf={"stretch"}
                >
                  <Input
                    display={"flex"}
                    height={"40px"}
                    padding={"0px 16px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                    flex={"1 0 0"}
                    borderRadius={"4px"}
                    border={"1px solid var(--gray-200, #E2E8F0)"}
                    background={"var(--white, #FFF)"}
                    alignSelf={"stretch"}
                    fontFamily={"Inter"}
                    fontSize={{ sm:"14px" ,"md":"16px"}}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    lineHeight={"normal"}
                    placeholder="Enter your Email"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></Input>
                </Box>
              </Box>

              {/* Input */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"8px"}
                alignSelf={"stretch"}
              >
                <Text
                  height={"16px"}
                  alignSelf={"stretch"}
                  color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                  fontFamily={"Inter"}
                  fontSize={{ sm:"11px" ,"md":"12px"}}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"16px"}
                  letterSpacing={"0.3px"}
                >
                  Password
                </Text>

                {/* Input Group */}
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  alignSelf={"stretch"}
                >
                  <Input
                    display={"flex"}
                    height={"40px"}
                    padding={"0px 16px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                    flex={"1 0 0"}
                    borderRadius={"4px"}
                    border={"1px solid var(--gray-200, #E2E8F0)"}
                    background={"var(--white, #FFF)"}
                    alignSelf={"stretch"}
                    fontFamily={"Inter"}
                    fontSize={{ sm:"14px" ,"md":"16px"}}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    lineHeight={"24px"}
                    placeholder="Enter your password"
                    color={"var(--gray-500, #667085)"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Input>
                </Box>
              </Box>
            </Box>

            {/* Acrtion */}
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"16px"}
              alignSelf={"stretch"}
            >
              {/* Button */}
              <chakra.button
                display={"flex"}
                height={"40px"}
                padding={"0px 16px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"8px"}
                alignSelf={"stretch"}
                color={"#fff"}
                borderRadius={"6px"}
                fontFamily={"Inter"}
                backgroundColor={"var(--primary-main, #11190C)"} // Use the 'bg' prop to set the background color
                onClick={handleSignIn}
              >
                Sign in
              </chakra.button>
              {challengeName === "NEW_PASSWORD_REQUIRED" && (
                <div>
                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button>Change Password</button>
                </div>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
