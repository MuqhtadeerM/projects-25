import { useEffect, useState } from "react";
import User from "./card";
import "./profile.css"
export default function ProfileFinder() {
  const [userName, setUserName] = useState("sangammukherjee");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading Data Please Wait...</h1>;
  }
  return (
    <div className="container">
      <div className="wrapper">
        <input
          name="search-by-name"
          placeholder="Enter Github name..."
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
