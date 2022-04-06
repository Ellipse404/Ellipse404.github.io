import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropdownComponent({ childToParent, ...props }) {
  const [params, setParams] = React.useState("");

  const handleChange = (event) => {
    setParams(event.target.value);
    childToParent(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{ padding: "0px !important" }}
        >
          {props.inputLab}
        </InputLabel>
        <Select
          sx={{
            minWidth: 120,
            minHeight: "30px !important",
            boxSizing: "border-box",
            padding: "0px !important",
            fontSize: "0.870rem !important",
            borderRadius: "0.30em",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={params}
          label={props.inputLab || "Age"}
          onChange={handleChange}
        >
          <MenuItem value={1}>{props.first}</MenuItem>
          <MenuItem value={2}>{props.second}</MenuItem>
          <MenuItem value={3}>{props.third}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
