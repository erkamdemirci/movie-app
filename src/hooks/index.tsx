import { useState } from 'react';

export const useStore = () => {
  const [sortBy, setSortBy] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sortByHandler = (value: any) => {
    setSortBy(value);
  };

  const searchHandler = (value: any) => {
    setSearchQuery(value);
  };

  return { sortBy, sortByHandler, searchQuery, searchHandler };
};

export default useStore;
