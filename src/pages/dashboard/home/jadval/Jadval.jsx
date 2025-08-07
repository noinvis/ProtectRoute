import React from 'react'

const Jadval = () => {
  const days = ["D", "S", "C", "P", "J", "S", "Y"];
  const dates = [
    "", "", "", "", 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31,
  ];
  const redDots = [7, 9, 12, 14, 16, 19, 21, 23, 26, 28, 30];
  const today = 7;

  return (
    <div className="w-[400px] p-7 rounded-xl shadow-md bg-white">
      <div className="flex justify-between items-center mb-4">
        <button className="text-gray-500">&lt;</button>
        <span className="text-gray-700 font-semibold">Avg 2025</span>
        <button className="text-gray-500">&gt;</button>
      </div>
      <div className="grid grid-cols-7 text-center text-sm text-gray-500 font-medium mb-1">
        {days.map((item, inx) => (
          <div key={inx}>{item}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center text-sm gap-y-2">
        {dates.map((date, inx) => (
          <div key={inx} className="relative flex items-center justify-center h-8">
            {date !== "" && (
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  date === today ? "bg-orange-200 text-black font-medium" : ""
                }`}
              >
                {date}
              </div>
            )}
            {redDots.includes(date) && (
              <div className="absolute top-0 right-0 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jadval