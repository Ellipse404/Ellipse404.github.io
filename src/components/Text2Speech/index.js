import { Button } from "@mui/material";
import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeechComponent = (props) => {
  const { speak } = useSpeechSynthesis();
  return (
    <React.Fragment>
      <Button color="primary" variant="contained" onClick={() => speak({text:  props.word || "Hello !!" })}>
        {props.btnText || "SPEAK"}
      </Button>
    </React.Fragment>
  );
};

export default TextToSpeechComponent;
