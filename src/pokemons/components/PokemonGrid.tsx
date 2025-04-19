import { SimplePokemon } from "@/app/pokemons";
import PokemonCard from "./PokemonCard";

interface Props{
  pokemons: SimplePokemon[];
}



export const PokemonGrid = ({pokemons}: Props) => {

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
    {
      pokemons.map(pokemon => (
        <div key={pokemon.id} className="flex flex-col items-center gap-2">
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        </div>
      ))
    }
  </div>
  )
}

export default PokemonGrid
