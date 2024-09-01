"use client";
import React from "react";
import Link from "next/link";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { remove_wishlist_product } from "@/redux/slices/wishlist-slice";

import { cart_product } from "@/redux/slices/cartSlice";

const WishlistMain = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
    };
    const dispatch = useDispatch();

    const wishlistProducts = useSelector(
        (state: RootState) => state.wist.cartProducts
    );

    return (
        <main>
            <Breadcrumb title="My Wishlist" subTitle="Wishlist" />
            <div className="cart-area pt-100 pb-100">
                <div className="container">
                    {wishlistProducts?.length === 0 && (
                        <div className="text-center">
                            <h3>Your wishlist is empty</h3>
                        </div>
                    )}
                    {wishlistProducts?.length >= 1 && (
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={handleSubmit} action="#">
                                    <div className="table-content table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="product-thumbnail">Images</th>
                                                    <th className="cart-product-name">Product</th>
                                                    <th className="product-price">Unit Price</th>
                                                    <th className="product-quantity">Add to cart</th>
                                                    <th className="product-subtotal">Total</th>
                                                    <th className="product-remove">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {wishlistProducts?.map((item: any, index: any) => (
                                                    <tr key={index}>
                                                        <td className="product-thumbnail">
                                                            <Link href="/course-details">
                                                                {item?.image && (
                                                                    <Image
                                                                        src={item?.image}
                                                                        style={{ width: "100%", height: "auto" }}
                                                                        alt="img not found"
                                                                    />
                                                                )}
                                                            </Link>
                                                        </td>
                                                        <td className="product-name">
                                                            <Link href="/course-details">{item?.title}</Link>
                                                        </td>
                                                        <td className="product-price">
                                                            <span className="amount">{item?.price === 0 ? "FREE" : `$${item?.price}`}</span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <button
                                                                onClick={() => dispatch(cart_product(item))}
                                                                className="fill-btn"
                                                            >
                                                                Add to Cart
                                                            </button>
                                                        </td>
                                                        <td className="product-subtotal">
                                                            <span className="amount">
                                                                ${item?.price * item?.quantity}
                                                            </span>
                                                        </td>
                                                        <td className="product-remove">
                                                            <button className="remove-btn"
                                                                onClick={() =>
                                                                    dispatch(remove_wishlist_product(item))
                                                                }
                                                            >
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default WishlistMain;
