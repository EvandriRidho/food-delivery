import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

    return (
        <div className='food-item'>
            <div className='food-item-image-container'>
                <img
                    className='food-item-image'
                    src={url + "/images/" + image}
                    alt={name}
                />
                {!cartItems[id] ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='white-icon' /> : (
                    <div className='food-item-counter'>
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt='red-icon'
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt='green-icon'
                        />
                    </div>
                )}
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img
                        src={assets.rating_starts}
                        alt="rating-starts"
                    />
                </div>
                <p className='food-item-description'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem