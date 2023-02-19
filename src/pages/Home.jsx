import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Property from "../components/Property";
import { Flex } from "@chakra-ui/react";
import SMALL_DATA from "../utils/SMALL_DATA.json";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />

      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        {SMALL_DATA.map((data) => (
          <Property
            coverPhoto={"../assets/images/house.jpg"}
            price={data.price}
            rooms={data.beds}
            title={data.name}
            baths={data.bathrooms}
            contact={data.contact}
            key={data.id}
          />
        ))}
      </Flex>
      <Footer />
    </div>
  );
};

export default Home;
