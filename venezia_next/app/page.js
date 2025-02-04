import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cardone from "./components/Cardone";
import Contattaci from "./components/Contattaci";
import Footer from "./components/Footer";
import Qualita from "./components/Qualita";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <Cardone />
      <Qualita />
      <Contattaci />
      <Footer />
    </>
  );
}
