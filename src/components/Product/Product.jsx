import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

export default function Product(props) {
    // console.log(props.item)
    return (
        <div className='product-box'>
            <img src={props.item.img} alt='product for sale'></img>
            <p className='product-name'>{props.item.name}</p>
            <p className='product-price'>${props.item.price}</p>
            <button className='delete-button' onClick={() => props.deleteFn(props.item.id)}>Delete</button>
            <Link className='edit-button' to={`/add/${props.item.id}`}><button>Edit</button></Link>
        </div >
        )
}