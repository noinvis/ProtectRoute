import React from 'react'

const Frontend = () => {
  const data = [
    {
      miqdor: "Lazizbek Soxobidinov Lutfillo o'g'li",
      holat: "Frontend ReactJS (Standard)",
      type: "O'qiyabdi",
      time: "5"
    }
]
  return (
    <table className="w-full border1 shadow-md">
        <thead className="bg-[#BC8E5B] text-white border1">
          <tr className="h-10 text-left">
            <th className='px-[1rem]'>Reyting</th>
            <th>Ism-familiya</th>
            <th>Kurs</th>
            <th>Holati</th>
            <th>Bosqich</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.id} className="border-t1">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{item.miqdor}</td>
              <td className="p-4">{item.holat}</td>
              <td className="p-4">{item.type}</td>
              <td className="p-4">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default Frontend