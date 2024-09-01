import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PaymentMethod from "./PaymentMethod";

const OrderArea = () => {
    const [shipingCast, setShipingCast] = useState(0)
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );


    const totalPrice = cartProducts.reduce((total, product) => {
        if (typeof product.price === 'number' && product.price !== 0) {
            return total + (product.price ?? 0) * (product.quantity ?? 0);
        }
        return total;
    }, 0);

    return (
        <div className="your-order mb-30 ">
            <h3>Your order</h3>
            <div className="your-order-table table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th className="product-name">Product</th>
                            <th className="product-total">Total</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cartProducts.length ?
                                <>
                                    {
                                        cartProducts.map((item) => (
                                            <tr key={item.id} className="cart_item">
                                                <td className="product-name">
                                                    {item.title} <strong className="product-quantity"> × {item.quantity}</strong>
                                                </td>
                                                <td className="product-total">
                                                    <span className="amount">{item.price ? `$${item.price}` : '$0'}</span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </>
                                :
                                <></>
                        }
                    </tbody>
                    <tfoot>
                        <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td className="product-total">
                                <span className="amount">${totalPrice.toFixed(2)}</span>
                            </td>
                        </tr>
                        <tr className="shipping">
                            <th>Shipping</th>
                            <td className="product-total">
                                <ul>
                                    <li>
                                        <input onClick={() => setShipingCast(7)} type="radio" id="Amount" name="Shipping" />
                                        <label htmlFor="Amount">
                                            Flat Rate: <span className="amount">$7.00</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input onClick={() => setShipingCast(0)} type="radio" id="FreeShipping" name="Shipping" />
                                        <label htmlFor="FreeShipping">Free Shipping:</label>
                                    </li>
                                    <li></li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="order-total">
                            <th>Order Total</th>
                            <td className="product-total">
                                <strong>
                                    <span className="amount">${(totalPrice + shipingCast).toFixed(2)}</span>
                                </strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <PaymentMethod />
        </div>
    );
};

export default OrderArea;
