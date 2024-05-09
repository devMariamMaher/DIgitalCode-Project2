import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export const BSContactUs = () => {
  return (
    <div className='bsContactUs'>
        <div className="bsContactBG">
            <img src="/images/bg-img.png" alt="" />
        </div>

        <div className="bsContactUs-content">
            <h1>تواصل مع قطاع الأعمال</h1>

            <div className="bsContactUs-allInfo">
                <div className="bsContactUs-eachInfo">
                    <span><FiMapPin /></span>
                    <p>64 شارع وادي الجيج,الخُبر</p>
                </div>

                <div className="bsContactUs-eachInfo">
                    <span><FiPhoneCall /></span>
                    <p>966580035754+</p>
                </div>

                <div className="bsContactUs-eachInfo">
                    <span><MdOutlineEmail /></span>
                    <p>Marcos81@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}
