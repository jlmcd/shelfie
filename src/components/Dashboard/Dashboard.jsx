import React, {Component} from 'react'
import Product from '../Product/Product'


export default class Dashboard extends Component {

    render() {
        return (
            <div>
                {this.props.inventory.map((item, index) => (
                    <Product 
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        )
    }
}