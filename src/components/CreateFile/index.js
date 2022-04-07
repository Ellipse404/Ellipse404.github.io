import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TextField, Box, FormControl, Button } from "@mui/material";

const CreateFileComponent = () => {
  const [data, setData] = useState(null)

// fetch data from API & state store

useEffect(() => {
  axios(process.env.REACT_APP_API_URL)
   .then((res) => {
     setData(res.data)
   })
   .catch((error) => {
     console.log("Error getting the data : ", error)
   })
}, [])

// create file
const downloadTxtFile = () => {

  const createFile = document.createElement("a");
  const file = new Blob([JSON.stringify(data)], {type: 'text/plain'})
  createFile.href = URL.createObjectURL(file)
  createFile.download = "dataFile.txt";
  document.body.appendChild(createFile);
  createFile.click()
}

  return (
    <React.Fragment>
      { console.log("API DATA => ", typeof(JSON.stringify(data)))}
      <Box>
        <Button onClick={downloadTxtFile}>
          Download Data
        </Button>
      </Box>      
    </React.Fragment>
  )
}

export default CreateFileComponent