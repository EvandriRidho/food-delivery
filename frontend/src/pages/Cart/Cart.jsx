import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'


const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item, index) => {
                        if (cartItems[item._id]) {
                            return (
                                <>
                                    <div className='cart-items-title cart-items-item'>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>{item.price * cartItems[item._id]}</p>
                                        <p
                                            className='cross'
                                            onClick={() => removeFromCart(item._id)}
                                        >
                                            X
                                        </p>
                                    </div>
                                    <hr />
                                </>
                            )
                        }
                    })
                }
            </div>
            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Cart Total</h2>
                    <div>
                        <div
                            className='cart-total-detail'
                        >
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <div
                            className='cart-total-detail'
                        >
                            <p>Delivery Fee</p>
                            <p>{2}</p>
                        </div>
                        <div
                            className='cart-total-detail'
                        >
                            <b>Total</b>
                            <b>{getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button>Check Out</button>
                </div>
                <div className='cart-promocode'>
                    <div >
                        <p>If you have a promo code, Enter it here</p>
                        <div className='cart-promocode-input'>
                            <input
                                type='text'
                                placeholder='promo code'
                            />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart