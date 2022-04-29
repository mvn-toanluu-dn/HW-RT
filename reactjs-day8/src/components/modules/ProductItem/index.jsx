import React from "react";
export default function ProductItem({ user }) {
  const { avatar, email, first_name } = user;
  return (
    <div>
      <img className="user-avatar" src={avatar} alt=""/>
      <p className="user-name">{first_name}</p>
      <p className="email">{email}</p>
    </div>
  );
}
