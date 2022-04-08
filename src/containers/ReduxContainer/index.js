import React from "react";
import { plusAction, minusAction } from '../../store/action'
import { connect } from 'react-redux';
import { Box } from "@mui/material";

function ReduxContainer(props) {
  return (
    
    <React.Fragment>
      <Box sx={{ display: 'flex',width: "100%", justifyContent: 'center', height: "100vh", alignItems: "center"}}>
      <link href="http://fonts.cdnfonts.com/css/anurati" rel="stylesheet" />

      <button
        className="updateButton"
        style={{
          fontSize: "28px",
          cursor: "pointer",
          paddingTop: "2px",
          paddingBottom: "2px",
        }}
        onClick={props.plusAction}
      >
        +
      </button>
      <h2
        style={{
          fontFamily: "Anurati, sans-serif",
          color: "purple",
          fontSize: "32px",
        }}
      >
        {" "}
        Total Count : {props.countNumbers}{" "}
      </h2>
      <button
        className="updateButton"
        style={{
          fontSize: "29px",
          cursor: "pointer",
          paddingTop: "2px",
          paddingBottom: "2px",
          paddingLeft: "17px",
          paddingRight: "17px",
        }}
        onClick={props.minusAction}
      >
        -
      </button>
      </Box>
    </React.Fragment>
  );
}

const mapStoreToProps = state => {
  return {
    countNumbers: state.countNumbers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plusAction: () => dispatch(plusAction()),
    minusAction: () => dispatch(minusAction()),
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ReduxContainer);
