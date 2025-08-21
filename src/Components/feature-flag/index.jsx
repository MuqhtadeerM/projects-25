import { useContext } from "react";
import Accordion from "../Accordion-Project/Accordion";
import LightDarkMode from "../Light-Dark-Mode/Theme";
import RandomColorGeneratot from "../Random-Color_Generator/RandomColor";
import TicTac from "../tic-tac-toe/tic";
import TreeView from "../Tree-View/TreeMenu";
import { FeatureFlagContext } from "./Context/context";
import TabTest from "../Tabs/tabs-test";

export default function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagContext);
  const ComponentsToRender = [
    {
      key: "showLightDark",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTac",
      component: <TicTac />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColorGeneratot />,
    },
    {
      key: "showAccordian",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];

  const checkEnabledFlage = (getCurrentKey) => {
    return enableFlags[getCurrentKey];
  };

  if (loading) {
    return <h1>Loading Data... </h1>;
  }
  return (
    <div>
      <h1>Feature Flags</h1>
      {ComponentsToRender.map((componentItem) =>
        checkEnabledFlage(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
