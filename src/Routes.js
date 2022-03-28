import React, { lazy, Suspense } from "react";
import App from "./App";
import LoadingScreen from "./components/LoadingScreen";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

  // Authentication Pages
  const LandingComponent = Loadable(lazy(() => import('./containers/LandingPage/index')))
  const SignInComponent = Loadable(lazy(() => import('./containers/SignIn')))
  const SignUpComponent = Loadable(lazy(() => import('./containers/SignUp')))

  
const Routes = [
  { path: "*", element: <LandingComponent /> },
  { path: "/signup", element: <SignUpComponent />},
  { path: "/login", element: <SignInComponent />}
];

export default Routes;