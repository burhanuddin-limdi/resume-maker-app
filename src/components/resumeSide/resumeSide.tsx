import React from 'react';
import './resumeSide.css'

export const ResumeSide:React.FC = () => {
  return (
    <div className="bg-[#171616] w-full h-full p-[75px] grid items-center text-center">

        <div className='grid grid-cols-3 items-center text-center a4-aspect h-[65vh] m-auto'>

            <div className="col-span-2 bg-[#E8F9FD] h-full"></div>
            <div className="col-span-1 bg-[#59CE8F] h-full"></div>
            

        </div>
        <div className='flex justify-evenly'>
          <div className='flex space-x-3'>
            <div className='aspect-square w-7 rounded-full bg-[#000]'></div>
            <div className='aspect-square w-7 rounded-full bg-[#E8F9FD]'></div>
            <div className='aspect-square w-7 rounded-full bg-[#59CE8F]'></div>

          </div>
        <button className='rounded-md bg-[#FF1E00] w-fit text-white text-sm py-1 px-3'>
            Download PDF
            </button>
        
        </div>
        

    </div>
  )
}
