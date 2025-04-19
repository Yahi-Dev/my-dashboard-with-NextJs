"use client";

import React, { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {
  const [count, setCount] = useState(value);

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Contador con efecto neumorfismo */}
      <div className="relative">
        <span className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          {count}
        </span>
        <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-md"></div>
      </div>

      {/* Botones con efectos interactivos */}
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="relative overflow-hidden flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all w-[120px] shadow-lg hover:shadow-emerald-500/30 group"
        >
          <span className="relative z-10 font-bold text-lg">+1</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
          <span className="absolute -inset-1 bg-green-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></span>
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="relative overflow-hidden flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 transition-all w-[120px] shadow-lg hover:shadow-pink-500/30 group"
          disabled={count === 0}
        >
          <span className="relative z-10 font-bold text-lg">-1</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
          <span className="absolute -inset-1 bg-red-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></span>
        </button>
      </div>
    </div>
  );
};

export default CartCounter;
