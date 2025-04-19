import { Pokemon, PokemonsResponse } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

// interface PageProps {
//   params: { id: string };
//   searchParams?: Record<string, string | string[] | undefined>;
// }

interface SpriteCardProps {
  src: string;
  alt: string;
  hoverEffect: string;
  glowColor?: "default" | "gold";
}

export async function generateStaticParams() {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=444`
  ).then((res) => res.json());

  return data.results.map((pokemon) => ({
    name: pokemon.name, 
  }));
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      // cache: "force-cache",
      next: { revalidate: 60 * 60 * 30 * 6 },
    }).then((res) => res.json());

    return data;
  } catch {
    notFound();
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  try {
    const awaitedParams = await params;
    const pokemon = await getPokemon(awaitedParams.name);

    return {
      title: `Pokemon ${pokemon.name}`,
      description: `Página del Pokémon ${pokemon.name}`,
    };
  } catch {
    return {
      title: "Error",
      description: "No se pudo cargar el Pokémon",
    };
  }
}

function SpriteCard({
  src,
  alt,
  hoverEffect,
  glowColor = "default",
}: SpriteCardProps) {
  const glowClass =
    glowColor === "gold"
      ? "drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
      : "drop-shadow-[0_0_8px_rgba(100,200,255,0.5)]";

  return (
    <div
      className={`relative ${hoverEffect} transition-transform duration-300`}
    >
      <div
        className={`absolute inset-0 rounded-full ${
          glowColor === "gold" ? "bg-yellow-500/20" : "bg-blue-400/20"
        } blur-md`}
      ></div>
      <Image
        src={src}
        width={80}
        height={80}
        alt={alt}
        className={`relative z-10 ${glowClass}`}
      />
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const awaitedParams = await params;
  const pokemon = await getPokemon(awaitedParams.name);

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen p-6 items-center">
      {/* HEADER CON ONDA DE LUZ */}
      <div className="relative w-full max-w-4xl mb-10">
        <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-20 animate-pulse-slow"></div>
        <div className="relative bg-gray-800 rounded-xl border-2 border-gray-700 p-6 shadow-2xl">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500 capitalize tracking-tight">
            #{pokemon.id} <span className="text-stroke">{pokemon.name}</span>
          </h1>
        </div>
      </div>

      {/* CARD PRINCIPAL CON EFECTO 3D */}
      <div className="relative w-full max-w-4xl transform transition-all duration-500 hover:-translate-y-2">
        {/* EFECTO DE LUZ TRASERA */}
        <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 to-blue-400/30 rounded-2xl blur-md opacity-0 hover:opacity-100 transition duration-700"></div>

        <div className="relative bg-gray-800 rounded-2xl border-2 border-gray-700 overflow-hidden shadow-2xl">
          {/* IMAGEN EPICA CON BRILLO */}
          <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 p-10 border-b-2 border-gray-700">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-10"></div>
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={300}
              height={300}
              alt={pokemon.name}
              className="mx-auto drop-shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* MOVES CON ESTILO POKEBALL */}
          <div className="p-6 bg-gray-850 border-b-2 border-gray-700">
            <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
              <span className="bg-red-500 w-5 h-5 rounded-full inline-block mr-2 border-2 border-white"></span>
              Movimientos
            </h2>
            <div className="flex flex-wrap gap-2">
              {pokemon.moves.slice(0, 10).map((move) => (
                <span
                  key={move.move.name}
                  className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm capitalize border border-gray-600 hover:bg-yellow-500 hover:text-gray-900 hover:border-yellow-300 transition-all"
                >
                  {move.move.name}
                </span>
              ))}
            </div>
          </div>

          {/* STATS CON EFECTO HOLO */}
          <div className="grid md:grid-cols-2 gap-5 p-6 bg-gray-800/50">
            {/* TIPOS */}
            <div className="bg-gray-700/90 p-4 rounded-xl border border-gray-600 hover:border-yellow-400 transition-colors group">
              <p className="text-sm text-gray-400 mb-2">Tipo</p>
              <div className="flex gap-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type.slot}
                    className={`px-4 py-1 rounded-full text-white text-sm font-medium capitalize 
                  ${
                    type.type.name === "fire"
                      ? "bg-gradient-to-r from-red-500 to-orange-500"
                      : type.type.name === "water"
                      ? "bg-gradient-to-r from-blue-400 to-blue-600"
                      : type.type.name === "grass"
                      ? "bg-gradient-to-r from-green-400 to-green-600"
                      : "bg-gradient-to-r from-purple-500 to-indigo-500"
                  }
                `}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>

            {/* PESO */}
            <div className="bg-gray-700/90 p-4 rounded-xl border border-gray-600 hover:border-yellow-400 transition-colors">
              <p className="text-sm text-gray-400 mb-2">Peso</p>
              <p className="text-2xl font-bold text-yellow-400">
                {pokemon.weight / 10}{" "}
                <span className="text-gray-300 text-lg">kg</span>
              </p>
            </div>

            {/* SPRITES */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="bg-gray-700/90 p-4 rounded-xl border border-gray-600 hover:border-blue-400 transition-colors">
                <p className="text-sm text-gray-400 mb-3">Normal</p>
                <div className="flex justify-center space-x-6">
                  <SpriteCard
                    src={pokemon.sprites.front_default}
                    alt={`${pokemon.name} front`}
                    hoverEffect="scale-110"
                  />
                  <SpriteCard
                    src={pokemon.sprites.back_default}
                    alt={`${pokemon.name} back`}
                    hoverEffect="scale-110"
                  />
                </div>
              </div>
              <div className="bg-gray-700/90 p-4 rounded-xl border border-gray-600 hover:border-yellow-400 transition-colors">
                <p className="text-sm text-gray-400 mb-3">Shiny</p>
                <div className="flex justify-center space-x-6">
                  <SpriteCard
                    src={pokemon.sprites.front_shiny}
                    alt={`${pokemon.name} shiny front`}
                    hoverEffect="scale-110"
                    glowColor="gold"
                  />
                  <SpriteCard
                    src={pokemon.sprites.back_shiny}
                    alt={`${pokemon.name} shiny back`}
                    hoverEffect="scale-110"
                    glowColor="gold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CON ESTILO POKEDEX */}
      <div className="mt-10 text-center">
        <p className="text-gray-500 text-sm font-mono">
          Data loaded at: {new Date().toLocaleTimeString()} • PID:{" "}
          {pokemon.id.toString().padStart(4, "0")}
        </p>
      </div>
    </div>
  );
}
