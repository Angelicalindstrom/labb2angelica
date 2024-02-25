//Angelica Lindström NET23
import React from "react";
import angelica from "../images/angelica4.jpg";
import angelica3 from "../images/angelica3.jpg";
import angelica1 from "../images/angelica1.jpg";
import angelica2 from "../images/angelica2.jpg";
import azzka from "../images/azzka.jpg";
import gnizta from "../images/gnizta.jpg";
import working from "../images/working.jpg";
import workout1 from "../images/workout.jpg";
import workout2 from "../images/workout2.jpg";
import workout3 from "../images/workout (2).jpg";
import nature from "../images/nature.jpg";
import life from "../images/life.jpg";
import fishing from "../images/fishing.jpg";
import "../css/About.css";

export default function About() {
  return (
    <div className="totalabout">
      <h1>Who's Angelica??</h1>
      <img src={angelica} className="angelica" alt="me" />
      <section className="aboutsection">
        <h2>Love nature, outdoors and great times with my dogs! </h2>
        <p>
          Born 1991 in Sundsvall, Sweden. Love to see myself and others develop
          and i'm not afraid of a little challenge. I actually think I like them
          more than many. In a challenge I allways learn something new! In
          recent years, I have had many challenges in the form of accidents.
          Broke my shoulder blade in a Downhill (bike) accident in 2020 and in
          2022 I was involved in a work accident where I got spinal stenosis and
          couldn't walk. But I'm back and I'm really sharp in rehab. I love to
          exercise so the exercise itself has not been the biggest challenge.
          It's been the mental part. But I also took the opportunity there to
          actually learn something, so I took a course in Mental training and I
          have come out as a stronger person in every way!! In the shape of my
          life and stronger than ever mentally!
        </p>
        <h2>
          And that journy has brought me here, To be a student again and learn
          all about code, developing, fontend, backend, AI
        </h2>
        <p>
          I was an entrepreneur before the accident but unfortunately I could
          neither keep the job I was employed at nor the company as it involved
          physically heavy work. I have always liked being an entrepreneur and I
          ran a small upholstery business. Love meeting the customer, solving
          their problems and creating something that is more beautiful than they
          could even imagine in the beginning.
        </p>
        <p>
          After the accident I started thinking about my future, I love to
          create, solve problems, learn new things and I love to get to know
          customers and help them get the best. Why not learn something
          completely new at the age of 33?
        </p>
        <h2>So, future.. here I come!</h2>
      </section>
      <div>
        <h3>I'll let the pictures speak for the rest of me</h3>
        <header className="head">
          <img src={angelica1} alt="me" />
          <img src={fishing} alt="fishing" />
          <img src={life} alt="me & gnizta" />
          <img src={angelica3} alt="me in a dress" />
          <img src={angelica2} alt="me in a sparkly dress" />
          <img src={workout3} alt="grymshark" />
          <img src={azzka} alt="my dog azzka" />
          <img src={gnizta} alt="my dog gnizta" />
          <img src={working} alt="me working" />
          <img src={workout1} alt="workout gang" />
          <img src={workout2} alt="me working out" />
          <img src={nature} alt="sunset" />
        </header>
      </div>
    </div>
  );
}
