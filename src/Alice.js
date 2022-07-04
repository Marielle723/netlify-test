import React, { useState } from "react";
import image from "./workingMe.png";

function Alice() {
  const [show, setShow] = useState(false);

  return (
    <div className="main">
      <button onClick={() => setShow(!show)}>Cliquez-ici</button>
      {show && <img src={image} alt="woman in front of computer" />}
    </div>
  );
}

export default Alice;
