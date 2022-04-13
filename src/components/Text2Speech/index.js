import { Button } from "@mui/material";
import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeechComponent = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <React.Fragment>
      <Button color="primary" variant="contained" onClick={() => speak({text: "Hello Speech Recognition !!"})}>
        Speak
      </Button>
    </React.Fragment>
  );
};

export default TextToSpeechComponent;
