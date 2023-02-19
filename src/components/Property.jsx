import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { AiTwotonePhone } from "react-icons/ai";

import DefaultImage from "../assets/images/house.jpg";

const Property = ({
  coverPhoto,
  price,
  rooms,
  title,
  baths,
  contact,
  isVerified,
}) => (
  <Flex
    flexWrap="wrap"
    w="420px"
    p="5"
    paddingTop="0px"
    justifyContent="flex-start"
    cursor="pointer"
  >
    <Box>
      <Image
        src={coverPhoto ? coverPhoto : DefaultImage}
        width={400}
        height={260}
      />
    </Box>
    <Box w="full">
      <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            {price}
          </Text>
        </Flex>
        <Box>
          <Avatar size="sm"></Avatar>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        p="1"
        justifyContent="space-between"
        w="250px"
        color="blue.400"
      >
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {contact}<AiTwotonePhone />
      </Flex>
      <Link href="#">
        <Text fontSize="lg">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </Text>
      </Link>
    </Box>
  </Flex>
);

export default Property;
