import React from 'react'

const Result = () => {
  return (
    <div className='w-[700px] bg-white p-[20px] rounded-[1rem]'>
        <p className='text-[24px] font-semibold text-[#555]'>Yig'ilgan natijalar monitoringi</p>
        <p className='text-[#555] font-medium mt-[1rem]'>Darsga ishtirok bo'yicha jami XP 448, Jami Kumush 2812</p>
        <p className='text-[#555] font-medium mt-[1rem]'>Uyga vazifa bo'yicha jami XP 1012, Jami Kumush 6397</p>
        <p className='text-[#555] font-medium mt-[1rem]'>Imtihondan o'tish bo'yicha jami XP 43, Jami Kumush 322</p>
        <p className='text-[#555] font-medium mt-[1rem]'>Aministratsiya tomonidan berilgan jami XP 4, Jami Kumush 0</p>
        <div className='w-full h-[1px] bg-[#555] mt-[1rem]'></div>
        <p className='font-semibold text-[18px] mt-[1rem]'>Jami yig'ilgan XP: <span className='text-green-500'>1507</span></p>
        <p className='font-semibold text-[18px]'>Jami yig'ilgan Kumushlar: <span className='text-[#999]'>9531</span></p>
    </div>
  )
}

export default Result