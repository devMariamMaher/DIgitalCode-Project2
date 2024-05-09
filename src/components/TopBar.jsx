import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

export const TopBar = () => {
  return (
    <div className='topBar'>
        <div className="tbSocialMediaIcons">
            <ul>
                <li><IoLogoWhatsapp /></li>
                <li><FaFacebook /></li>
                <li><FaYoutube /></li>
                <li><RiInstagramFill /></li>
            </ul>
        </div>

        <div className="tbMail">
            <span><MdOutlineEmail/></span>
            <p><a href="mailto:Marcos81@gmail.com">Marcos81@gmail.com</a></p>
        </div>

        <div className="tbLocation">
            <span><FiMapPin/></span>
            <p>64 شارع وادي الجيج,الخُبر</p>
        </div>

        <div className="tbCall">
            <span><FiPhoneCall/></span>
            <p>966580035754+</p>
        </div>
    </div>
  )
}
