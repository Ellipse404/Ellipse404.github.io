import React, { useContext, useState } from "react";
import AuthContext from "./context";

const ChildComponent = () => {
  const {authData, dataFlow, setDataFlow } = useContext(AuthContext);
  return (
    <React.Fragment>
      {/* child has access to parent data  -> */}
      { console.log("from parent to child using context API : => ",authData) }
    </React.Fragment>
  );
};

export default ChildComponent;
