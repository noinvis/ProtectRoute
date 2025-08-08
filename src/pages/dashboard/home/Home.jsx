import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Home = ({first, second, third}) => {
  return (
    <div className='w-full'>
      <p className='text-center text-[30px]'>{third}</p>
      <div className='flex gap-[30px] tab  mt-[1rem]'>
        <NavLink end={false} to={""} className={'w-full'}>{first}</NavLink>
        <NavLink to={"jadval"} className={'w-full'}>{second}</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Home