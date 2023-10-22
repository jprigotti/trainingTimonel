import React from 'react'
import QuestionsCarousel from '../components/QuestionsCarousel'
import "../../../utils/generalStyles.css"
import "./meteorologiaView.css"

function MeteorologiaView() {
  return (
    <div className="meteorologia-container">
      <div className="header-container">
        <h2 className='mb-1'>Meteorologia</h2>
      </div>
      <div className="body-container">
        <QuestionsCarousel />
      </div>

    </div>
  )
}

export default MeteorologiaView
