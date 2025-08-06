'use client'

import PreviewPopup from "@/Component/PreviewPopup";
import Tiptap from "@/Component/TipTap";
import { useState } from "react";


export default function Home() {
  const [passdata, setpassdata] = useState('')
   const [secondData, setsecondData] = useState('')
  return (
    <div className=" flex justify-center bg-black items-center w-[100%] h-[100%] ">
      <div className=" w-[50%] bg-red-400 h-[100vh] gap-5 flex flex-col justify-center items-center">
        {/* <Dashboard passdata={passdata} setpassdata={setpassdata} /> */}
        <Tiptap passdata={passdata} setpassdata={setpassdata}/>
        <Tiptap passdata={secondData} setpassdata={setsecondData}/>
      </div>
      <div className=" w-[50%] h-[100%] bg-amber-500 flex justify-center items-center">
        <PreviewPopup passdata={passdata} secondData={secondData}/>
      </div>
    </div>
  );
}
