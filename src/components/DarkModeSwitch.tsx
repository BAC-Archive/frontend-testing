import { useColorMode, Switch, SwitchProps } from '@chakra-ui/react';

const DarkModeSwitch = (props: SwitchProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === 'dark'}
      onChange={toggleColorMode}
      colorScheme="teal"
      {...props}
    />
  );
};

export default DarkModeSwitch;
