import {
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  FormControl,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Searchbar = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState();
  const [price, setPrice] = useState();
  const [beds, setBeds] = useState();

  return (
    <Container maxW='container.sm'>
      <Text fontSize="3xl" fontWeight="bold">
        Find, Buy & Own Your Dream Home
      </Text>
      <FormControl>
        <Flex
          flexWrap={"wrap"}
          alignItems="center"
          justifyContent="space-between" 
        >
          <Input placeholder="Location" size="md" m={2} />
          <InputGroup m={2}>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input placeholder="Enter amount" color="#888096" />
          </InputGroup>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="date"
            color="#888096"
            m={2}
          />
          <Select placeholder="Beds" m={2} color="#888096">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </Select>
        </Flex>
        <Button
          fontSize="l"
          bg="blue.500"
          color="white"
          variant="solid"
          _hover={{ bg: "#a2a2a2" }}
          
          m={2}
        >
          {" "}
          Search
        </Button>
      </FormControl>
    </Container>
  );
};

export default Searchbar;
