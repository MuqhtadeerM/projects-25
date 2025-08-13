import "./App.css";
import Accordion from "./Components/Accordion-Project/Accordion";
import SliderImage from "./Components/Image-Slider/Slider";
import LoadData from "./Components/LoadingDate-Button/LoadData";
import RandomColorGeneratot from "./Components/Random-Color_Generator/RandomColor";
import Star from "./Components/Star-Rating/star";
import menus from "./Components/Tree-View/Data";
import TreeView from "./Components/Tree-View/TreeMenu";
function App() {
  return (
    <div>
      {/* Accordion functionality */}
      {/* <Accordion /> */}

      {/* Random Color Generator */}
      {/* <RandomColorGeneratot /> */}

      {/* Star -Rating System */}
      {/* <Star /> */}

      {/* Image Slider */}
      {/* <SliderImage url={"https://picsum.photos/v2/list"} /> */}

      {/* Loading the data using Loading using the Loader Data  */}
      {/* <LoadData /> */}

      {/* Menu like tree */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
