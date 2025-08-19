import { useEffect, useState } from "react";
import "./Scroll.css";
export default function ScrollInd({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPer, setScrollPer] = useState(0);

  // fetching the data from api
  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg(e.message);
    }
  };

  const handleScrollPer = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setScrollPer((howMuchScroll / height) * 100);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPer);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  console.log(data, scrollPer);

  if (loading) {
    return <div>Loading Data Please Wait..</div>;
  }

  if (errorMsg) {
    return <div>Error Accured {errorMsg}</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress">
          <div
            className="current-progress"
            style={{ width: `${scrollPer}%` }}
          ></div>
        </div>
      </div>

      <div className="container">
        {data && data.length > 0
          ? data.map((dataItem, index) => <p key={index}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
