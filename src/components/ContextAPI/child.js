import React, { useContext } from "react";
import AuthContext from './context'

const ChildComponent = () => {
  const data = useContext(AuthContext);
  return (
    <React.Fragment>
      {/* <p>data from child component</p> */}
      {console.log("data from context api => ",data)}
    </React.Fragment>
  );
};

export default ChildComponent;
