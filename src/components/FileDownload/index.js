import { Stack } from '@mui/material'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import DropdownComponent from '../DropDown'

const FileDownloadComponent = () => {
  const [data, setData] = useState('')
  const childToParent = (childdata) => {
    setData(childdata)
  }

  console.log("params : => ", data)

  const fileFormat = data == 1 ? "Terms n Conditions.pdf" : data == 2 ? "robots.txt" : "sample.docx" 

  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" >
        <Link to={fileFormat} target="_blank" download >Here </Link>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <DropdownComponent inputLab="Format" first=".pdf" second=".txt" third=".docx" childToParent={childToParent} />
      </Stack>
    </React.Fragment>
  )
}

export default FileDownloadComponent