import React from 'react'

const LandingComponent = () => {
  const chkStr = "Something"
  const encodedStr = window.btoa(chkStr)
  return (
    <React.Fragment>
      <p>{encodedStr}</p>
      
    </React.Fragment>
  )
}

export default LandingComponent