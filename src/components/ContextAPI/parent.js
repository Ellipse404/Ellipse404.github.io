import React, {useState} from "react";
import ChildComponent from "./child";
import ChildComponent2 from "./child2";
import { AuthProvider } from "./context";

const ParentComponent = () => {
  const authData = "static data"
  const [ dataFlow, setDataFlow ] = useState("Context Experiment")
 console.log("Context API : manipulated data from child  to parent => ", dataFlow)
  return (
    <AuthProvider value={{authData, dataFlow, setDataFlow}}>
      {/* Now all child have access to the data */}
      <ChildComponent />
      <ChildComponent2 />
    </AuthProvider>
  );
};

export default ParentComponent;
