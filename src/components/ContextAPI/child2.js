import React, { useContext } from "react";
import AuthContext from "./context";

const ChildComponent2 = () => {
  const data = useContext(AuthContext);
  return (
    <React.Fragment>
      {console.log("data from context api for child 2 => ", data)}
    </React.Fragment>
  );
};

export default ChildComponent2;
