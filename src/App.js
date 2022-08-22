import React, { useState, useEffect } from "react";

export default function App() {
  const STARTING_TIME = 0;
  const [keystroke, setKeystroke] = useState("");
  const [countdown, setCountdown] = useState(STARTING_TIME);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start && countdown > 0) {
      setTimeout(() => {
        setCountdown((item) => item - 1);
      }, 1000);
    } else if (countdown === 0) {
      setStart(false);
    }
  }, [countdown, start]);

  function key(event) {
    setKeystroke(event.target.value);
  }
  function calculateWords(arr) {
    const words = arr.trim().split(" ");
    const counted = words.filter((word) => word !== "").length;
    return counted.length;
  }
  function StartAgain() {
    setStart(true);
    setCountdown(STARTING_TIME);
    setKeystroke("");
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={keystroke} onChange={key()} disabled={!countdown} />
      <h4>Time reminaing: {countdown}</h4>
      <button onClick={StartAgain} disabled={countdown}>
        Start
      </button>
      <h1>Word count: {countdown === 0 ? calculateWords(keystroke) : "0"}</h1>
    </div>
  );
}
