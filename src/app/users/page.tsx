"use client";
import React, { useState } from "react";
import "./page.css";
import { useUser } from "../../contexts/UserContext";
import { useTheme } from "../../contexts/ThemeContext";

const userList = [
  {
    name: "Scott Campbell",
    email: "egestas.sed.pharetra@outlook.net",
  },
  {
    name: "Demetrius O'brien",
    email: "dui.suspendisse@protonmail.ca",
  },
  {
    name: "Abdul Fuller",
    email: "facilisis@outlook.couk",
  },
  {
    name: "Kane Perkins",
    email: "lacinia.vitae@google.ca",
  },
  {
    name: "Hedda Richmond",
    email: "volutpat.ornare.facilisis@aol.couk",
  },
];

const users = () => {
  const { state, dispatch } = useTheme();
  const { user, setUser } = useUser();
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("");

  const HandleChangeUser = () => {
    setUser(userList[Math.floor(Math.random() * userList.length)]);
  };

  const HandleChangeColor = () => {
    if (color.length > 0) dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const HandleResetColor = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="container" style={{ backgroundColor: state.backgroundColor, color: "black" }}>
      <h1>Bem vindo {user?.name.toUpperCase() || "Test"}</h1>
      <div className="data-container">
        <button onClick={() => setCount((count += 1))}>+ 1</button>
        <button onClick={HandleChangeUser}>Change user (test)</button>
        <input onChange={(e) => setColor(e.target.value)} />
        <button onClick={HandleChangeColor}>Set Color</button>
        <button onClick={HandleResetColor}>RESET</button>
      </div>
    </div>
  );
};

export default users;
