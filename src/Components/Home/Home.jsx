import "./home.style.css";
import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Trainer from "../Trainer/Trainer";

export default function Home() {
  return (
    <>
      <section className="home" id="Home">
        <div>
          <div>
            <h1>
              it's never too easy but
              <br /> you have to try
            </h1>
            <div className="btn" type="button">
              get started
            </div>
          </div>
        </div>
      </section>
      <About />
      <Service />
      <Trainer />
      
      

    </>
  );
}
