import React from "react";
import ChildComponent from "./child";
import ChildComponent2 from "./child2";
import { AuthProvider } from "./context";

const ParentComponent = () => {
  const authData = { username: "check", log: "data_flow" };

  return (
    <AuthProvider value={authData}>
      {/* Now all child have access to the data */}
      <ChildComponent />
      <ChildComponent2 />
    </AuthProvider>
  );
};

export default ParentComponent;
