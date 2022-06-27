import React, { useReducer } from "react";

const initialState = {
  message: "hi",
};

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "hello":
      return {
        ...state,
        message: "hello",
      };
    case "test":
      return {
        ...state,
        message: "test",
      };
  }
}

function ReducerLearn(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 data-testid="output">{state.message}</h1>
      <button onClick={() => dispatch({ type: "hello" })}>hello</button>
      <button onClick={() => dispatch({ type: "test" })}>test</button>
    </div>
  );
}

export default ReducerLearn;
