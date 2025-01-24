import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAge, updateUser } from "../Redux/Actions";
function User() {
    const state = useSelector(state => state.user);
    const action = useDispatch();
    const [names, setName] = useState(state.person.name);
    const [ages, setAge] = useState(state.person.age);

  return (
    <>
      <h1>User</h1>
      <h2>User:{state.person.name} </h2>
      <h2>Age:{state.person.age} </h2>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      <button onClick={() => action(updateUser(names))}>Change</button>
      <br />
      <br />
      <input
        onChange={(e) => setAge(e.target.value)}
        type="text"
        placeholder="Enter your age"
      />
      <button onClick={() => action(updateAge(ages))}>Change</button>
    </>
  );
}

export default User;
