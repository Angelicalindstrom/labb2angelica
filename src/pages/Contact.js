//Angelica Lindström NET23
import React, { useState } from "react";
import picFlamingo from "../images/flamingo.jpg";
import picOldman from "../images/oldman.jpg";
import picMouse from "../images/mouse.jpg";
import picDino from "../images/dino.jpg";
import picCat from "../images/cat.jpg";
import "../css/Contact.css";

const imagePaths = [picOldman, picFlamingo, picMouse, picDino, picCat]; // saving the pics in imagePath

export default function Contact() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeBackgroundPic = () => {
    // changing backgroundpic, new index, using imagePath
    const newIndex = (currentImageIndex + 1) % imagePaths.length;
    setCurrentImageIndex(newIndex);
  };

  const handleClick = () => {
    //clickhandler
    console.log("Header clicked!");
    changeBackgroundPic();
  };

  return (
    <body>
      <main
        className="contact-container"
        style={{ backgroundImage: `url(${imagePaths[currentImageIndex]})` }}
      >
        <section onClick={handleClick}>
          {""}
          <aside className="contactaside">
            <h2>Send me a message!</h2>
            <p>I will reply as soon as I can</p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Name</label>
              <input type="text" className="name" name="name" />
              <label htmlFor="phone">Phone</label>
              <input type="tel" className="phone" name="phone" />
              <label htmlFor="email">Email</label>
              <input type="email" className="email" name="email" />
              <label htmlFor="message">Message</label>
              <textarea className="message" name="message" />
              <input
                type="submit"
                value="Send"
                id="button"
                className="button"
              />
            </form>
          </aside>
        </section>
      </main>
    </body>
  );
}
