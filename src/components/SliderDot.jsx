import React from 'react'
import "./Slider.css"



 function SliderDot({activeIndex , onclick ,SliderImages}) {
  return (
    <>
        <div className='dots'>
            {SliderImages.map((slide,index)=>(
                <div
                key={index}
                className={`${activeIndex === index ? "active dot" : "dot"}`}
                onClick ={()=>onclick(index)}
                ></div>
            ))}
        </div>
    
    
    </>
  )
}




export default SliderDot

