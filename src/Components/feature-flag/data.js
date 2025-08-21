const dummyApi = {
  showLightDark: true,
  showTicTac: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView: true,
  showTabs: true,
};

const featureFlag = () => {
  return new Promise((res, rej) => {
    if (dummyApi) setTimeout(res(dummyApi), 500);
    else rej("Some error accured");
  });
};

export default featureFlag;
