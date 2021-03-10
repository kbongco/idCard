import React from "react";
import dummy from "./dummy.json";

export default function Card() {
  console.log(dummy);
  return (
    <>
      <div className="card">
        {dummy.map((dummys) => (
          <>
            <div className="photo-container">
              <img id="photo" src={dummys.image} />
            </div>
            <div className="info-container">
              <h1 id="catchphrase">{dummys.catchphrase}</h1>
              <p id="name">{dummys.name}</p>
              <p id="occupation">{dummys.occupation}</p>
              <p id="hobbies">{dummys.hobbies}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
