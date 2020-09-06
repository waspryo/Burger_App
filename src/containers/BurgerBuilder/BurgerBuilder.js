import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControles from '../../components/Burger/BuildControles/BuildControles';

class BugerBuiler extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControles />
      </Aux>
    )
  }
}
export default BugerBuiler