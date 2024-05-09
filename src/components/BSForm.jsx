import { Field, Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom'

export const BSForm = () => {
  return (
    <div className='bsForm'>
        <div className="bsForm-img">
            <img src="/images/customer-service.png" alt="" />
        </div>

        <div className="bsForm-content">
            <h1>تواصل مع قطاع الأعمال</h1>

            <Formik>
                <Form>
                    <div className="allFields">
                        <div className="wrapper">
                            <label htmlFor='name'>الاسم</label>
                            <Field type= "text" id= "name" name= "name" placeholder= "ادخل اسمك"/>
                        </div>

                        <div className="wrapper">
                            <label htmlFor='email'>الإيميل</label>
                            <Field type= "email" id= "email" name= "email" placeholder= "أدخل ايميلك"/>
                        </div>

                        <div className="wrapper">
                            <label htmlFor='phoneNo'>رقم الهاتف</label>
                            <Field type= "text" id= "phoneNo" name= "phoneNo" placeholder= "ادخل رقم هاتفك"/>
                        </div>

                        <div className="wrapper">
                            <label htmlFor='message'>رسالتك</label>
                            <Field as= "textarea" id= "message" name= "message" placeholder= "أدخل رسالتك"/>
                        </div>

                        <button>إرسال</button>
                    </div>
                </Form>
            </Formik>
        </div>
    </div>
  )
}
