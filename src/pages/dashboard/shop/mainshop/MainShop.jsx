import React from 'react'
import img from '../../../../assets/image.png'

const MainShop = () => {
  const data = [
    {
      img: img,
      title: "Najot ta'lim ruchkasi",
      price: 800
    },
    {
      img: img,
      title: "Najot ta'lim ruchkasi",
      price: 800
    },
    {
      img: img,
      title: "Najot ta'lim ruchkasi",
      price: 800
    },
    {
      img: img,
      title: "Najot ta'lim ruchkasi",
      price: 800
    },
    {
      img: img,
      title: "Najot ta'lim ruchkasi",
      price: 800
    },
    {
      img: img,
      title: "Najot ta'lim ruchkasi",
      price: 800
    },
    {
      img: img,
      title: "Najot ta'lim ruchkasi",
      price: 800
    },
    {
      img: img,
      title: "Najot ta'lim ruchkasi",
      price: 800
    },
  ]
  return (
    <div className='grid grid-cols-4 gap-[1rem]'>
      {
        data?.map((item, inx) => (
          <div key={inx} className='bg-white shadow-md rounded-[1rem]'>
            <div className='h-[250px] bg-contain flex justify-center items-center'>
              <img src={item.img} className='w-[200px]'/>
            </div>
            <div className='p-[1rem]'>
              <p className=''>{item.title}</p>
              <div className='flex justify-between items-center'>
                <p>Price: {item.price}</p>
                <button className='bg-green-500 p-[10px] rounded-[1rem] text-white'>Kumushingiz yetarli</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default MainShop