import Accordion from "./Components/Accordion-Project/Accordion";
import SliderImage from "./Components/Image-Slider/Slider";
import LightDarkMode from "./Components/Light-Dark-Mode/Theme";
import LoadData from "./Components/LoadingDate-Button/LoadData";
import QRGenerator from "./Components/QR-Code-Generator/QR";
import RandomColorGeneratot from "./Components/Random-Color_Generator/RandomColor";
import ScrollInd from "./Components/Scroll-Indicator/Scroll";
import Star from "./Components/Star-Rating/star";
// import menus from "./Components/Tree-View/Data";
import TreeView from "./Components/Tree-View/TreeMenu";
import Tabs from "./Components/Tabs/tabs";
import TabTest from "./Components/Tabs/tabs-test";
import ModelTest from "./Components/Custom-Model/Model-test";
import ProfileFinder from "./Components/Git-Profile-Finder/profile";
import SearchAuto from "./Components/Search-AutoComplete/Search";
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
      {/* <ScrollInd url={"https://dummyjson.com/products"} /> */}

      {/* Custom Tab Components */}
      {/* <TabTest /> */}

      {/* Custom Model Pop Up is Opening */}
      {/* <ModelTest /> */}

      {/* finding the username on  github */}
      {/* <ProfileFinder /> */}

      {/* Auto Search Completeor */}
      <SearchAuto />
    </div>
  );
}

export default App;
