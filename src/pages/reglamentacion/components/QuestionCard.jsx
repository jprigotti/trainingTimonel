import React, { useEffect, useState } from 'react'
import "./questionCard.css"
import "../../../utils/generalStyles.css"

const QuestionCard = ({ id, pregunta, respuesta }) => {


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


    return (
        <div className='questions-container'>

            <div className='body mt-1'>
                <p className="mb-2">{id} {pregunta}</p>
                {/* <p className='answer-detail'>{respuesta}</p> */}
                <ul className="answer-detail">
                    {
                        (Array.isArray(respuesta)) ?
                            respuesta.map((answer, index) => (
                                <li key={index} className="faq-answer">{answer}</li>
                            )) :
                            <li>{respuesta}</li>
                    }
                </ul>
            </div>
        </div >
    )
}

export default QuestionCard