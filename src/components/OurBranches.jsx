import React, { useEffect, useRef, useState } from 'react'
import { FiMapPin } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const OurBranches = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef();

    useEffect(() => {
        setActiveIndex(slideIndex);
    }, [slideIndex]);

    // Function to handle slide change
    const handleSlideChange = (index) => {
        setSlideIndex(index);
    };

    // Function to move to the next slide
    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    // Function to move to the previous slide
    const previousSlide = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

  return (
    <div className='ourBranches'>
        <h2>عناوين فروعنا</h2>

        <Slider {...settings} ref={sliderRef} className={activeIndex === slideIndex ? "slide-animate" : ""}>
        {/* <div className="allBranches"> */}
            <div className="eachBranch">
                <span><FiMapPin/></span>
                <h5>اسم الفرع الأول</h5>
                <p> العنوان : 64 شارع وادي الجيج,الخُبر</p>
            </div>
            
            <div className="eachBranch">
                <span><FiMapPin/></span>
                <h5>اسم الفرع الأول</h5>
                <p> العنوان : 64 شارع وادي الجيج,الخُبر</p>
            </div>
            
            <div className="eachBranch">
                <span><FiMapPin/></span>
                <h5>اسم الفرع الأول</h5>
                <p> العنوان : 64 شارع وادي الجيج,الخُبر</p>
            </div>
            
            <div className="eachBranch">
                <span><FiMapPin/></span>
                <h5>اسم الفرع الأول</h5>
                <p> العنوان : 64 شارع وادي الجيج,الخُبر</p>
            </div>
        {/* </div> */}
        </Slider>

        <div className="arrows">
            <IoIosArrowForward className='nextArrow' onClick={nextSlide}/>
            <IoIosArrowBack className='prevArrow' onClick={previousSlide}/>
        </div>
    </div>
  )
}
