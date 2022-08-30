import React from "react"
import Logic from "./customHooks.js"


function App() {
    const {wordCount,
    textBoxRef,
     handleChange,
      text,
       isTimeRunning,
        timeRemaining,
         startGame} = Logic()
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
