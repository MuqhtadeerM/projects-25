import { useEffect, useState } from "react";
import "./LoadData.css";

export default function LoadData() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disableButton, setDisableButton] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((pre) => [...pre, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  });
  if (loading) {
    return <div>Loading Please wait....</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div key={item.id} className="products">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)} disabled={disableButton}>
          Load More Data
        </button>
        {disableButton ? <p>You have reached to your limit...</p> : null}
      </div>
    </div>
  );
}
