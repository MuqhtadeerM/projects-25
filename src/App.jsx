import Accordion from "./Components/Accordion-Project/Accordion";
import SliderImage from "./Components/Image-Slider/Slider";
import LightDarkMode from "./Components/Light-Dark-Mode/Theme";
import LoadData from "./Components/LoadingDate-Button/LoadData";
import QRGenerator from "./Components/QR-Code-Generator/QR";
import RandomColorGeneratot from "./Components/Random-Color_Generator/RandomColor";
import ScrollInd from "./Components/Scroll-Indicator/Scroll";
import Star from "./Components/Star-Rating/star";
import menus from "./Components/Tree-View/Data";
import TreeView from "./Components/Tree-View/TreeMenu";
import "./App.css";
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
      {/* <TreeView menus={menus} /> */}

      {/* The QR - Code - Generator */}
      {/* <QRGenerator /> */}

      {/* Toggle button for Dark and White Theme */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator */}
      <ScrollInd url={"https://dummyjson.com/products"} />
    </div>
  );
}

export default App;
