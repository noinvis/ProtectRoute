import React from 'react'

const Kumushlar = () => {
  return (
    <div className='w-full'>
      <p className='text-[24px]'>Kumushlar: 99999 ta</p>
      <div className='bg-white w-[400px] mt-[10px] p-[20px] rounded-[1rem] shadow-md'>
        <p className='text-[#555] font-semibold flex gap-[10px]'>Bosqich: <span className='text-black font-bold'>99</span></p>
        <p className='py-[3px] text-[12px] w-[100px] text-center rounded-2xl bg-green-600 mt-[1rem] text-white'>999 / 1000</p>
        <div className='flex mt-[20px]'>
          <div className='bg-green-600 w-full h-[10px] round'></div>
          <div className='bg-green-300 w-1/50 h-[10px] round2'></div>
        </div>
        <p className='text-[#555] font-semibold flex gap-[10px] mt-[1rem]'>XP: <span className='text-black font-bold'>99999</span></p>
        <p className='font-semibold mt-[1rem]'>Reyting</p>
        <p className='font-semibold flex gap-[10px] mt-[1rem]'>Umumiy: <span className='text-[#BC8E5B] font-medium'>1 - o'rin</span></p>
        <p className='font-semibold flex gap-[10px] mt-[1rem]'>Frontend ReactJS (Standard) N98: <span className='text-[#BC8E5B] font-medium'>2 - o'rin</span></p>
      </div>
    </div>
  )
}

export default Kumushlar