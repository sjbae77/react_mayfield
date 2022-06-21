import React from "react";

function Btns({ setIndex }) {
  return (
    <ul className="scroll_navi">
      <li onClick={() => setIndex(0)}>About</li>
      <li onClick={() => setIndex(1)}>Service</li>
      <li onClick={() => setIndex(2)}>News</li>
    </ul>
  );
}

export default Btns;
