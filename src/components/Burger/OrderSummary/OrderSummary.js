import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {




  render() {
    const ingredientsSummary =
      Object.keys(this.props.ingredients)
        .map((ingKey) => {
          return (
            <li key={ingKey}>
              <span style={{ textTansform: 'capitalize' }}>{ingKey}:</span>
              {this.props.ingredients[ingKey]}
            </li>)
        })
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong> Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p> Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchasedCancel}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
      </Aux>
    )
  }



}

export default OrderSummary;
