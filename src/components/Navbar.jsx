import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { FcMenu, FcHome } from "react-icons/fc";
import { BsSearch, BsFillPersonPlusFill } from "react-icons/bs";
import { CgLogIn } from "react-icons/cg";

const Navbar = () => {
  return (
    <Flex p={2} borderBottom={"1px"} borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Estatery
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outline"
            color="red.400"
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search Property</MenuItem>
            </Link>
            <Link href="/login" passHref>
              <MenuItem icon={<CgLogIn />}>Login</MenuItem>
            </Link>
            <Link href="/signup" passHref>
              <MenuItem icon={<BsFillPersonPlusFill />}>Sign Up</MenuItem>
            </Link>
            
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
