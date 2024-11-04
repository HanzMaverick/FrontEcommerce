"use client"
import React, { useState } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import PaginationData from '../common/pagination/pagination-data'
import products_data from '@/data/products-data';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { cart_product } from '@/redux/slices/cartSlice';
import { Product, productsType } from '@/interFace/interFace';
import { wishlist_product } from '@/redux/slices/wishlist-slice';
import { getRating } from '@/hooks/ratings-hooks';
import ProductModal from '../common/ProductModel';
interface categoryShopType {
    id: number;
    category: string
}
const ShopMainArea = () => {
    const [modaldata, setModalData] = useState<any>({});
    const [activeCategory, setActiveCategory] = useState<string>("Default By");
    const filterData = products_data.slice(4, 16).filter((item) => item.category == activeCategory);
    const dispatch = useDispatch();
    const handleAddToCart = (product: Product) => {
        dispatch(cart_product(product));
    };


    const categoryShopData: categoryShopType[] = [
        {
            id: 1,
            category: "New Product"
        },
        {
            id: 2,
            category: "Top Sales"
        },
    ]
    const handleSelectChange = (e: any) => {
        const selectedCategory = e.target.value;
        setActiveCategory(selectedCategory);
    };

    return (
        <>
            <Breadcrumb title='Shop Page' subTitle='Shop Page' />
            <div className="product-area pos-relative pt-110 pb-120 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-6 col-sm-7">
                            <div className="product-showing">
                                <p>Showing 1–22 of 32 results</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-5">
                            <div className="pro-filter mb-40 f-right">
                                <select name="pro-filter" id="pro-filter" onChange={handleSelectChange} value={activeCategory}>
                                    <option value="Default By">Default By</option>
                                    {categoryShopData.map((item) => (
                                        <option value={item.category} key={item.id}>
                                            {item.category}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        {
                            activeCategory === "Default By" ?
                                <>
                                    {
                                        products_data.slice(4, 16).map((item) => (
                                            <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                                <div className="product-wrapper text-center mb-30">
                                                    <div className="product-img">
                                                        <Link href={`/shop-details/${item.id}`}>
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </Link>
                                                        <div className="product-action">
                                                            <button onClick={() => handleAddToCart(item)}><i className='fas fa-shopping-cart'></i></button>
                                                            <button onClick={() => setModalData(item)}>
                                                                <span data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                    <i className='fas fa-eye'></i>
                                                                </span>
                                                            </button>
                                                            <button onClick={() => dispatch(wishlist_product(item))}><i className='fas fa-heart'></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <h4> <Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                                                        <div className="pro-rating">{getRating(item.rating)}</div>
                                                        <div className="pro-price"><span>${item.price}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </>
                                :
                                <>
                                    {
                                        filterData?.map((item) => (
                                            <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                                <div className="product-wrapper text-center mb-30">
                                                    <div className="product-img">
                                                        <Link href={`/shop-details/${item.id}`}>
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </Link>
                                                        <div className="product-action">
                                                            <button onClick={() => handleAddToCart(item)}><i className='fas fa-shopping-cart'></i></button>
                                                            <button onClick={() => setModalData(item)}>
                                                                <span data-bs-toggle="modal" data-bs-target="#productModalId">
                                                                    <i className='fas fa-eye'></i>
                                                                </span>
                                                            </button>
                                                            <button onClick={() => dispatch(wishlist_product(item))}><i className='fas fa-heart'></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <h4> <Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                                                        <div className="pro-rating">{getRating(item.rating)}</div>
                                                        <div className="pro-price"><span>${item.price}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </>
                        }
                    </div>
                    <div className="row">
                        <PaginationData />
                    </div>
                </div>
            </div>
            <ProductModal modaldata={modaldata} />
        </>
    );
};

export default ShopMainArea;