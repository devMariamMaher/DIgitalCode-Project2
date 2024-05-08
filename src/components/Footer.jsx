import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Field, Formik } from 'formik';
import { Form } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
        <div className="footerBG">
            <img src="/images/footerBG.png" alt="" />
        </div>

        <div className="footerContent">
            <div className="footerTop">
                <div className="allSections">
                    <div className="eachSection">
                        <div className="footerLogo">
                            <img src="/images/footer-logo.png" alt=""/>
                        </div>

                        <div className="footerMap">
                            <img src="/images/map.png" alt=""/>
                        </div>
                    </div>

                    <div className="eachSection">
                        <h3>تواصل معنا</h3>

                        <div className="footerCall">
                            <span><FiPhoneCall/></span>
                            <p>+966580035754</p>
                        </div>

                        <div className="footerLocation">
                            <span><FiMapPin/></span>
                            <p>64 شارع وادي الجيج,الخُبر</p>
                        </div>

                        <div className="footerMail">
                            <span><MdOutlineEmail/></span>
                            <p><a href="mailto:Marcos81@gmail.com">Marcos81@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="eachSection">
                        <h3>من نحن</h3>

                        <ul>
                            <li>التوظيف</li>
                            <li>الشروط والأحكام</li>
                        </ul>
                    </div>

                    <div className="eachSection">
                        <Formik>
                            <Form className='footerEmail'>
                                <Field type= 'email' name='email' placeholder='أدخل ايميلك'/>

                                <button type='submit'>اشترك</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <div className="copyrights">
                    <p>جميع الحقوق محفوظه</p>
                    <span><FaRegCopyright/></span>
                    <p>سترونج. </p>
                    <p>Digital Code </p>
                </div>

                <div className="footerSMIcons">
                    <ul>
                        <li><IoLogoWhatsapp /></li>
                        <li><FaFacebook /></li>
                        <li><FaYoutube /></li>
                        <li><RiInstagramFill /></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
