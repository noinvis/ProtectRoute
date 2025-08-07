import React from 'react'
import img from '../assets/Background.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className='container h-screen flex justify-between items-center'>
      <div className='w-[50%] max-[1120px]:hidden'>
        <img src={img} />
      </div>
      <form className='w-[48%] max-[1120px]:w-full flex justify-center items-center' onSubmit={handleLogin}>
        <div className='flex flex-col w-[400px]'>
          <p className='text-[32px] font-semibold'>Kirish</p>
          <input required type="text" placeholder='Kirish' className='indent-4 border mt-[30px] py-[13px] rounded-[10px] border-[#DADCE5B] outline-0 focus:border-[#BC8E5B]' />
          <input required type="password" placeholder='Parol' className='indent-4 border mt-[30px] mb-[30px] py-[13px] rounded-[10px] border-[#DADCE5B] outline-0 focus:border-[#BC8E5B]'/>
          <button type="submit" className='w-full bg-[#BC8E5B] rounded-[10px] py-[15px] text-white cursor-pointer'>Kirish</button>
        </div>
      </form>
    </div>
  )
}

export default Login
