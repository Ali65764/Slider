import React, { useState,useEffect } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./Slider.css";
import SliderImages from "./SliderImages";
import SliderDot from "./SliderDot";

function Slider() {
 const [currentIndex,setCurrentIndex] = useState(0);
 
  const evvelkiSlide = ()=>{
    const newIndex = currentIndex === 0 ? SliderImages.length-1  : currentIndex - 1
    setCurrentIndex(newIndex)
  }


  const sonrakiSlide = ()=>{
    const newIndex = currentIndex === SliderImages.length-1  ? 0  : currentIndex+1
    setCurrentIndex(newIndex)
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      sonrakiSlide()
    },3000);
    return()=>clearInterval(interval)
  },[currentIndex])

  return (
    <div className="slider">
      <div className="slider-wrapper">
        {SliderImages.map((image, index) => (
          <img
            key={index}
            src={image.img}
            alt={`${image.img}`}
            className={index === currentIndex ? "slides active" : "slides inactive"}
          />
        ))}
      </div>
      <div className="arrows">
        <span className="prev" onClick={evvelkiSlide}>
          <GrFormPrevious />
        </span>
        <span className="next" onClick={sonrakiSlide}>
          <GrFormNext />
        </span>
      </div>
      <SliderDot
      activeIndex={currentIndex}
      onclick={(index)=>setCurrentIndex(index)}
      SliderImages={SliderImages}
      />
    </div>
  );
}

export default Slider;



