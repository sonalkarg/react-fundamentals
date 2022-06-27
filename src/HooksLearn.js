import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./App";

function HooksLearn(props) {
  const [counter, setCounter] = useState(0);
  const [emotion, setEmotion] = useState("happy");
  const theme = useContext(ThemeContext);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    console.log(emotion);
  }, [emotion]);

  const handleChange = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <>
      <h2>Learning Hooks</h2>
      {counter}
      {emotion}
      <button
        onClick={handleChange}
        style={{ background: theme.background, color: theme.foreground }}
      >
        Click Me
      </button>
      <button onClick={() => setEmotion("sad")}>Change Emotion</button>
      <hr />
    </>
  );
}
export default HooksLearn;
