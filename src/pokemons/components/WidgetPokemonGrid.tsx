"use client";

import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";
// import React, { useState } from "react";
import React from "react";
import { IoHeartDislikeOutline } from "react-icons/io5";
import Link from "next/link";

export const WidgetPokemonGrid = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  // const [pokemons, setPokemons] = useState(favoritePokemons);


  // useEffect(() => {
  //   setPokemons(favoritePokemons)
  // }, [])
  

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl opacity-75 group-hover:opacity-100 transition duration-500 blur-lg"></div>
      <div className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 p-4 min-h-[300px] flex flex-col">
        {favoritePokemons.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <IoHeartDislikeOutline className="text-6xl text-red-500 mb-4 opacity-70" />
            <h3 className="text-xl font-bold text-gray-300 mb-2">
              No favorite pokémons yet
            </h3>
            <p className="text-gray-400 max-w-md">
              You havent added any pokémons to your favorites. Click the heart
              icon on a pokémon to add it here!
            </p>
            <div className="mt-6 animate-pulse">
              <div className="w-24 h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="w-32 h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="w-28 h-2 bg-gray-700 rounded-full"></div>
            </div>
            <Link
              href="/dashboard/pokemons"
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Browse Pokémons
            </Link>
          </div>
        ) : (
          <PokemonGrid pokemons={favoritePokemons} />
        )}
      </div>
    </div>
  );
};

export default WidgetPokemonGrid;
