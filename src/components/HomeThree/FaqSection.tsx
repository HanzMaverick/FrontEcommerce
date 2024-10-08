"use client";
import React from 'react';
import bgImage from '../../../public/assets/img/bg/bg13.jpg';
import { useQuestions } from '../../../api/getQuestions';
import { responseType } from '../../../types/response';
import { Questions } from '@/interFace/interFace'; // Asegúrate de importar la interfaz correcta

const FaqSection = () => {
    const { loading, result }: responseType = useQuestions();
    
    if (loading) {
        return <p>Loading...</p>;
    }

    // Si no hay preguntas disponibles
    if (!result || result.length === 0) {
        return <p>No hay preguntas frecuentes disponibles en este momento.</p>;
    }

    return (
        <div className="faq-area gray2-bg pt-105 pb-90">
            <div className="faq-img d-none d-md-block" style={{ backgroundImage: `url(${bgImage.src})` }}></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
                        <div className="question-collapse">
                            <div className="faq-title">
                                <h1>Preguntas Frecuentes</h1>
                            </div>

                            <div className="accordion" id="accordionExample">
                                {result.map((faq: Questions, index: number) => (
                                    <div className="accordion-item" key={faq.id}>
                                        <div className="accordion-header" id={`heading${index}`}>
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                                <h5>{faq.attributes.Question}</h5>
                                            </button>
                                        </div>
                                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                            <div className="accordion__panel">
                                                <p>{faq.attributes.Response}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
