import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeechComponent = (props) => {
  const [voiceIndex, setVoiceIndex] = useState(null);
  const onEnd = () => {
    // You could do something here after speaking has finished
  };
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });
  const voice = voices[voiceIndex] || null;

  return (
    <React.Fragment>
      {!supported && (
        <pre>Your browser does not support speech recognition !!</pre>
      )}

      {supported && (
        <>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-label">
              {" "}
              Choose Voicetone
            </InputLabel>
            <Select
              id="voice"
              sx={{ width: "450px !important" }}
              name="voice"
              value={voiceIndex || ""}
              onChange={(event) => {
                setVoiceIndex(event.target.value);
              }}
            >
              <MenuItem value="">Default</MenuItem>
              {voices.map((option, index) => (
                <MenuItem key={option.voiceURI} value={index}>
                  {`${option.lang} - ${option.name}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            color="primary"
            variant="contained"
            onClick={() =>
              speak({ text: props.word || "Hey, this is Empty !!", voice })
            }
          >
            {props.btnText || "SPEAK"}
          </Button>
        </>
      )}
    </React.Fragment>
  );
};

export default TextToSpeechComponent;
