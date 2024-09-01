"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import shape1 from '../../../../public/assets/img/shape/shape1.png';
import shape2 from '../../../../public/assets/img/shape/shape2.png';
import shape3 from '../../../../public/assets/img/shape/shape3.png';
import shape4 from '../../../../public/assets/img/shape/shape4.png';
import shape5 from '../../../../public/assets/img/shape/1.png';
import Link from 'next/link';
import products_data from '@/data/products-data';
import product_category from '@/data/product-category-data';
import { getRating } from "../../../hooks/ratings-hooks"
import { useDispatch } from 'react-redux';
import { productsType } from '@/interFace/interFace';
import { cart_product } from '@/redux/slices/cartSlice';
import { wishlist_product } from '@/redux/slices/wishlist-slice';
import ProductModal from '@/components/common/ProductModel';

const ProductSection = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const [modaldata, setModalData] = useState<any>({});
    const filterData = products_data.slice(0, 4).filter((item) => item.category === activeCategory);
    const dispatch = useDispatch();
    const handleAddToCart = (product: productsType) => {
        dispatch(cart_product(product));
    };


    return (
        <>
            <div className="product-area pos-relative pt-110 pb-85 fix">
                <div className="shape spahe1 bounce-animate">
                    <Image src={shape1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                </div>
                <div className="shape spahe2 bounce-animate"><Image src={shape2} style={{ width: "auto", height: "auto" }} alt="image not found" /></div>
                <div className="shape spahe3 bounce-animate"><Image src={shape3} style={{ width: "auto", height: "auto" }} alt="image not found" /></div>
                <div className="shape spahe4 bounce-animate"><Image src={shape4} style={{ width: "auto", height: "auto" }} alt="image not found" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center section-circle mb-70">
                                <div className="section-img">
                                    <Image src={shape5} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                                <h1>Our Product</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut
                                    labore et dolore magna aliqua enim minim veniam
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <ul className="nav product-tab justify-content-center mb-75">
                                <li onClick={() => setActiveCategory("")} className={activeCategory === "" ? "active nav-item" : ""}>
                                    <div className="product-tab-content text-center">
                                        <div className="product-tab-img">
                                            <i className="flaticon-diet"></i>
                                        </div>
                                        <h4>Vegetables</h4>
                                    </div>
                                </li>
                                {
                                    product_category.map((item) => (
                                        <li key={item.id} onClick={() => setActiveCategory(item.category)} className={activeCategory === item.category ? 'active nav-item' : ''}>
                                            <div className="product-tab-content text-center">
                                                <div className="product-tab-img">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <h4>{item.category}</h4>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="row">
                                {activeCategory === "" ?
                                    <>
                                        {products_data.slice(0, 4).map((item) => (
                                            <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                                <div className="product-wrapper text-center mb-30">
                                                    <div className="product-img">
                                                        <Link href="/shop-details" >
                                                            <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                        </Link>

                                                        <div className="product-action">
                                                            <button onClick={() => handleAddToCart(item)}><i className='fas fa-shopping-cart'></i></button>
                                                            <button onClick={() => setModalData(item)}>
                                                                <span
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId"
                                                                >
                                                                    <i className='fas fa-eye'></i>
                                                                </span>

                                                            </button>
                                                            <button onClick={() => dispatch(wishlist_product(item))}><i className='fas fa-heart'></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <h4><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                                                        <div className="pro-rating">
                                                            {getRating(item.rating)}
                                                        </div>
                                                        <div className="pro-price">
                                                            <span>${item.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                    :
                                    <>
                                        {filterData[0].data.map((item: any) => (
                                            <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                                <div className="product-wrapper text-center mb-30">
                                                    <div className="product-img">
                                                        <Link href="/shop-details" >
                                                            <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                        </Link>

                                                        <div className="product-action">
                                                            <button onClick={() => handleAddToCart(item)}><i className='fas fa-shopping-cart'></i></button>
                                                            <button onClick={() => setModalData(item)}>
                                                                <span
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId"
                                                                >
                                                                    <i className='fas fa-eye'></i>
                                                                </span>

                                                            </button>
                                                            <button onClick={() => dispatch(wishlist_product(item))}><i className='fas fa-heart'></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <h4><Link href={`/shop-details/${item.id}`} >{item.title}</Link></h4>
                                                        <div className="pro-rating">
                                                            {getRating(item.rating)}
                                                        </div>
                                                        <div className="pro-price">
                                                            <span>${item.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal modaldata={modaldata} />
        </>
    );
};

export default ProductSection;