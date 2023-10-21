import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../utils/global.css"
import "./questionsCarousel.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { questions } from './questionsData';

const QuestionsCarousel = () => {

    const [questionsOK, setQuestionsOK] = useState([]);
    const [questionsFiltered, setQuestionsFiltered] = useState([]);

    // useEffect to load data from localStorage when the component mounts
    useEffect(() => {
        const storedArray = localStorage.getItem('questionsOK');
        if (storedArray!=null) {
            setQuestionsOK(JSON.parse(storedArray));
            console.log("storedArray get from localStorage is", storedArray);
            const filteredQuestions = questions.filter((question) => !storedArray.includes(question.id));
            setQuestionsFiltered(filteredQuestions);
        }else{
            setQuestionsFiltered(questions);
        }

    }, []);


    return (
        <div className="carousel-container mb-10">

            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {questionsFiltered.map((question) => {
                    return (
                        <SwiperSlide key={question.id}>
                            <QuestionCard
                                id={question.id}
                                pregunta={question.pregunta}
                                opcion_1={question.opcion_1}
                                opcion_2={question.opcion_2}
                                opcion_3={question.opcion_3}
                                correcta={question.correcta}
                                explicacion={question.explicacion}
                                questionsOK={questionsOK}
                                setQuestionsOK={setQuestionsOK}
                            ></QuestionCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default QuestionsCarousel
