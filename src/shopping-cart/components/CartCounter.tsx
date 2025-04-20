"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { AddOne, SubtractOne, initCounterState } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}

export interface counterResponse{
  method: string;
  count: number;
}

const getApiCounter = async():Promise<counterResponse> =>{
  const data = await fetch('/api/counter').then(res => res.json());

  return data; 
}

export const CartCounter = ({ value = 10 }: Props) => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter()
      .then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch])

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Contador con efecto neumorfismo */}
      <div className="relative">
        <span className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          {count}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-500/20 rounded-full blur-md"></div>
      </div>

      {/* Botones con efectos interactivos */}
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(AddOne())}
          className="relative overflow-hidden flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all w-[120px] shadow-lg hover:shadow-purple-500/30 group"
        >
          <span className="relative z-10 font-bold text-lg">+1</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
          <span className="absolute -inset-1 bg-indigo-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></span>
        </button>

        <button
          onClick={() => dispatch(SubtractOne())}
          className="relative overflow-hidden flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 transition-all w-[120px] shadow-lg hover:shadow-rose-500/30 group"
          disabled={count === 0}
        >
          <span className="relative z-10 font-bold text-lg">-1</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
          <span className="absolute -inset-1 bg-pink-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></span>
        </button>
      </div>
    </div>
  );
};

export default CartCounter;
