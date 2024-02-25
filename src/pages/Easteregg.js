//Angelica Lindström NET23
import { useEffect } from "react";
import bananaImage from "../images/banana.jpg";

export default function EasterEgg() {
  useEffect(() => {
    const pattern = ["h", "e", "l", "l", "o"]; //my petterncode to secret popupwindow
    let current = 0;

    const keyHandler = function (event) {
      // If the key ISN'T in the pattern, or isn't the current key in the pattern, reset, no secret message
      if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
      }

      // Update how much of the pattern is complete.. hel..  (saves)
      current++;

      // If complete current(hello), open popup with image and reset
      if (pattern.length === current) {
        current = 0;
        const popupWindow = window.open(
          "loading",
          "_blank",
          "width=400,height=400"
        );
        popupWindow.document.write(
          // my pic in popwindow bananaman
          `<img src="${bananaImage}" alt="Banana" width="100%" height="100%">`
        );
      }
    };

    // EventListener for keydown events
    document.addEventListener("keydown", keyHandler);

    // Cleaning up the function
    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return null;
}
