'use client'

import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemons";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id] )
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  }

  return (
    <div className="mx-auto right-0 mt-2 w-64">
      <div className="flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-2xl border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 group">
        {/* Parte superior con imagen del Pokémon */}
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-900 border-b-2 border-gray-700 relative">
          {/* Efecto de halo al hacer hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-500 rounded-t-lg"></div>

          <div className="relative z-10">
            <Image
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={`Pokemon ${name}`}
              width={100}
              height={100}
              priority={false}
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300"
            />

            <p className="pt-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 capitalize">
              {name}
            </p>
          </div>
        </div>

        {/* Botón de explorar */}
        <div className="p-4 bg-gray-800 border-b-2 border-gray-700">
          <Link
            href={`/dashboard/pokemons/${name}`}
            className="block w-full border-2 border-yellow-400 rounded-full py-2 px-4 text-sm font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300 text-center"
          >
            Explorar Pokémon
          </Link>
        </div>

        {/* Sección de favoritos */}
        <div className="bg-gray-800 p-4 hover:bg-gray-700 transition-colors duration-300">
          <div onClick={ onToggle }
          className="flex items-center cursor-pointer">
            <div className="text-red-500 hover:text-red-400 transition-colors">
              {
                isFavorite 
                ?
                 (<IoHeart className="w-5 h-5" />)
                :
                (<IoHeartOutline className="w-5 h-5" />)
              }
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-300 leading-none">
                {
                  isFavorite
                  ? 'Es favorito'
                  : 'No es favorito'
                }
              </p>
              <p className="text-xs text-gray-400">Card Pokemon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
