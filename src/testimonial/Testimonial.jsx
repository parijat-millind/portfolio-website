import React from 'react'
import "./Testimonial.css";
import {Swiper,SwiperSlide} from 'swiper/react'
import Picture from "../img/pic.jpg";
const Testimonial = () => {
    const client = [
        {
            img:Picture,
            review:
            "I am Parijat Millind,currently pursuing IT at BIT Mesra,Ranchi(2nd year).I am a CP enthusiast and artist by passion and badminton player by interest.",
        },
    ]
  return (
    <div className="twrapper">
        <div className="theading">
            <span>Clients always get </span>
            <span>Exceptional work </span>
            <span>From me... </span>
        </div>
        <Swiper>
            {client.map((clien,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={clien.img} alt="" />
                        <span>{clien.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial