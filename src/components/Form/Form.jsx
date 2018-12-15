import React, { Component } from 'react'
import './Form.css'
import Axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            editToggle: false
        }
        this.clearInput = this.clearInput.bind(this)
        this.newProduct = this.newProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }

    // componentDidMount() {
    //     if (req.params.id) {
    //         let getOneProduct = (id) => {
    //             Axios.get(`/api/inventory/$(id)`)
    //                 .then(res => {
    //                     this.setState({
    //                         name: res.data.name,
    //                         price: res.data.price,
    //                         imgurl: res.data.img
    //                     })
    //                 })
    //         }
    //     }
    // }

    componentDidUpdate(oldProps) {
        if (oldProps.selected !== this.props.selected) {
            this.setState({
                name: this.props.selected.name,
                price: this.props.selected.price,
                imgurl: this.props.selected.img,
                editToggle: true
            })
        }
    }

    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    newProduct() {
        const { name, price, imgurl } = this.state
        Axios.post('/api/product', { name, price, img: imgurl })
            .then(res => {
                // console.log(res)
                this.props.getFn()
                this.clearInput()
            })
    }

    clearInput() {
        this.setState({
            name: '',
            price: 0,
            imgurl: '',
            editToggle: false
        })
    }

    updateProduct(id, updatedObject) {
        updatedObject = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.imgurl
        }
        id = this.props.selected.id
        console.log(updatedObject)
        Axios.put(`/api/product/${id}`, updatedObject)
            .then(res => {
                this.props.getFn()
                this.clearInput()
            })
    }

    render() {
        console.log(this.props.selected)
        return (
            <div id="form">
                <div id="image-preview">
                    <img
                        src={this.state.imgurl}
                        alt=''
                    ></img>
                </div>
                Image URL:
                <input
                    placeholder='Image URL'
                    value={this.state.imgurl}
                    onChange={evt => this.handleChange('imgurl', evt)}
                />
                Product Name:
                <input
                    placeholder='Product Name'
                    value={this.state.name}
                    onChange={evt => this.handleChange('name', evt)}
                />
                Price:
                <input
                    placeholder='Price'
                    value={this.state.price}
                    onChange={evt => this.handleChange('price', evt)}
                />
                {this.state.editToggle ? (
                <div className='buttons'>
                    <button onClick={this.clearInput}>Cancel</button>
                    <button onClick={this.updateProduct}>Save Changes</button>
                </div>
                ) : (
                <div className='buttons'>
                    <button onClick={this.clearInput}>Cancel</button>
                    <button onClick={this.newProduct}>Add to Inventory</button>
                </div>
                )}
            </div>
        )
    }
}