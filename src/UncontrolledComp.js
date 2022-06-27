import React, { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
}

function UncontrolledComp() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    console.log(titleProps.state, colorProps.state);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Color title..." {...titleProps} />
      <input type="color" {...colorProps} />
      <button>ADD</button>
    </form>
  );
}

export default UncontrolledComp;
