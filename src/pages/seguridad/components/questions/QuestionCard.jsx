import React, { useEffect, useState } from 'react'
import "./questionCard.css"
import "../../../../utils/generalStyles.css"

const QuestionCard = ({ id, pregunta, opcion_1, opcion_2, opcion_3, correcta, explicacion, questionsOK, setQuestionsOK }) => {
    const [explanation, setExplanation] = useState('');


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 560) {
                const nextArrow = document.querySelector('.swiper-button-next');
                nextArrow.classList.add('hide-arrow')
                const prevArrow = document.querySelector('.swiper-button-prev');
                prevArrow.classList.add('hide-arrow')
            } else {
                const nextArrow = document.querySelector('.swiper-button-next');
                nextArrow.classList.remove('hide-arrow')
                const prevArrow = document.querySelector('.swiper-button-prev');
                prevArrow.classList.remove('hide-arrow')
            };
        }


        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSelectOption = (event) => {
        // clearStyles();
        console.log("option", event.target.textContent);
        console.log("correcta", correcta);
        if (event.target.textContent === correcta) {
            setExplanation(`Correcto: ${explicacion}`);
            event.target.classList.add('correct-answer');
        } else {
            console.log("Falso");
            setExplanation('Incorrecto');
            event.target.classList.add('incorrect-answer');
        }
    };

    const handleQuestionsReset = () => {
        localStorage.clear();
    }

    const clearStyles = () => {
        console.log("clear styles");
        const elements = document.querySelectorAll('.btn-option');
        elements.forEach((element) => {
            element.classList.remove('incorrect-answer')
            element.classList.remove('correct-answer')
        });
    };

    const handleQuestionOK = () => {
        const index = questionsOK.findIndex((index) => index == id)
        console.log(`the index of Id ${id} is `, index);

        if (index == -1) {
            const tempArray = [...questionsOK]
            setQuestionsOK([...questionsOK, id]);
            localStorage.setItem('questionsOK', JSON.stringify([...tempArray, id]));
        }
    }

    return (
        <div className='questions-container'>
            <div className='header'>
                <button className="btn-reset" onClick={handleQuestionsReset}>Reset cards</button>
                <button className="btn-ok" onClick={handleQuestionOK}>Aprendida</button>
            </div>

            <div className='body'>
                <p className="mb-2">{id} {pregunta}</p>
                <button className="btn-option mb-1" onClick={(event) => handleSelectOption(event)}>{opcion_1}</button>
                <button className="btn-option mb-1" onClick={(event) => handleSelectOption(event)}>{opcion_2}</button>
                <button className="btn-option mb-1" onClick={(event) => handleSelectOption(event)}>{opcion_3}</button>
                <p className='answer-detail'>{explanation}</p>
            </div>
        </div >
    )
}

export default QuestionCard