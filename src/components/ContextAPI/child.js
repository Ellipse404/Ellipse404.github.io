import React, { useContext } from "react";
import AuthContext from "./context";

const ChildComponent = () => {
  const data = useContext(AuthContext);
  return (
    <React.Fragment>
      {console.log("data from context api for child 1 => ", data)}
    </React.Fragment>
  );
};

export default ChildComponent;
