import React from 'react';
import { Input, InputGroup,  } from '@chakra-ui/react';


const SearchBar: React.FC<SearchBarProps> = () => {
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
