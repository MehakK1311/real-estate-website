import { Container } from "@chakra-ui/react";
import Card from "../components/Card";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Searchbar/>
        <Container>
            <Card/>
        </Container>
        <Footer/>
    </div>
  )
}

export default Home;