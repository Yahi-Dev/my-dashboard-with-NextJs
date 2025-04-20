'use client'
import {IoCart } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store";


export const WidgetsGrid = () => {

    const isCart = useAppSelector(state => state.counter.count);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <SimpleWidget 
          label="Carrito"
          title={`${isCart}`}
          href="/dashboard/counter"
          subtitle="Tus productos a comprar"
          icon={<IoCart size={24} className="text-blue-600" />}
        />
      </div>
    );
  };