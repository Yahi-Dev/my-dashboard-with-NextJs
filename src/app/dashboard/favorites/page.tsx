import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
    title: 'Favoritos',
    description: 'Pokemons favoritos',
}


export default async function PokemonsPage() {


  return (
    <div className="flex flex-col bg-gray-900 min-h-screen p-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Favorites Pokemons
          </h1>
          <span className="text-sm font-mono px-3 py-1 bg-gray-800 text-yellow-400 rounded-full border border-yellow-400/30">
            GLOBAL STATE
          </span>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl opacity-75 group-hover:opacity-100 transition duration-500 blur-lg"></div>
          <div className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <PokemonGrid pokemons={[]} />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <p className="text-gray-400 font-mono text-sm">
            Loaded: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
