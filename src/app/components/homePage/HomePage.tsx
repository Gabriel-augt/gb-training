import NavBar from "./NavBar";
import Hero from "./Hero";
import NavBarMobile from "./NavBarMobile";

export default function Home() {
  return (
    <div id="home">
        <NavBar />
        <NavBarMobile />
        <Hero />
    </div>
  );
}
