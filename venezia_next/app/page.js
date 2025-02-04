import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cardone from "./components/Cardone";
import Contattaci from "./components/Contattaci";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <Cardone />
      <Contattaci />
    </>
  );
}
