import React from 'react'

import "../../../utils/generalStyles.css"
import "./reglamentacionView.css"
import QuestionsCarousel from '../components/QuestionsCarousel'
import TestingSeniales from '../components/TestingSeniales'

function ReglamentacionView() {
    return (
        <div className="meteorologia-container">
            <div className="header-container">
                <h2 className='mb-1'>Reglamentacion</h2>
            </div>
            <div className="body-container">
            </div>
            <QuestionsCarousel />
            <div className='meteorologia-links'>
                <a href="https://script.google.com/macros/s/AKfycbyxFMWjRvgvY1icttkh4EiDVzBNuVl1ZCTvYdJmnr5ogNmFHS70c9l2-x9xhxUYVA1IcQ/exec" target='_blank'>App Testing Señiales</a>
                <a href="http://patronesdecabotaje.org.ar/wp-content/uploads/IALA.pdf" target='_blank'>Sistema de Balizamiento Marítimo IALA</a>
                <a href="https://unen.org.ar/#!/-boyas-y-balizas-3/" target='_blank'>Boyado UNEN</a>
            </div>

        </div>
    )
}

export default ReglamentacionView
