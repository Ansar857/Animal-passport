"use client"
import React, { useEffect, useState } from "react";

const page = () => {
    const [dataApi, setDataApi] = useState<any>();
  useEffect(() => {
    const data = async () => {
      const res = await fetch(`https://animalpassport.app/login`, {
        method: "POST", 
        body: JSON.stringify({
            "email":"abc@gmail.com",
            "password":"12345"
        }),
        headers: {
            "Content-type": "application/json"
        }
      });
      const dataAgaay = await res.json();
      console.log(dataAgaay);
      return dataAgaay;
    };

    data();
  }, []);

  // console.log(data())
  return <div>api data </div>;
};

export default page;
