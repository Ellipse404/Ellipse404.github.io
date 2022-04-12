import React from 'react';
import ChildComponent from './child';
import { AuthProvider } from './context';

const ParentComponent = () => {
  const authData = { username:"check", log:'data_flow'}

  return (
    <AuthProvider value={authData}>
      <ChildComponent />
    </AuthProvider>
    
  )
}

export default ParentComponent