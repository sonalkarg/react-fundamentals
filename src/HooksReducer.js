import React, { useReducer } from "react";

function HooksReducer(props) {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <>
      <input type="checkbox" onChange={setChecked} value={checked} />
      <label>{checked ? "checked" : "not checked"}</label>
    </>
  );
}

export default HooksReducer;
