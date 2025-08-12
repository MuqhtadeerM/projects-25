import "./App.css";
import Accordion from "./Components/Accordion-Project/Accordion";
import SliderImage from "./Components/Image-Slider/Slider";
import RandomColorGeneratot from "./Components/Random-Color_Generator/RandomColor";
import Star from "./Components/Star-Rating/star";

function App() {
  return (
    <div>
      {/* Accordion functionality */}
      <Accordion />

      {/* Random Color Generator */}
      {/* <RandomColorGeneratot /> */}

      {/* Star -Rating System */}
      <Star />

      {/* Image Slider */}
      <SliderImage url={"https://picsum.photos/v2/list"} />
    </div>
  );
}

export default App;
