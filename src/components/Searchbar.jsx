import MOCK_DATA from "../utils/MOCK_DATA.json";
import Property from "./Property";
import {
  Container,
  Flex,
  Input,
  Select,
  Button,
  Text,
  InputGroup,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const Body = () => {
  const [filterValues, setFilterValues] = useState(false);
  const [bedsNumber, setBedsNumber] = useState();
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  var bedsnumber = parseInt(bedsNumber);
  var minprice = parseInt(minPrice);
  var maxprice = parseInt(maxPrice);

  const FilterValues = () => {
    setFilterValues(true);
  };

  const filterValuesNumbers = (event) => {
    event.preventDefault();
    setMinPrice(event.target[0].value);
    setMaxPrice(event.target[1].value);
    setBedsNumber(event.target[2].value);
  };

  const reset = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <Text fontSize="3xl" fontWeight="bold" align={"center"}>
          Find, Buy & Own Your
        </Text>
        <form onSubmit={filterValuesNumbers}>
          <HStack m={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="$"
              />
              <Input placeholder="min" value={minPrice} />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="$"
              />
              <Input placeholder="max" value={maxPrice} />
            </InputGroup>
            <Select placeholder="Select Beds">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </Select>
          </HStack>
          <HStack m={5}>
            <Button type="submit" onClick={FilterValues}>
              confirm
            </Button>
            <Button type="submit" onClick={reset}>
              reset
            </Button>
          </HStack>
        </form>
      </div>
      <div>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          {MOCK_DATA.filter(
            (data) =>
              data.beds === bedsnumber &&
              data.price >= minprice &&
              data.price <= maxprice
          ).map((data, index) => (
            <>
              <Property
                coverPhoto={data.img_url}
                price={data.price}
                rooms={data.beds}
                title={data.name}
                baths={data.bathrooms}
                contact={data.contact}
                key={index}
              />
            </>
          ))}
        </Flex>
      </div>
    </>
  );
};

export default Body;
