import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { Button, Box } from "@mui/material";

const SpeechToTextComponent = () => {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <Box>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button color="primary" variant="contained" onMouseDown={listen}>
        START
      </Button>
      <Button color="primary" variant="contained" onMouseUp={stop}>
        STOP
      </Button>
      {listening && <div>Go ahead I'm listening</div>}
    </Box>
  );
};

export default SpeechToTextComponent;
