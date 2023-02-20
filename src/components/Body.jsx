import SMALL_DATA from "../utils/SMALL_DATA.json";
import Property from "./Property";
import { Flex } from "@chakra-ui/react";

const Body = () => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
      {SMALL_DATA.map((data, index) => (
        <Property
          coverPhoto={data.img_url}
          price={data.price}
          rooms={data.beds}
          title={data.name}
          baths={data.bathrooms}
          contact={data.contact}
          key={index}
        />
      ))}
    </Flex>
  );
};

export default Body;
