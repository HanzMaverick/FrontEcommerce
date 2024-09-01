"use client"
import React from 'react';
import ContactBg from '../../public/assets/img/bg/bg18.jpg';
import { useFormik } from 'formik';
import { contact_schema } from '@/utils/validation-schema';
import { toast } from 'react-toastify';
import ErrorMsgTwo from './error-msg-two';

const ContactForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                website: "",
                massage: "",
            },
            validationSchema: contact_schema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Contact Successful")
                resetForm();
            },
        });

    return (
        <div className="contact-area">
            <div className="container">
                <div className="contact-bg pt-90 pb-70"
                    style={{ backgroundImage: `url(${ContactBg.src})` }}>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-title text-center mb-35">
                                <h1>Leave a Message</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-wrapper mb-30">
                                <form onSubmit={handleSubmit} id="contact-us-form">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                type="text"
                                                placeholder="Name :"
                                                id="name"
                                                required
                                            />
                                            {touched.name && <ErrorMsgTwo error={errors.name} />}
                                        </div>

                                        <div className="col-xl-6 col-lg-6">
                                            <input
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                type="email"
                                                placeholder="Email :"
                                                id="email"
                                                required
                                            />
                                            {touched.email && <ErrorMsgTwo error={errors.email} />}
                                        </div>

                                        <div className="col-xl-12 col-lg-12">
                                            <input
                                                name="website"
                                                value={values.website}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                type="text"
                                                placeholder="Website :"
                                                id="website"
                                            />
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <textarea cols={30} rows={10}
                                                name="massage"
                                                value={values.massage}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="massage"
                                                placeholder="Write your comments :"
                                            ></textarea>
                                            {touched.massage && <ErrorMsgTwo error={errors.massage} />}
                                        </div>

                                        <div className="col-xl-12 col-lg-12">
                                            <div className="contact-button text-center">
                                                <button className="btn" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;