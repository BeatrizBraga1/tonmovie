import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Movie = {
  id: string;
  posterPath: string;
  title: string;
};

type GlobalContextValue = {
  addedMovies: Movie[];
  isMovieAdded: (movieId: string) => boolean;
  handleAddItem: (movieId: string, posterPath: string, title: string) => void;
  removeMovieFromCart: (movie: Movie) => void;
};


export const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

type GlobalContextProviderProps = {
  children: ReactNode;
};

export function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const [addedMovies, setAddedMovies] = useState<Movie[]>([]);

  const isMovieAdded = (movieId: string) => {
    return addedMovies.some((movie) => movie.id === movieId);
  };

  const handleAddItem = (movieId: string, posterPath: string, title: string) => {
    setAddedMovies((prevMovies) => {
      if (isMovieAdded(movieId)) {
        return prevMovies.filter((movie) => movie.id !== movieId);
      } else {
        return [...prevMovies, { id: movieId, posterPath, title }];
      }
    });
  };

  const removeMovieFromCart = (movie: Movie) => {
    setAddedMovies((prevMovies) => {
      return prevMovies.filter((m) => m.id !== movie.id);
    });
  };

  const value: GlobalContextValue = {
    addedMovies,
    isMovieAdded,
    handleAddItem,
    removeMovieFromCart,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
}
