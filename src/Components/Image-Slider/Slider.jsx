import { useEffect, useState } from "react";
import "./Slider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { ImHackernews } from "react-icons/im";

export default function SliderImage({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [loading, setloading] = useState(false);
  const [errorM, setErrorM] = useState(null);
  const [currentSlider, setCurrentSlider] = useState(0);

  const fetchImage = async (getUrl) => {
    try {
      setloading(true);
      const response = await fetch(`${getUrl}? page=${page}&limit= ${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setloading(false);
      }
    } catch (e) {
      setErrorM(e.message);
      setloading(false);
    }
  };
  const handlePre = () => {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  };

  const handleNext = () => {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  };
  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading the data....</div>;
  }

  if (errorM !== null) {
    return <div>Error Accured {errorM}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePre} className="arrow arrow-left" />
      {images && images.length
        ? images.map((imageitems, index) => (
            <img
              key={imageitems}
              alt={imageitems.download_url}
              src={imageitems.download_url}
              className={
                currentSlider === index
                  ? "current-image"
                  : "current-image  hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlider === index
                    ? "current-indiactor"
                    : "current-indiactor inactive-indiactor"
                }
                onClick={() => setCurrentSlider(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
