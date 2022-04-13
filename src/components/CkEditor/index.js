import React from 'react'
import { CKEditor } from 'ckeditor4-react';
import TreeViewComponent from '../TreeMap';

const ExtraComponent = () => {
  return (
    <React.Fragment>
      <CKEditor initData={<p>Try the Editor !!</p>} />
      <TreeViewComponent />
    </React.Fragment>
    )
}

export default ExtraComponent