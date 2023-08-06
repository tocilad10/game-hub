import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        className="logo"
        borderRadius="5px"
      ></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
