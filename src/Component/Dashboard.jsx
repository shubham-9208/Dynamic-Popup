import React from 'react'
import Tiptap from './TipTap';

function Dashboard({ state, setState, setdashboard }) {
    const numbers = Array.from({ length: 26 }, (_, i) => i * 2);

    return (
        <div className='flex flex-col gap-3'>

            {/* On/Off */}
            <div className='flex  items-center justify-between'>
                <div className='cursor-pointer flex items-center justify-center h-[50px] w-[100px]'>
                    <button
                        onClick={() => setState(prev => ({ ...prev, on: false }))}
                        className={`cursor-pointer transition-all ease-in-out duration-300 w-[50%] h-full ${!state.on ? 'bg-yellow-400 text-white font-bold' : 'bg-white'} rounded-bl-2xl rounded-l-2xl`}>
                        OFF
                    </button>
                    <button
                        onClick={() => setState(prev => ({ ...prev, on: true }))}
                        className={`cursor-pointer transition-all duration-300 ease-in-out w-[50%] h-full ${state.on ? 'bg-yellow-400 text-white font-bold' : 'bg-white'} rounded-br-2xl rounded-r-2xl`}>
                        ON
                    </button>
                </div>
                <button
                    onClick={() => setdashboard(false)}
                    className="cursor-pointer -top-7 z-50 -right-3 text-red-500 text-4xl font-bold focus:outline-none"
                >
                    ×
                </button>
            </div>

            <div className=' flex gap-8 justify-start items-center'>
                {/* Background color */}
                <div className='flex items-center justify-evenly rounded-md bg-slate-50 gap-4 p-1 border w-[300px]'>
                    <label>select background color</label>
                    <input
                        type="color"
                        onChange={(e) => setState(prev => ({ ...prev, color: e.target.value }))}
                    />
                </div>

                <div className='flex items-center rounded-md bg-slate-50 p-0.5 border w-[180px]'>
                    <label>Wid X Hig:</label>
                    <select
                        value={`${state.width}x${state.height}`}
                        onChange={(e) => {
                            const [w, h] = e.target.value.split('x').map(Number)
                            setState(prev => ({ ...prev, width: w, height: h }))
                        }}
                    >
                        <option value="500x400">500 x 400</option>
                        <option value="700x500">700 x 500</option>
                        <option value="500x600">500 x 600</option>
                        <option value="800x650">800 x 650</option>
                        <option value="400x600">400 x 600</option>
                        <option value="400x400">400 x 400</option>
                    </select>
                </div>

                <div>
                    <select
                        className='bg-white w-[80px] px-2 py-1.5 rounded-md'
                        value={state.popupposition}
                        onChange={(e) => setState(prev => ({ ...prev, popupposition: e.target.value }))}>
                        <option value="">select</option>
                        <option value="Left">Left</option>
                        <option value="Right">Right</option>
                        <option value="Top">Top</option>
                        <option value="Bottom">Bottom</option>
                        <option value="Center">Center</option>
                        <option value="Left-Top">Left-Top</option>
                        <option value="Left-Bottom">Left-Bottom</option>
                        <option value="Right-Top">Right-Top</option>
                        <option value="Right-Bottom">Right-Bottom</option>
                    </select>
                </div>
            </div>

            {/* main Border color */}
                <p className=' text-white'>Main border</p>
            <div className=' flex gap-2.5 justify-center items-center bg-gray-500 px-1 py-2 rounded-2xl '>


                {/*main Border on/off */}

                <p className='text-white'>border on/off</p>
                <div className='cursor-pointer flex items-center justify-center h-[40px] w-[100px]'>
                    <button
                        onClick={() => setState(prev => ({ ...prev, mainborderon: false }))}
                        className={`cursor-pointer transition-all ease-in-out duration-300 w-[50%] h-full ${!state.mainborderon ? 'bg-yellow-400 text-white font-bold' : 'bg-white'} rounded-bl-2xl rounded-l-2xl`}>
                        OFF
                    </button>
                    <button
                        onClick={() => setState(prev => ({ ...prev, mainborderon: true }))}
                        className={`cursor-pointer transition-all duration-300 ease-in-out w-[50%] h-full ${state.mainborderon ? 'bg-yellow-400 text-white font-bold' : 'bg-white'} rounded-br-2xl rounded-r-2xl`}>
                        ON
                    </button>
                </div>

                <div className='flex gap-1 items-center justify-center'>
                    <label className='text-white'> border color</label>
                    <input
                        type="color"
                        value={state.mainborder}
                        onChange={(e) => setState(prev => ({ ...prev, mainborder: e.target.value }))}
                    />
                </div>

                {/* Border width */}
                <div>
                    <p className='text-white'>BR width</p>
                    <select
                        className='bg-white w-[80px] px-2 py-1.5 rounded-md'
                        value={state.mainborderwidth}
                        onChange={(e) => setState(prev => ({ ...prev, mainborderwidth: Number(e.target.value) }))}>
                        <option value="">select</option>
                        {numbers.map(number => (
                            <option key={number} value={number}>{number}px</option>
                        ))}
                    </select>
                </div>

                {/* Border radius */}
                <div>
                    <p className='text-white'>BR radius</p>
                    <select
                        className='bg-white w-[80px] px-2 py-1.5 rounded-md'
                        onChange={(e) => setState(prev => ({ ...prev, mainborderradius: Number(e.target.value) }))}>
                        <option value="">select</option>
                        {numbers.map(number => (
                            <option key={number} value={number}>{number}px</option>
                        ))}
                    </select>
                </div>

                {/* Border padding */}
                <div>
                    <p className='text-white'>Padding</p>
                    <select
                        className='bg-white w-[80px] px-2 py-1.5 rounded-md'
                        onChange={(e) => setState(prev => ({ ...prev, mainborderpadding: Number(e.target.value) }))}>
                        <option value="">select</option>
                        {numbers.map(number => (
                            <option key={number} value={number}>{number}px</option>
                        ))}
                    </select>
                </div>
            </div>


            {/* innerborder */}
            <p className=' text-white'>Inner border</p>
            <div className=' flex gap-2 justify-center items-center bg-gray-500 px-1 py-1.5 rounded-2xl '>

                {/* Border on/off */}
                <p className='text-white'>border on/off</p>
                <div className='cursor-pointer flex items-center justify-center h-[40px] w-[100px]'>
                    <button
                        onClick={() => setState(prev => ({ ...prev, borderon: false }))}
                        className={`cursor-pointer transition-all ease-in-out duration-300 w-[50%] h-full ${!state.borderon ? 'bg-yellow-400 text-white font-bold' : 'bg-white'} rounded-bl-2xl rounded-l-2xl`}>
                        OFF
                    </button>
                    <button
                        onClick={() => setState(prev => ({ ...prev, borderon: true }))}
                        className={`cursor-pointer transition-all duration-300 ease-in-out w-[50%] h-full ${state.borderon ? 'bg-yellow-400 text-white font-bold' : 'bg-white'} rounded-br-2xl rounded-r-2xl`}>
                        ON
                    </button>
                </div>

                {/* Border color */}
                <div className=' flex justify-center items-center gap-2'>
                    <label className='text-white'>border color</label>
                    <input
                        type="color"
                        value={state.border}
                        onChange={(e) => setState(prev => ({ ...prev, border: e.target.value }))}
                    />
                </div>

                {/* Border width */}
                <div>
                    <p className='text-white'>BR width</p>
                    <select
                        className='bg-white w-[80px] px-2 py-1.5 rounded-md'
                        value={state.borderwidth}
                        onChange={(e) => setState(prev => ({ ...prev, borderwidth: Number(e.target.value) }))}>
                        <option value="">select</option>
                        {numbers.map(number => (
                            <option key={number} value={number}>{number}px</option>
                        ))}
                    </select>
                </div>

                {/* Border radius */}
                <div>
                    <p className='text-white'>BR radius</p>
                    <select
                        className='bg-white w-[80px] px-2 py-1.5 rounded-md'
                        onChange={(e) => setState(prev => ({ ...prev, borderradius: Number(e.target.value) }))}>
                        <option value="">select</option>
                        {numbers.map(number => (
                            <option key={number} value={number}>{number}px</option>
                        ))}
                    </select>
                </div>

                {/* Border padding */}
                <div>
                    <p className='text-white'>padding</p>
                    <select
                        className='bg-white w-[80px] px-2 py-1.5 rounded-md'
                        onChange={(e) => setState(prev => ({ ...prev, borderpadding: Number(e.target.value) }))}>
                        <option value="">select</option>
                        {numbers.map(number => (
                            <option key={number} value={number}>{number}px</option>
                        ))}
                    </select>
                </div>
            </div>


            <div className='flex items-center justify-evenly rounded-md bg-slate-50 gap-4 p-1 border w-[300px]'>
                <label>select inner background color</label>
                <input
                    type="color"

                    onChange={(e) => setState(prev => ({ ...prev, innercolor: e.target.value }))}
                />
            </div>
            <div className=' flex gap-5 justify-start items-center'>
                {/* Image upload */}
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.svg"
                    className="w-[200px] h-[40px] bg-white rounded-lg p-2 outline-none text-center cursor-pointer"

                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                setState(prev => ({ ...prev, img: reader.result }));
                            };
                            reader.readAsDataURL(file);
                        }
                    }}
                />

                {/* image position */}
                <div className=' flex justify-center items-center bg-white  p-2 rounded-md'>
                    <label className=''>Image Postion</label>
                    <select
                        className=''
                        value={state.imageposition}
                        onChange={(e) => setState(prev => ({ ...prev, imageposition: e.target.value }))}>
                        <option value="">select</option>
                        <option value="Left">Left</option>
                        <option value="Right">Right</option>
                        <option value="Top">Top</option>
                        <option value="Bottom">Bottom</option>
                    </select>
                </div>
            </div>



            {/* TipTap editors */}
            <Tiptap passdata={state.passdata} setpassdata={(val) => setState(prev => ({ ...prev, passdata: val }))} />
            <Tiptap passdata={state.secondData} setpassdata={(val) => setState(prev => ({ ...prev, secondData: val }))} />
        </div>
    );
}

export default Dashboard;
