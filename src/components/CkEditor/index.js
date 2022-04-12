import React from 'react'
import { CKEditor } from 'ckeditor4-react';

const EditorComponent = () => {
  return (
    <React.Fragment>
      <CKEditor initData={<p>Try the Editor !!</p>} />
    </React.Fragment>
    )
}

export default EditorComponent