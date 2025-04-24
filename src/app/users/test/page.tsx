"use client";
import React from "react";
import { useUser } from "../../../contexts/UserContext";
import { useRouter } from "next/navigation";

const users = () => {
  const { user } = useUser();
  const router = useRouter();

  const HandleNavigate = () => {
    router.push("/users");
  };

  return (
    <div className="container" style={{ backgroundColor: "red", color: "black", padding: "2rem", border: "1px dashed black" }}>
      <h1>AINDA SOU {user?.name.toUpperCase() || "Test"}</h1>
      <button onClick={() => HandleNavigate()}>VOLTA</button>
    </div>
  );
};

export default users;
