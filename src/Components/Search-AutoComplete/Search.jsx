import { useEffect, useState } from "react";
import Suggestion from "./Suggestions";

export default function SearchAuto() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [searchP, setSearchP] = useState("");
  const [show, setShow] = useState(false);
  const [filterUser, setFilterUser] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchP(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterUser(filterData);
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleClick = (event) => {
    console.log(event.target.innerText);
    setShow(false);
    setSearchP(event.target.innerText);
    setFilterUser([]);
  };
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setErrors(null);
      }
    } catch (e) {
      setLoading(false);
      setErrors(e);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    return <h3>Please Wait...</h3>;
  }

  if (errors) {
    return <h3>A Error Accured... {errors}</h3>;
  }
  console.log(users, filterUser);

  return (
    <div className="search-auto">
      <input
        value={searchP}
        name="search-user"
        placeholder="Search the User here.."
        onChange={handleChange}
      />
      {show && <Suggestion handleClick={handleClick} data={filterUser} />}
    </div>
  );
}
