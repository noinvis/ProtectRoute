import React from "react";

const All = () => {
  const data = [
    {
      miqdor: "Sulaymon Ne'matov",
      holat: "SMM PRO",
      type: "O'qiyabdi",
      time: "7",
    },
    {
      miqdor: "Azamat Omonkeldiyev Begzod o'g'li",
      holat: "Bootcamp Full Stack NodeJS+VueJS",
      type: "O'qiyabdi",
      time: "5",
    },
    {
      miqdor: "	Ikromxon Shukrullayev Ilxom O'g'li",
      holat: "Frontend ReactJS (Standard)",
      type: "O'qiyabdi",
      time: "5",
    },
    {
      miqdor: "Saidnurmuhammadulloxon Nasimxonov Saidrasulxon o'g'li",
      holat: "Frontend ReactJS (Standard)",
      type: "O'qiyabdi",
      time: "5",
    },
    {
      miqdor: "Abduxamid Usmonqulov Abduxoshim o'gli",
      holat: "Frontend ReactJS (Standard)",
      type: "O'qiyabdi",
      time: "5",
    },
    {
      miqdor: "Javohir Komilov Doston o'g'li",
      holat: "Python Backend (Advanced)",
      type: "O'qiyabdi",
      time: "4",
    },
    {
      miqdor: "Muqaddas Murodova Ismoil qizi",
      holat: "UX/UI Design (Standard)",
      type: "O'qiyabdi",
      time: "6",
    },
    {
      miqdor: "Sabrina Xamidova Zafar qizi",
      holat: "SMM PRO",
      type: "O'qiyabdi",
      time: "7",
    },
    {
      miqdor: "Jasur Sobirov Zokir o'g'li",
      holat: "Bootcamp Full Stack NodeJS+ReactJS",
      type: "O'qiyabdi",
      time: "3",
    },
    {
      miqdor: "Aziza Rashidova Shavkat qizi",
      holat: "Frontend ReactJS (Standard)",
      type: "O'qiyabdi",
      time: "5",
    }
  ];
  return (
    <table className="w-full border1 shadow-md">
      <thead className="bg-[#BC8E5B] text-white border1">
        <tr className="h-10 text-left">
          <th className="px-[1rem]">Reyting</th>
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
  );
};

export default All;
