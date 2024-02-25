//Angelica Lindström NET23
import CvDataDisplay from "../components/CvDataDisplay";
import "../css/Cv.css";

export default function Cv() {
  return (
    <section>
      <header className="cvheader">
        <CvDataDisplay/> 
      </header>
      <body>
        <section className="skillcontainer">
          <section className="skillbox">
            <h2>Knowledge</h2>
            <p>Frontend</p>
            <div className="skills-frontend">40%</div>
            <p>SRCUM</p>
            <div className="skills-scrum">30%</div>
            <p>HTML</p>
            <div className="skills-css">35%</div>
            <p>CSS</p>
            <div className="skills-react">35%</div>
            <p>REACT</p>
            <div className="skills-html">35%</div>
            <p>C#</p>
            <div className="skills-c">50%</div>
          </section>
        </section>
      </body>
    </section>
  );
}
