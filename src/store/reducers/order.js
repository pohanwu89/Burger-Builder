import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
  error: false
}

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false })
}

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const purchaseBurgerSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(action.payload)
  })
}

const purchaseBurgerFail = (state, action) => {
  return updateObject(state, { loading: false })
}

const fetchOrdersStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.payload,
    loading: false,
  })
}

const fetchOrdersFail = (state, action) => {
  return updateObject(state,
    {
      loading: false,
      error: true
    })
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT: return purchaseInit(state, action)
    //     {
    //        ...state,
    // purchased: false
    //     }
    case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action)
    //  {
    //   ...state,
    //   loading: true
    // }
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action)
    // {
    //   ...state,
    //   loading: false,
    //   purchased: true,
    //   orders: state.orders.concat(action.payload)
    // };
    case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action)
    // {
    //   ...state,
    //   loading: false,
    // }
    case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action)
    // {
    //   ...state,
    //   loading: true,
    // }
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action)
    // {
    //   ...state,
    //   orders: action.payload,
    //   loading: false,
    // }
    case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action)
    //   ...state,
    //   loading: false
    // }
    default: return state;
  }
}

export default orderReducer;