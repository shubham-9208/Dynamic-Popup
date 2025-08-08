'use client'

import Dashboard from "@/Component/Dashboard";
import PreviewPopup from "@/Component/PreviewPopup";
import { useState } from "react";


export default function Home() {
  const [passdata, setpassdata] = useState('')
  const [secondData, setsecondData] = useState('')
  const [img, setimg] = useState()
  const [on, seton] = useState(false)
  const [color, setcolor] = useState()
  return (
    <div className=" flex justify-center bg-black items-center w-[100%] h-[100%] ">
      <div className=" w-[50%] h-[100vh] gap-5 flex flex-col justify-center items-center">
        <Dashboard setimg={setimg} passdata={passdata} setpassdata={setpassdata} secondData={secondData} setsecondData={setsecondData}  on={on} seton={seton} setcolor={setcolor}/>
      </div>
      
      <div className="  w-[50%] h-[100vh] flex justify-center items-center">
        <PreviewPopup passdata={passdata} secondData={secondData} img={img} on={on} color={color} />
      </div>
    </div>
  );
}
