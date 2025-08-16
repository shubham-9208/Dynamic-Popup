'use client'

import EcommerceSaaS from "@/Component/Demo";


import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    passdata: '',
    secondData: '',
    img: null,
    on: false,
    color: null,
    border: 'white',
    borderon: null,
    borderwidth: 2,
    borderradius: null,
    borderpadding: null,
    innercolor: null,
    width:500,
    height:400,
    maincolor: null,
    mainborder: 'white',
    mainborderon: true,
    mainborderwidth: 2,
    mainborderradius: null,
    mainborderpadding: null,
    imageposition:'left',
    popupposition:'Center'
  });
  
  
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setisMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const forMobile = () => (
    <div className="flex justify-center bg-black items-center w-full h-full">
      <div className="w-full min-h-screen gap-5 flex flex-col justify-center items-center">
        <p className="text-white text-2xl font-bold">
          Please open this page in desktop mode
        </p>
      </div>
    </div>
  );

  if (isMobile) return forMobile();

  return (
    <div className="flex justify-center bg-black items-center">
      {/* <div className="w-[50%] h-[100vh] gap-5 flex flex-col justify-center items-center">
        <Dashboard state={state} setState={setState}/>
      </div>

      <div className="w-[50%] h-[100vh] flex justify-center items-center">
        <PreviewPopup state={state} setState={setState} />
      </div> */}
      <EcommerceSaaS state={state} setState={setState}/>
    </div>
  );
}
