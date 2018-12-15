import React, {Component} from 'react'
import Product from '../Product/Product'
import Axios from 'axios';


export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            inventory: []
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        Axios.get("/api/inventory").then(res => {
          // console.log(res)
          this.setState({ inventory: res.data });
        });
      }

    deleteItem(id) {
        Axios.delete(`/api/product/${id}`)
            .then(res => {
                this.props.getFn()
            })
    }

    render() {
        return (
            <div>
                {this.state.inventory.map((item, index) => (
                    <Product 
                        key={index}
                        item={item}
                        deleteFn={this.deleteItem}
                        editFn={this.props.editFn}
                    />
                ))}
            </div>
        )
    }
}