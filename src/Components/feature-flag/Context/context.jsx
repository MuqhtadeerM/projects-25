import { createContext, useEffect, useState } from "react";
import featureFlag from "../data";

export const FeatureFlagContext = createContext(null);
export default function FeatureFlagGlobal({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  const featchFeature = async () => {
    try {
      setLoading(true);
      const response = await featureFlag();
      console.log(response);
      setEnableFlags(response);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      throw new Error(e);
    }
  };

  useEffect(() => {
    featchFeature();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
