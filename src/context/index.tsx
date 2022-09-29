import React from 'react';
import { createContext, useContext } from 'react';

import { useStore } from '../hooks';

type storeContextType = {
  sortBy: string;
  searchQuery: string;

  searchHandler: (value: string) => void;
  sortByHandler: (value: string) => void;
};

const storeContextDefaults: storeContextType = {
  sortBy: '',
  searchQuery: '',

  searchHandler: () => {},
  sortByHandler: () => {}
};

const StoreContext = createContext<storeContextType>(storeContextDefaults);

export function useStoreContext() {
  return useContext(StoreContext);
}

interface Props {
  children: React.ReactNode;
}
export function StoreProvider({ children }: Props) {
  const store = useStore();

  return (
    <>
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    </>
  );
}
export default StoreProvider;
