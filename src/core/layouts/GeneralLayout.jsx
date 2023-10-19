import React from 'react'
import "../../../src/core/layouts/GeneralLayout.css"
import "./generalLayout.css"
import "../../utils/generalStyles.css"
import "../../utils/global.css"

const GeneralLayout = ({ children }) => {
  return (
    <div >
        {children}
    </div>
  )
}

export default GeneralLayout
