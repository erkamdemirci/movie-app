import React from 'react';
import { createContext, useContext } from 'react';

import { useStore } from '../hooks';

type storeContextType = {
  sortBy: string;
  sortByHandler: (value: string) => void;
};

const storeContextDefaults: storeContextType = {
  sortBy: '',
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
