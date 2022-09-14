import { useState, useEffect, useRef, useReducer } from "react";

export default function Logic() {
  const STARTING_TIME = 5;

  function reducer(state, action) {
    switch (action.type) {
      case "wordCount1":
        return { wordCount: (state.wordCount = calculateWordCount(text)) };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { wordCount: 0 });

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  //   const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
      //   setWordCount(calculateWordCount(text));
      dispatch({ type: "wordCount1" });
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    wordCount,
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
  };
}
