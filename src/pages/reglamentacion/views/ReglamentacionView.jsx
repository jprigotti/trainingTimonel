import React from 'react'

import "../../../utils/generalStyles.css"
import "./reglamentacionView.css"
import QuestionsCarousel from '../components/QuestionsCarousel'

function ReglamentacionView() {
    return (
        <div className="meteorologia-container">
            <div className="header-container">
                <h2 className='mb-1'>Reglamentacion</h2>
            </div>
            <div className="body-container">
            </div>
            <QuestionsCarousel />
        </div>
    )
}

export default ReglamentacionView