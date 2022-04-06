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

  const fileFormat = data == 1 ? "Terms n Conditions.pdf" : data == 2 ? "Terms n Conditions.docx" : "Terms n Conditions.txt" 

  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" >
        <Link to={fileFormat} target="_blank" download >Here </Link>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <DropdownComponent inputLab="Format" first=".pdf" second=".docx" third=".txt" childToParent={childToParent} />
      </Stack>
    </React.Fragment>
  )
}

export default FileDownloadComponent