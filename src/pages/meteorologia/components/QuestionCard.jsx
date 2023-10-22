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
                <p className='answer-detail'>{respuesta}</p>
            </div>
        </div >
    )
}

export default QuestionCard