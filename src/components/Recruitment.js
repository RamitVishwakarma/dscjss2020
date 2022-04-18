import React from "react";
import styles from './Recruitment.module.css'
const Recruitment = () => {
  return (
    <div className={styles.mainContainer} > 
      <frameset>
        {/* <frame name="top" src="https://gdsc-recruitments.netlify.app/" /> */}
        <frame src="https://gdsc-recruitments.netlify.app/" />
        {/* <frame name="bottom" src="https://gdsc-recruitments.netlify.app/" /> */}
        <noframes>
          <body>Your browser does not support frames.</body>
        </noframes>
      </frameset>
    </div>
  );
};

export default Recruitment;
