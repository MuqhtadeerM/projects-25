import { useState } from "react";
import Model from "./Model";

export default function ModelTest() {
  const [showModel, setShowModel] = useState(false);
  const handleModel = () => {
    setShowModel(!showModel);
  };

  const onClose = () => {
    setShowModel(false);
  };
  return (
    <div>
      <button onClick={handleModel}>Open Model Pop up</button>
      {showModel && (
        <Model onClose={onClose} body={<div>Customize body</div>} />
      )}
    </div>
  );
}
