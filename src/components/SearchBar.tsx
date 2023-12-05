import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

// JUST USE FLOWBIT OR SOME UI LIBRARY FOR REACT
// stop reinventing the wheel, although y'all are trash
// thos goes hard, feel free to screenshot, debate on what shit to use here, stop following random tutorials
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div>
      <InputGroup>
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        borderRadius="full"

      />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
