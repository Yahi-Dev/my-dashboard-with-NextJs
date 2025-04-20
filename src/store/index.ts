import { configureStore } from '@reduxjs/toolkit'


import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import CounterReducer  from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemons'
// import { localStorageMiddleware } from './middlewares/localStorage-middlewares';


export const store = configureStore({
  reducer: {
   counter: CounterReducer,
   pokemons: pokemonsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  //  .concat(localStorageMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
