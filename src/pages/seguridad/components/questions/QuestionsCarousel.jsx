import React from "react";
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

    return (
        <div className="carousel-container mb-10">

            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {questions.map((question, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <QuestionCard
                                pregunta={question.pregunta}
                                opcion_1={question.opcion_1}
                                opcion_2={question.opcion_2}
                                opcion_3={question.opcion_3}
                                correcta={question.correcta}
                                explicacion={question.explicacion}
                            ></QuestionCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default QuestionsCarousel
