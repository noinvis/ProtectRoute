import React from 'react'

const Neytral = () => {
  const data = [];

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
        {
          data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>{item.miqdor}</td>
                <td>{item.holat}</td>
                <td>{item.type}</td>
                <td>{item.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-[#555]">Ma'lumot topilmadi</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}

export default Neytral;
