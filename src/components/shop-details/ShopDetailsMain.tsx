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

const ShopDetailsMain = ({ id }: idType) => {
    const product = products_data.find((item) => item.id == id);
    const dispatch = useDispatch();

    const handleAddToCart = (product: productsType | undefined) => {
        if (product) {
            dispatch(cart_product(product));
        }
    };

    const handleRemoveCart = (product: productsType | undefined) => {
        if (product) {
            dispatch(decrease_quantity(product));
        }
    };
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );
    const myData = cartProducts.find((item) => item.id === product?.id);

    return (
        <>
            <Breadcrumb title='Shop Details' subTitle='Shop Details' />
            <section className="shop-banner-area pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div>
                                <div className="product-details-img mb-20">
                                    <div className="tab-content" id="productDetailsTab">
                                        <div className="tab-pane fade active show" id="pro-1" role="tabpanel"
                                            aria-labelledby="pro-1-tab">
                                            <div className="product-large-img">
                                                {product?.image && (
                                                    <Image
                                                        src={product?.image}
                                                        style={{ width: "100%", height: "auto" }}
                                                        alt="product img"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pro-2" role="tabpanel" aria-labelledby="pro-2-tab">
                                            <div className="product-large-img">
                                                <Image src={Product1} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pro-3" role="tabpanel" aria-labelledby="pro-3-tab">
                                            <div className="product-large-img">
                                                <Image src={Product2} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pro-4" role="tabpanel" aria-labelledby="pro-4-tab">
                                            <div className="product-large-img">
                                                <Image src={Product3} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="shop-thumb-tab mb-30" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active show zomata-btn-style" id="pro-1-tab" data-bs-toggle="tab"
                                            data-bs-target="#pro-1" type="button" role="tab" aria-controls="pro-1"
                                            aria-selected="false">
                                            {product?.image && <Image src={product.image} style={{ width: "100%", height: "auto" }} alt="..." />}
                                        </button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link zomata-btn-style" id="pro-2-tab" data-bs-toggle="tab"
                                            data-bs-target="#pro-2" type="button" role="tab" aria-controls="pro-2"
                                            aria-selected="true">
                                            <Image src={Product1} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link zomata-btn-style" id="pro-3-tab" data-bs-toggle="tab" data-bs-target="#pro-3"
                                            type="button" role="tab" aria-controls="pro-3" aria-selected="false">
                                            <Image src={Product2} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link zomata-btn-style" id="pro-4-tab" data-bs-toggle="tab" data-bs-target="#pro-4"
                                            type="button" role="tab" aria-controls="pro-4" aria-selected="false">
                                            <Image src={Product3} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="product-details mb-30">
                                <div className="product-details-title">
                                    <h1>{product?.title}</h1>
                                    <div className="details-price mb-20">
                                        <span>{product?.price === 0 ? "FREE" : `$${product?.price}`}</span>
                                        <span className="old-price">$820.00</span>
                                    </div>
                                    <div className="pro-rating mb-20">
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                    </div>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking
                                    at its
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed
                                    to
                                    using {`'Content here, content here'`}, making it look like readable English.</p>
                                <div className='product-social mb-30'>
                                    <Link href="https://www.facebook.com/"> <i className='fab fa-facebook-f'> </i></Link>
                                    <Link href="https://twitter.com/"> <i className='fab fa-twitter'> </i></Link>
                                    <Link href="https://www.linkedin.com/"> <i className='fab fa-linkedin'> </i></Link>
                                    <Link href="https://www.youtube.com/"> <i className='fab fa-youtube'> </i></Link>
                                </div>
                                <div className="product-details-action">
                                    <div>
                                        <button className="cart-minus"
                                            onClick={() => myData && handleRemoveCart(product)}
                                            disabled={!myData}
                                        >
                                            <i className="far fa-minus"></i>
                                        </button>
                                        <input className="cart-input" type="text" readOnly
                                            value={myData?.quantity || 0} />
                                        <button className="cart-plus" onClick={() => handleAddToCart(product)}>
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
                    <div className="row mt-50">
                        <div className="col-xl-12">
                            <ProductReview />
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection />
        </>
    );
};

export default ShopDetailsMain;