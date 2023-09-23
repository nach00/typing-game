import React from "react";
import "./App.css";
import useSound from "use-sound";
import tip from "./tip.wav";

const data = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "0123456789".split(""),
  symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split("")
};

const App = () => {
  let currentLetter = data.letters[Math.floor(Math.random() * data.letters.length)];



  const handleKeyDown = (event) => {
    if (event.key === currentLetter) {
      console.log("good key pressed");

      currentLetter = data.letters[Math.floor(Math.random() * data.letters.length)];
      
      const playSound2 = () => {
        const [play] = useSound(tip);
        play();
      };
      
      playSound2();

      // console.log(currentLetter);

      window.location.reload();
      
    } else {
      console.log("bad key pressed");
    }

  };

  // const handleLetterDisplay = () => {
  //   return (
  //     <div>
  //       <h1>Press the letter: {currentLetter}</h1>
  //     </div>
  //   );
  // };



  // function renderDisplay() {
  //   return (
  //     <div>
  //       <h1>Press the letter: {currentLetter}</h1>
  //     </div>
  //   );
  // }

  const SetRandomBackgroundColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  };

  const SetRandomTextColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.color = "#" + randomColor;
  };

  const playSound = () => {
    useSound(tip);
  };

  const playSound2 = () => {
    const [play] = useSound(tip);
    play();
  };



  document.addEventListener("keydown", handleKeyDown);
  // document.addEventListener("keydown", handleLetterDisplay);

  return (
    SetRandomTextColor(),
    SetRandomBackgroundColor(),
    <div className="displayLetter">
      {currentLetter}
    </div>
  );
};



export default App;