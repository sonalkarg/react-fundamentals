import React from "react";

function Debounce(props) {
  const myDebounce = (cb, d) => {
    let timer;
    return (e) => {
      if (timer) clearInterval(timer);
      timer = setTimeout(() => {
        cb(e);
      }, d);
    };
  };

  const handleChange = myDebounce((e) => {
    console.log(e.target.value);
  }, 1000);

  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
}

export default Debounce;
