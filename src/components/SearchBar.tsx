import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

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
