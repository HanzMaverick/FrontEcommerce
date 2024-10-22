"use client";
import React from 'react';
import { useQuestions } from '../../../api/getQuestions';
import { responseType, responseType_two } from '../../../types/response';
import { Questions } from '@/interFace/interFace'; 
import { useAbout } from '../../../api/getAbout';

const FaqSection = () => {
    const { carga, resultado }: responseType_two = useQuestions();
    const { loading, result }: responseType = useAbout();
    
    if (carga) {
        return <p>Loading...</p>;
    }

    if (!resultado || resultado.length === 0) {
        return <p>No hay preguntas frecuentes disponibles en este momento.</p>;
    }


    const backgroundImageUrl = result?.attributes.Question 
                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.attributes.Question.data.attributes.url}` 
                                : '';

    return (
        <div className="faq-area gray2-bg pt-105 pb-90">
            {/* Imagen de fondo aplicada desde la constante */}
            <div 
                className="faq-img d-none d-md-block"
                style={{ 
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                }}
            ></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
                        <div className="question-collapse">
                            <div className="faq-title">
                                <h1>Preguntas Frecuentes</h1>
                            </div>

                            <div className="accordion" id="accordionExample">
                                {resultado.map((faq: Questions, index: number) => (
                                    <div className="accordion-item" key={faq.id}>
                                        <div className="accordion-header" id={`heading${index}`}>
                                            <button 
                                                className="accordion-button" 
                                                type="button" 
                                                data-bs-toggle="collapse" 
                                                data-bs-target={`#collapse${index}`} 
                                                aria-expanded={index === 0 ? 'true' : 'false'} 
                                                aria-controls={`collapse${index}`}
                                            >
                                                <h5>{faq.attributes.Question}</h5>
                                            </button>
                                        </div>
                                        <div 
                                            id={`collapse${index}`} 
                                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                                            aria-labelledby={`heading${index}`} 
                                            data-bs-parent="#accordionExample"
                                        >
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
