//Angelica Lindström NET23
import React from "react";
import cvData from "../cvdata.json";
import "../components/CvData.css";

const CvDataDisplay = () => {
  return (
    <body className="cvdatatotal">
      <h2 className="cvdatah2">Collecting knowledge ATM, student @ EDUGRADE</h2>
      <section className="work">
        <br></br>
        <h2>Work</h2>
        {cvData.workplaces.map((work) => (
          <div key={work.id}>
            <h3>{work.company}</h3>
            <p>City: {work.city}</p>
            <p>Workyear: {work.workyear}</p>
            <p>Position: {work.position}</p>
            <p>About: {work.about}</p>
          </div>
        ))}
      </section>
      <aside className="experience-container">
        <section className="licens">
          <br></br>
          <h2>Driver Licences</h2>
          {cvData.licenses.map((licence) => (
            <div key={licence.id}>
              <h3>{licence.title}</h3>
              <p>Since year: {licence.year}</p>
            </div>
          ))}
        </section>
        <section className="education">
          <br></br>
          <h2>Educations</h2>
          {cvData.education.map((educate) => (
            <div key={educate.id}>
              <h3>{educate.educationName}</h3>
              <p>School: {educate.schoolname}</p>
              <p>Year: {educate.educationyear}</p>
            </div>
          ))}
        </section>
      </aside>
    </body>
  );
};

export default CvDataDisplay;
