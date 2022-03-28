import React from 'react';
import './App.css'
import { useRoutes } from 'react-router-dom';
import routes from './Routes'
import './App.css';
import LandingComponent from './containers/LandingPage';

const App = () => {
  const content = useRoutes(routes);

  return (
    <>
      {content}
    </>
  );
};

export default App;
