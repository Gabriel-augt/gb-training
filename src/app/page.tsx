import Feedbacks from "./components/feedbacks/Feedbacks";
import HomePage from "./components/homePage/HomePage";
import LogoSlider from "./components/logoSlider/LogoSlider";
import Qualifications from "./components/qualifications/Qualifications";
import TrainingPrograms from "./components/trainingPrograms/TrainingPrograms";
import WhoIs from "./components/whoIs/WhoIs";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <LogoSlider />
      <WhoIs />
      <Qualifications />
      <TrainingPrograms />
      <Feedbacks />
    </div>
  );
}
