import { useState } from 'react';

export const BalanceComp = ({ balance }) => {
  return (
    <div className="flex flex-col mt-3 items-start p-4 border-b w-[90%] border-gray-300 ">
      <div className="flex items-center">
        <div className="font-semibold text-gray-500 ">Your Balance</div>
        <div className="text-2xl ml-2 font-bold text-black">₹{balance}</div>
      </div>
    </div>
  );
};
