import React, { useContext } from "react";
import AuthContext from "./context";

const ChildComponent2 = () => {
  const { dataFlow, setDataFlow } = useContext(AuthContext);
  return (
    <React.Fragment>
      {/* updating && sending updated to the parent from child 2 */}
      {setDataFlow('from child2 exp')}   
    </React.Fragment>
  );
};

export default ChildComponent2;
