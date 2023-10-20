import React, { useState } from 'react'
import "./questionCard.css"
import "../../../../utils/generalStyles.css"

const QuestionCard = ({ pregunta, opcion_1, opcion_2, opcion_3, correcta, explicacion }) => {
    const [explanation, setExplanation] = useState('');

    const handleSelectOption = (event) => {
        clearStyles();
        console.log("option", event.target.textContent);
        console.log("correcta", correcta);
        if (event.target.textContent === correcta) {
            console.log("Correcto");
            setExplanation(explicacion);
            event.target.classList.add('correct-answer');
        } else {
            console.log("Falso");
            event.target.classList.add('incorrect-answer');
        }
    };

    const clearStyles = () => {
        console.log("clear styles");
        const elements = document.querySelectorAll('.btn');
        elements.forEach((element) => {
            element.classList.remove('incorrect-answer')
            element.classList.remove('correct-answer')
        });
    };

    return (
        <div className='questions-container'>
            <p className="my-2">{pregunta}</p>
            <button className="btn mb-1" onClick={(event) => handleSelectOption(event)}>{opcion_1}</button>
            <button className="btn mb-1" onClick={(event) => handleSelectOption(event)}>{opcion_2}</button>
            <button className="btn mb-1" onClick={(event) => handleSelectOption(event)}>{opcion_3}</button>
            <p>{explanation}</p>
        </div>
    )
}

export default QuestionCard