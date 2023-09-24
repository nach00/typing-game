import React from "react";
import "./App.css";
import { gsap } from "gsap";

const data = {
  letters: "asdfghjkl".split(""), // Home row only
  // letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  // numbers: "0123456789".split(""),
  // symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split("")
};

const App = () => {
  let currentLetter = data.letters[Math.floor(Math.random() * data.letters.length)];

  const handleKeyDown = (event) => {
    if (event.key === currentLetter) {
      window.location.reload();
    } else {
      gsap.to(".displayLetter", { rotation: 360, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      gsap.set(".displayLetter", { rotation: 0, duration: 0.5 });
    }
  };

  const SetRandomBackgroundColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  };

  const SetRandomTextColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.color = "#" + randomColor;
  };

  document.addEventListener("keydown", handleKeyDown);

  return (
    SetRandomTextColor(),
    SetRandomBackgroundColor(),
    <div className="displayLetter">
      {currentLetter}
    </div>
  );
};

export default App;