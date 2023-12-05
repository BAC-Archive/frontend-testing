import React from 'react';
import { Input, InputGroup,  } from '@chakra-ui/react';


const SearchBar: React.FC = () => {
  return (
    <div>
      <InputGroup>
      <Input
        type="text"
        placeholder="Search..."
        borderRadius="full"
      />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
