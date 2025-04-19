import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemon = async (limit = 44, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Error en la API de Pokemon'); // Simulando un error en la API
  // throw notFound();

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemon(444);

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen p-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Pokédex
          </h1>
          <span className="text-sm font-mono px-3 py-1 bg-gray-800 text-yellow-400 rounded-full border border-yellow-400/30">
            STATIC GENERATION
          </span>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl opacity-75 group-hover:opacity-100 transition duration-500 blur-lg"></div>
          <div className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <PokemonGrid pokemons={pokemons} />
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
