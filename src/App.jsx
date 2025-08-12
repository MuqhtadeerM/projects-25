import "./App.css";
import Accordion from "./Components/Accordion-Project/Accordion";
import RandomColorGeneratot from "./Components/Random-Color_Generator/RandomColor";
import Star from "./Components/Star-Rating/star";

function App() {
  return (
    <div>
      {/* Accordion functionality */}
      <Accordion />

      {/* Random Color Generator */}
      <RandomColorGeneratot />


      {/* Star -Rating System */}
      <Star />
    </div>
  );
}

export default App;
