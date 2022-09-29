import { useState } from 'react';

export const useStore = () => {
  const [sortBy, setSortBy] = useState<string>('');

  const sortByHandler = (value: any) => {
    setSortBy(value);
  };

  return { sortBy, sortByHandler };
};

export default useStore;
