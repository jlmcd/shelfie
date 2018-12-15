import React, { Component } from 'react';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

import axios from 'axios'

import {Link} from 'react-router-dom'
import routes from './routes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      selectedProduct: null
    }
    // this.componentDidMount = this.componentDidMount.bind(this)
    this.selectToEdit = this.selectToEdit.bind(this)
  }

  // componentDidMount() {
  //   axios.get("/api/inventory").then(res => {
  //     // console.log(res)
  //     this.setState({ inventory: res.data });
  //   });
  // }

  selectToEdit(product) {
    this.setState({
      selectedProduct: product
    })
    // console.log(this.state.selectedProduct)
  }

  render() {
    return (
      <div>
        <Header />
        <Link to='/'><button>Dashboard</button></Link>
        <Link to='/add'><button>Add Inventory</button></Link>

        {routes}
        {/* <div className='content'>
          <Dashboard
            inventory={this.state.inventory}
            getFn={this.componentDidMount}
            editFn={this.selectToEdit}
          />
          <Form
            getFn={this.componentDidMount}
            selected={this.state.selectedProduct}
          />
        </div> */}
      </div>
    );
  }
}

export default App;
