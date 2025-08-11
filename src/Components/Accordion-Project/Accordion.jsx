import { useState } from "react";
import "./dataAccordion.css";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [enableMulti, setEnableMulti] = useState(false);

  const handleSingle = (getId) => {
    setSelected(getId === selected ? null : getId);
  };

  const handleMulti = (getId) => {
    let copyMulti = [...multiple];
    const findIndexOfCurrentId = copyMulti.indexOf(getId);
    if (findIndexOfCurrentId === -1) copyMulti.push(getId);
    else copyMulti.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMulti);
  };
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMulti(!enableMulti)}>
        {enableMulti ? "Enable MultiSelection" : "Disable MultiSelection"}
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={() =>
                  enableMulti
                    ? handleMulti(dataItem.id)
                    : handleSingle(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.name}</h3>
                <span>+</span>
              </div>
              {enableMulti
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.Email}</div>
                  )
                : selected === dataItem.id && <div>{dataItem.Email}</div>}
              {/* {selected === dataItem.id ? (
                <div className="content">{dataItem.Email}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
