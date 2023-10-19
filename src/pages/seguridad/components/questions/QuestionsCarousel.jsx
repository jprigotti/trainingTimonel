import React, { useEffect, useState } from "react";
import QuestionCard from "./questionCard";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../utils/global.css"
// import Swiper styles
import 'swiper/css';

// Import Swiper styles
// import "./Swiper.css";
// import "swiper/css/bundle";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import { questions } from './questionsData';

const QuestionsCarousel = () => {

    return (
        <div className="main-container mb-10">

            <Swiper
                loop={true}
                pagination={false}
                observer={true}// adding this solve my issue
                navigation={true}
                modules={[Pagination, Navigation, Scrollbar]}
                spaceBetween={10}
                slidesPerView={1}
                className="mySwiper">
                {questions.map((question, index) => {
                    return (
                        <SwiperSlide>
                            <QuestionCard
                            pregunta = {question.pregunta}
                            opcion_1 = {question.opcion_1}
                            opcion_2 = {question.opcion_2}
                            opcion_3 = {question.opcion_3}
                            correcta = {question.correcta}
                            ></QuestionCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default QuestionsCarousel
