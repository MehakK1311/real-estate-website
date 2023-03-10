import {
  Flex,
  Box,
  Text,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";

const Banner = ({
    purpose,
    title1,
    title2,
    desc1,
    desc2,
    buttonText,
    linkName,
    imageUrl,
  }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button fontSize="xl" bg="blue.500" color="white" variant='solid' _hover={{ bg: '#a2a2a2'}}>
          <Link href={linkName} _hover={{fontStyle:"none"}}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  )
}

export default Banner;