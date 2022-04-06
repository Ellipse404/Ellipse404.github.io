import React, { lazy, Suspense } from "react";
import App from "./App";
// import { ContactUs } from "./components/EmailServices";
import LoadingScreen from "./components/LoadingScreen";
// import GoogleApiWrapper from "./components/GoogleMap"

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
  const MapLocation = Loadable(lazy(() => import('./components/GoogleMap')))
  const ThirdSheetComponent = Loadable(lazy(() => import('./containers/ThirdSheet')))
  const EmailServic = Loadable(lazy(() => import('./components/EmailServices')))
  
const Routes = [
  { path: "*", element: <LandingComponent /> },
  { path: "/signup", element: <SignUpComponent />},
  { path: "/login", element: <SignInComponent />},
  {path: "/location", element: <MapLocation />},
  {path: "/iapps", element: <ThirdSheetComponent />},
  {path: "/em", element: <EmailServic />}
];

export default Routes;