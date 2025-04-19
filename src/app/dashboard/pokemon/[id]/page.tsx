import { Pokemon } from "@/pokemons";
import { Metadata } from "next";


interface Props {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const {id, name} = await getPokemon(params.id);

    return {
        title: `${id } - ${name}`,
        description: `Pagina del Pokemon ${ name }`,
    }
}


const getPokemon = async (id: string): Promise<Pokemon> => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {// Revalidar cada 60 segundos
        // cache: 'force-cache', //TODO: cambiar esto en un futuro
        next: {
            revalidate: 60 * 60 * 30 * 6,
        },
    })
    .then(res => res.json());
    
    return data;
}

export default async function PokemonPage( { params }: Props) {

  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokemon {pokemon.name}</h1>
    </div>
  );
}