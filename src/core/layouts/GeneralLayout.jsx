import React from 'react'
import "../../../src/core/layouts/GeneralLayout.css"
import "./generalLayout.css"
import "../../utils/generalStyles.css"
import "../../utils/global.css"
import NavBar from "../../components/navBar/NavBar"


const GeneralLayout = ({ children }) => {
  return (
    <div >
      <NavBar />
        {children}
    </div>
  )
}

export default GeneralLayout
