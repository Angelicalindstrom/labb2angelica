//Angelica Lindström NET23
import "../css/Home.css";
import Easteregg from "./Easteregg.js";
import profilpic from "../images/angelicabw.png";
import student from "../images/student.jpg";
import airobotic from "../images/airobotic.jpg";

export default function Home() {
  // Greeting Date, variables
  const time = new Date();
  const hours = time.getHours();
  let greeting;
  let greeting2;
  // greeting message, depending on hours of the day
  if (hours < 10) {
    greeting = "Good morning YOU stunning stack of sunshine!!";
    greeting2 = "Today is the day, to be GREAT!";
  } else if (hours < 15) {
    greeting = "Good day YOU beutiful badass!";
    greeting2 = "Straigten your crown and GO GET IT!";
  } else {
    greeting = "Good evening CHAMPION, soon time for bed!";
    greeting2 = "Tomorrow is another day to WIN IT!";
  }

  return (
    <div className="hometotal">
      <aside className="homeaside">
        <img src={profilpic} alt="profilbild på angelica" className="img" />
        <h2>{greeting}</h2>
        {greeting2}
        <br></br>
        <p>TYPE: "hello" and i'll give you a secret message!</p>
        <h1>FunFact about me:</h1>
        <p>They called me "Ankan" = "the Duck" as a small kid..</p>
      </aside>
      <header className="homeheader">
        <Easteregg />
        <section className="homebody">
          <img src={student} alt="profilbild på angelica" className="img" />
          <img src={airobotic} alt="profilbild på angelica" className="img" />
        </section>
      </header>
    </div>
  );
}
