import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';


const HamburgerMenu: React.FC = () => {

  return(
    <Menu>
      <MenuButton as={Button}>
        Menu
      </MenuButton>
      <MenuList>
        <MenuItem as='a' href='loginCard'>Login</MenuItem>   
        <MenuItem>Settings</MenuItem>
        </MenuList>
      </Menu>
 
  );
}
export default HamburgerMenu;




