import React, { useState, useEffect } from "react";
import "./style.css";
export default function ListUser() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }, [page]);

  console.log(data);
  return (
    <>
      <div className="list-users">
        {data.map((user, index) => {
          return (
            <div className="users" key={user.id}>
              <img className="users-img" src={user.avatar} alt="avatar" />
              <div className="info">
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <h4>{user.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn-page">
        <button
          className={page === "prev"}
          onClick={() => setPage(page === 1 ? 1 : page - 1)}
        >
          Prev
        </button>
        <button
          className={page === 1}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button
          className={page === 2 }
          onClick={() => setPage(2)}
        >
          2
        </button>
        <button
          className={page === "next" }
          onClick={() => setPage(page === 2 ? 2 : page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
