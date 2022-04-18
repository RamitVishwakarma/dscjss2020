import React from "react";

const Recruitment = () => {
  return (
    <div className="flex__row"> 
      <frameset rows = "10%,80%,10%" >
        <frame name="top" src="https://gdsc-recruitments.netlify.app/" />
        <frame name="main" src="https://gdsc-recruitments.netlify.app/" />
        <frame name="bottom" src="https://gdsc-recruitments.netlify.app/" />
        <noframes>
          <body>Your browser does not support frames.</body>
        </noframes>
      </frameset>
    </div>
  );
};

export default Recruitment;
