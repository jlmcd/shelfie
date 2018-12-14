import React, {Component} from 'react'
import Axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.clearInput = this.clearInput.bind(this)
        this.newProduct = this.newProduct.bind(this)
    }

    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    newProduct() {
        const {name, price, imgurl} = this.state
        Axios.post('/api/product', {name, price, img: imgurl})
            .then(res => {
                console.log(res)
                this.props.getFn()
                this.clearInput()
            })
    }

    clearInput() {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    render() {
        return (
            <div>
                <input 
                    placeholder='Image URL'
                    value={this.state.imgurl}
                    onChange={evt => this.handleChange('imgurl', evt)}
                />
                <input 
                    placeholder='Product Name'
                    value={this.state.name}
                    onChange={evt => this.handleChange('name', evt)}
                />
                <input 
                    placeholder='Price'
                    value={this.state.price}
                    onChange={evt => this.handleChange('price', evt)}
                />
                <button onClick={this.clearInput}>Cancel</button>
                <button onClick={this.newProduct}>Add to Inventory</button>
            </div>
        )
    }
}