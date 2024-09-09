"use client";
import Link from 'next/link';
import React from 'react';
import futureBg from '../../../public/assets/img/bg/bg1.jpg';
import futureBgOne from '../../../public/assets/img/shape/1.png';
import Image from 'next/image';
import { useGetFeatureProducts } from '../../../api/getFeatureProducts';
import { responseType } from '../../../types/response';
import { Product } from '@/interFace/interFace';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const FutureSection = () => {
    const truncateText = (text: string, maxWords: number) => {
        const words = text.split(' ');
        return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
    };

    const {loading, result}: responseType = useGetFeatureProducts();
    console.log(result);

    if(loading){
        return <p className='features-text'>Cargando...</p>
    }
    if (!result) {
        return <p className='features-text'>No hay productos destacados</p>
    }

    // Configuración del carrusel
    const settings = {
        dots: true,  // Muestra los puntos de navegación
        infinite: true,  // El carrusel se repite en bucle
        speed: 500,  // Velocidad de transición
        slidesToShow: 4,  // Cuántos productos mostrar al mismo tiempo
        slidesToScroll: 4,  // Cuántos productos avanzar en cada clic
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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
        <div className="features-area pt-110 pb-90" style={{ backgroundImage: `url(${futureBg.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={futureBgOne} style={{ width: "auto", height: "auto" }} alt="image not found" />
                            </div>
                            <h1>Productos destacados</h1>
                            <p>
                                En esta sección encontrarás los productos más destacados de nuestra tienda.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="slider-container">
                    {/* Slider para el carrusel */}
                    <Slider {...settings}>
                        {result.map((item: Product) => (
                            <div className="features-wrapper text-center mb-30" key={item.id}>
                                <div className="features-img">
                                    {item.attributes.images?.data.length > 0 && (
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.attributes.images.data[0].attributes.url}`}
                                            alt={item.attributes.productName}
                                            width={200} // Ajuste del ancho
                                            height={200} // Ajuste del alto
                                            className="product-image" // Añadir clase para CSS personalizado
                                        />
                                    )}
                                </div>
                                <div className="features-text">
                                    <h4>{item.attributes.productName}</h4>
                                    <p>{truncateText(item.attributes.description, 38)}</p>
                                    <Link href="/products">
                                        Leer más <i className="dripicons-arrow-thin-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};



export default FutureSection;

