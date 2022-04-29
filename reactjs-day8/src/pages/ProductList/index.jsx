import React from "react";
import { useState, useEffect } from "react";
import ProductItem from "../../components/modules/ProductItem";
export default function ProductList() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://reqres.in/api/users")
        .then((responsive) => responsive.json())
        .then((data) => setUserList(data.data));
    };

    fetchData();
  }, []);
  return (
    <main>
      <h1>User List</h1>
      <ul className="row">
        {userList.map((user) => (
          <li className="col-3">
            <ProductItem user={user} />
          </li>
        ))}
      </ul>
    </main>
  );
}
