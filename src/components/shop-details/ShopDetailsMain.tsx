"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import Product1 from '../../../public/assets/img/product/lg1.jpg';
import Product2 from '../../../public/assets/img/product/lg2.jpg';
import Product3 from '../../../public/assets/img/product/lg3.jpg';
import Image from 'next/image';
import { cart_product, decrease_quantity } from '@/redux/slices/cartSlice';
import { idType, productsType } from '@/interFace/interFace';
import { useDispatch } from "react-redux";
import products_data from '@/data/products-data';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import ProductReview from './ProductReview';
import BrandSection from '../Elements/brand/BrandSection';
import { responseType } from '../../../types/response';
import { useGetProducts } from '../../../api/getProduct';
import { Product } from '@/interFace/interFace';

const ShopDetailsMain = ({ id }: idType) => {
    const { loading: productsLoading, result: products = [] } = useGetProducts(id);
    const dispatch = useDispatch();

    // Encuentra el producto en base al ID
    const product = products_data.find((item) => item.id == id);
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
    const myData = cartProducts.find((item) => item.id === product?.id);

    const handleAddToCart = () => {
        if (product) {
            dispatch(cart_product(product));
        }
    };

    const handleRemoveCart = () => {
        if (myData) {
            dispatch(decrease_quantity(myData));
        }
    };

    return (
        <>
            {products?.map((item: Product) => (
                <>
                    <Breadcrumb title='Shop Details' subTitle='Shop Details' />
                    <section className="shop-banner-area pt-120 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div>
                                        {/* Manejo de imágenes */}
                                        <div className="product-details-img mb-20">
                                            <div className="tab-content" id="productDetailsTab">
                                                {item.images?.map((img, index) => (
                                                    <div key={index} className={`tab-pane fade ${index === 0 ? 'active show' : ''}`} id={`pro-${index + 1}`} role="tabpanel" aria-labelledby={`pro-${index + 1}-tab`}>
                                                        <div className="product-large-img">
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.url}`}
                                                                alt={item.productName}
                                                                width={270}
                                                                height={450}
                                                                className="product-image"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Navegación de imágenes */}
                                        <ul className="shop-thumb-tab mb-30" id="myTab" role="tablist">
                                            {item.images?.map((img, index) => (
                                                <li key={index} className="nav-item" role="presentation">
                                                    <button className={`nav-link ${index === 0 ? 'active show' : ''}`} id={`pro-${index + 1}-tab`} data-bs-toggle="tab"
                                                        data-bs-target={`#pro-${index + 1}`} type="button" role="tab" aria-controls={`pro-${index + 1}`}
                                                        aria-selected={index === 0}>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.url}`}
                                                            alt={item.productName}
                                                            width={280}
                                                            height={150}
                                                            className="product-image"
                                                        />
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6">
                                    <div className="product-details mb-30">
                                        <div className="product-details-title">
                                            <h1>{item.productName}</h1>
                                            <div className="details-price mb-20">
                                                <span>{item.price === 0 ? "FREE" : `$${item.price}`}</span>
                                            </div>
                                            <div className="pro-rating mb-20">
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                            </div>
                                        </div>
                                        <p>{item.description}</p>
                                        <div className='product-social mb-30'>
                                            <Link href="https://www.facebook.com/"> <i className='fab fa-facebook-f'> </i></Link>
                                            <Link href="https://twitter.com/"> <i className='fab fa-twitter'> </i></Link>
                                            <Link href="https://www.linkedin.com/"> <i className='fab fa-linkedin'> </i></Link>
                                            <Link href="https://www.youtube.com/"> <i className='fab fa-youtube'> </i></Link>
                                        </div>
                                        <div className="product-details-action">
                                            <div>
                                                <button className="cart-minus"
                                                    onClick={handleRemoveCart}
                                                    disabled={!myData}
                                                >
                                                    <i className="far fa-minus"></i>
                                                </button>
                                                <input className="cart-input" type="text" readOnly
                                                    value={myData?.quantity || 0} />
                                                <button className="cart-plus" onClick={handleAddToCart}>
                                                    <i className="far fa-plus"></i>
                                                </button>
                                                <Link href="/cart" className="zomata-fill-btn">
                                                    View Cart
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ))}
        </>
    );
};

export default ShopDetailsMain;