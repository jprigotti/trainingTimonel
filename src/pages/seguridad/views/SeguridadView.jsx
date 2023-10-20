import React from 'react'
import QuestionsCarousel from '../components/questions/questionsCarousel'
import "../../../utils/generalStyles.css"
import "./seguridadView.css"


function SeguridadView() {
  return (
    <div className="seguridad-container">
      <div className="header-container">
        <h2 className='mb-1'>Seguridad</h2>
      </div>
      <div className="body-container">
        <QuestionsCarousel />
      </div>

    </div>
  )
}

export default SeguridadView