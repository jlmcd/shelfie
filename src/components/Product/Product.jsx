import React from 'react'
import './Product.css'

export default function Product(props) {
    console.log(props.item)
    return (
        <div className='product-box'>
            <img src={props.item.img} alt='product for sale'></img>
            <div className='product-info'>
                <h3>{props.item.name}</h3>
                <p>{props.item.price}</p>
            </div>
        </div>
    )
}