import { useRef, useState } from "react";
import useOutsideClick from "./click";
export default function UseOnclickTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a Random Content</h1>
          <p>
            Please Click Outside of this to Close the they wont close the
            content still they show here
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
