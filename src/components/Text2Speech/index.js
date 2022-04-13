import { Button } from "@mui/material";
import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeechComponent = (props) => {
  const onEnd = () => {
    // You could do something here after speaking has finished
  };
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });
  return (
    <React.Fragment>
      { !supported && (
        <pre>Your browser does not support speech recognition !!</pre>
      )}

     { supported &&(<Button color="primary" variant="contained" onClick={() => speak({text:  props.word || "Hello !!" })}>
        {props.btnText || "SPEAK"}
      </Button>)}
    </React.Fragment>
  );
};

export default TextToSpeechComponent;
