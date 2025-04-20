"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { useEffect } from "react";
import {setFavoritesPokemons} from './pokemons/pokemons';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {

  useEffect(() => {
      const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
      store.dispatch( setFavoritesPokemons(favorites) );
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
