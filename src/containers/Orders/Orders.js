import React, { Component } from 'react';
import { connect } from 'react-redux'
import Order from '../../components/Order/Order'
import firebaseDb from '../../apis/axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {

  // state = {
  //   orders: [],
  //   loading: true

  // }

  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
    // firebaseDb.get('/orders.json')
    //   .then(res => {
    //     const fetchedOrders = [];
    //     for (let key in res.data) {
    //       fetchedOrders.push({
    //         ...res.data[key],
    //         id: key
    //       })
    //     }
    //     console.log(fetchedOrders)
    //     this.setState({ loading: false, orders: fetchedOrders })
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false })
    //   })
  }


  render() {
    let orders = this.props.error ? <p>Sorry, you must be authenticated to see orders</p> : <Spinner />
    if (!this.props.loading && !this.props.error) {
      orders = (
        this.props.orders.map(order => (
          <Order
            key={order.id}
            price={order.price}
            ingredients={order.ingredients}
          />
        ))
      )
    }
    return (
      <div>
        {orders}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    error: state.order.error,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, firebaseDb));
