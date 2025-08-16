'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'


function PreviewPopup({ state, setState }) {

    const time = 5000;

    useEffect(() => {
        localStorage.setItem('samay', time);
        const value = Number(localStorage.getItem('samay'));
        const timer = setTimeout(() => {
            setState(prev => ({ ...prev, on: true }))
        }, value);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (state.on) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [state.on]);



    const flexDirectionClass =
        state.imageposition === 'Left'
            ? 'flex-row'
            : state.imageposition === 'Right'
                ? 'flex-row-reverse'
                : state.imageposition === 'Top'
                    ? 'flex-col'
                    : state.imageposition === 'Bottom'
                        ? 'flex-col-reverse'
                        : 'flex-row';

    const popupDirection =
        state.popupposition === 'Center'
            ? 'items-center justify-center'
            : state.popupposition === 'Right'
                ? 'items-center justify-end'
                : state.popupposition === 'Left'
                    ? 'items-center justify-start'
                    : state.popupposition === 'Top'
                        ? 'items-start justify-center'
                        : state.popupposition === 'Bottom'
                            ? 'items-end justify-center'
                            : state.popupposition === 'Left-Top'
                                ? 'items-start justify-start'
                                : state.popupposition === 'Left-Bottom'
                                    ? 'items-end justify-start'
                                    : state.popupposition === 'Right-Top'
                                        ? 'items-start justify-end'
                                        : state.popupposition === 'Right-Bottom'
                                            ? 'items-end justify-end'
                                            : 'items-center justify-center';

    return (
        <>
            {state.on && (
                <div className={`relative flex ${popupDirection} w-full h-[100%] 
                bg-black/30 z-40 `}>

                    <div
                        style={{
                            background: state.color,
                            height: state.height + 'px',
                            width: state.width + 'px',
                            borderColor: state.mainborder,
                            borderWidth: state.mainborderon ? state.mainborderwidth + 'px' : 0,
                            borderStyle: state.mainborderon ? 'solid' : 'none',
                            borderRadius: state.mainborderradius ? state.mainborderradius + 'px' : 0,
                            padding: state.mainborderpadding + 'px',
                        }}
                        className="relative "
                    >
                        <div
                            style={{
                                background: state.innercolor,
                                borderColor: state.border,
                                borderWidth: state.borderon ? state.borderwidth + 'px' : 0,
                                borderStyle: state.borderon ? 'solid' : 'none',
                                borderRadius: state.borderradius ? state.borderradius + 'px' : 0,
                                padding: state.borderpadding + 'px',
                            }}
                            className=" overflow-hidden h-full w-full"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setState(prev => ({ ...prev, on: false }))}
                                className="absolute cursor-pointer -top-7 z-50 -right-3 text-red-500 text-4xl font-bold focus:outline-none"
                            >
                                ×
                            </button>

                            <div className={`flex justify-center items-center ${flexDirectionClass}`}>
                                {/* Image */}
                                {state.img && (
                                    <div className="">
                                        <Image
                                            src={state.img}
                                            alt="img"
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                {/* Text Content */}
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: state.passdata }} />

                                    {/* Divider */}
                                    <hr className="my-4 border-[#7d5a3f] w-1/2 mx-auto" />

                                    {/* Subtitle */}
                                    <div dangerouslySetInnerHTML={{ __html: state.secondData }} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}

export default PreviewPopup;
