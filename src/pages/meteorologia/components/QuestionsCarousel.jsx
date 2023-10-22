import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../utils/global.css"
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
                {questions.map((question) => {
                    return (
                        <SwiperSlide key={question.id}>
                            <QuestionCard
                                id={question.id}
                                pregunta={question.Question}
                                respuesta={question.Answer}
                             ></QuestionCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default QuestionsCarousel
