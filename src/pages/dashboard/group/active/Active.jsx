import React from 'react'

const Active = () => {
  const data = [
    {
      miqdor: "Frontend ReactJS (Standard) N98",
      holat: "Dasturlash",
      type: "21",
      time: "30 Yan, 2025"
    },
]
  return (
    <table className="w-full shadow-md">
        <thead className="bg-[#BC8E5B] text-white">
          <tr className="h-10 text-center">
            <th>#</th>
            <th>Guruh nomi</th>
            <th>Yo'nalishi</th>
            <th>O'qituchi</th>
            <th>Boshlash vaqti</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.id} className="text-center">
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

export default Active