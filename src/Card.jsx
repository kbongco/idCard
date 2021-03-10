import React from "react";
import dummy from "./dummy.json";

export default function Card() {
  console.log(dummy);
  return (
    <>
      <h1>Hi</h1>
      <div className="card">
        <div className="info-container">
          <img className="photo" src="{dummy.image}" />
        </div>
      </div>
    </>
  );
}
