import HomePage from "./components/homePage/HomePage";
import LogoSlider from "./components/logoSlider/LogoSlider";
import WhoIs from "./components/whoIs/WhoIs";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <LogoSlider />
      <WhoIs />
    </div>
  );
}
