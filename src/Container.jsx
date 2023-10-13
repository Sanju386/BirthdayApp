import React, { useState } from "react";
import { dataList } from "./data";

const Container = () => {
 

const[clean,setClean]= useState(dataList)
console.log(clean)

const handleClick = () => {
    setClean([]);
  }


  return (
    <main>
      <section className="container">
        <h3>{clean.length} birthdays today</h3>
        <section>
          {clean.map(({ id, name, age, image }) => {
            return (
              <article key={id} className="person">
                <img src={image} alt={name} className="img" />

                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </article>
            );
          })}
          
        </section>
        <button onClick={handleClick} type="button" className="btn btn-block">clear all</button>
      </section>
    </main>
  );
};

export default Container;
