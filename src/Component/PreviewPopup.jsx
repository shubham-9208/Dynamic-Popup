'use client'
import { BackgroundColor } from '@tiptap/extension-text-style'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function PreviewPopup({passdata,secondData,img,on,color}) {
    const [close, setclose] = useState(false)
    const time = 5000

    useEffect(() => {
        localStorage.setItem('samay', time)
        const value = Number(localStorage.getItem('samay'))
        const timer = setTimeout(() => {
            setclose(true)
        }, value)
        return () => clearTimeout(timer)
    }, [])
    if (!close ) return null
    return (
        <>
        {on && 
            <div className="relative  flex items-center justify-center w-[100%] h-[100%]">
                {close &&
                    <div
                    style={{background:color}}
                    className="relative border border-[#d2a968] rounded-md p-4 text-center shadow-[0_0_8px_#d2a968] w-[90%] max-w-md">
                        <div className=' border p-1 '>
                            {/* Close Button */}
                            <button
                                onClick={() => setclose(false)}
                                className="absolute cursor-pointer -top-4 z-50 -right-2 text-red-500 text-2xl font-bold focus:outline-none">
                                ×
                            </button>
                            <div className=' flex justify-center items-center'>
                                {/* Title */}
                                {img && 
                                <div className=' w-[100%] h-[100%]'>

                                    <Image
                                        src={img}
                                        alt='img'
                                        width={100}
                                        height={100}
                                        className=' w-full h-full object-center'
                                    />
                                </div>}
                                <div>
                                    <div dangerouslySetInnerHTML={{__html:passdata}}/>

                                    {/* Divider */}
                                    <hr className="my-4 border-[#7d5a3f] w-1/2 mx-auto" />

                                    {/* Subtitle */}
                                    <div dangerouslySetInnerHTML={{__html:secondData}}/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
}
        </>
    )
}

export default PreviewPopup