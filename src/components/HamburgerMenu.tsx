import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'


const HamburgerMenu: React.FC = () => {

  return(
    <Menu>
      <MenuButton as={Button}>
        Menu
      </MenuButton>
      <MenuList>
        <MenuItem as={Link} to='login'>Login</MenuItem>   
        <MenuItem>Settings</MenuItem>
        </MenuList>
      </Menu>
 
  );
}
export default HamburgerMenu;
