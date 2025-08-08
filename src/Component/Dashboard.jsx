import React from 'react'
import Tiptap from './TipTap';

function Dashboard({ setimg, passdata, setpassdata, secondData, setsecondData,on,seton,setcolor }) {
    
    return (
        <div className=' flex flex-col gap-3'>
            <div className=' flex gap-5 items-center' >
                {/* <p className=' text-xl font-bold'>On/Off</p> */}
                <div className=' cursor-pointer flex items-center justify-center h-[50px] w-[100px]'>
                    <button
                    onClick={()=>seton(false)}
                    className={`cursor-pointer transition-all ease-in-out duration-300 w-[50%] h-full ${!on?'bg-yellow-400 text-white font-bold':'bg-white'}  rounded-bl-2xl rounded-l-2xl `}>OFF</button>
                    <button 
                    onClick={()=>seton(true)}
                    className={`cursor-pointer transition-all duration-300 ease-in-out w-[50%] h-full ${on?'bg-yellow-400 text-white font-bold':'bg-white'} rounded-br-2xl rounded-r-2xl`}>ON</button>
                </div>
            </div>
            <div className=' flex items-center justify-evenly rounded-md bg-slate-50 gap-4 p-1 border w-[300px]'>
            <label className='' htmlFor="">select background color</label>
                <input type="color" className='' onChange={(e)=>setcolor(e.target.value)} />
                </div>
            <input
                type="file"
                accept=".jpg,.jpeg,.png,.svg"
                className="w-[200px] h-[40px] bg-white rounded-lg p-2 outline-none text-center cursor-pointer"
                placeholder=""
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            setimg(reader.result);
                        };
                        reader.readAsDataURL(file);
                    }
                }}
            />
            <Tiptap passdata={passdata} setpassdata={setpassdata} />
            <Tiptap passdata={secondData} setpassdata={setsecondData} />
        </div>
    )
}

export default Dashboard