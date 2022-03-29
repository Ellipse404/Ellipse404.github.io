import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

const Google = () => {
//   const [gvalues, setGvalues] = useState([
//     {
//       username: "",
//       email: "",
//     },
//   ]);
  const responseGoogle = (response) => {
    console.log(
    "firstname :: ", response.profileObj.givenName,
    "lastname :: ", response.profileObj.familyName, 
    "Email Id :: ", response.profileObj.email, 
    "Google Id :: ", response.profileObj.googleId,
    );

    axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL,
      data: { response },
    })
      .then((response) => {
        console.log("GOOGLE SIGNIN SUCCESS", response);
        console.log(
          "GOOGLE SIGNIN SUCCESS response.tokenId -->>",
          response.tokenId
        );

      })
      .catch((error) => {
        console.log("GOOGLE SIGNIN ERROR", error);
      });
  };
  return (
    <div className="pb-3">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        buttonText="Login"
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Google;
