import React from 'react'

const Paid = () => {
  const data = [
    {
      miqdor: "1 400 000 so'm",
      holat: "Paid",
      type: "Humo",
      time: "06 Sen, 2024 11:01"
    },
    {
      miqdor: "1 400 000 so'm",
      holat: "Paid",
      type: "Uzcard",
      time: "12 Okt, 2024 12:00"
    },
    {
      miqdor: "1 400 000 so'm",
      holat: "Paid",
      type: "Humo",
      time: "09 Noy, 2024 13:18"
    },
    {
      miqdor: "1 400 000 so'm",
      holat: "Paid",
      type: "Uzcard",
      time: "24 Apr, 2025 14:19"
    },
    {
      miqdor: "1 400 000 so'm",
      holat: "Paid",
      type: "Humo",
      time: "29 Iyul, 2025 14:36"
    }
]
  return (
    <table className="w-full border1 shadow-md">
        <thead className="bg-[#BC8E5B] text-white border1">
          <tr className="h-10 text-center">
            <th>#</th>
            <th>Miqdori</th>
            <th>Holati</th>
            <th>To'lov turi</th>
            <th>Vaqti</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.id} className="border-t1 text-center">
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

export default Paid