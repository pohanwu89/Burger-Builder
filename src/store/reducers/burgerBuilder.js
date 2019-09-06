import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const inititalState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const addIngredient = (state, action) => {
  const updatedIngredient = { [action.payload]: state.ingredients[action.payload] + 1 }
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
    building: true
  }
  return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
  const updatedIng = { [action.payload]: state.ingredients[action.payload] - 1 }
  const updatedIngs = updateObject(state.ingredients, updatedIng)
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
    building: true
  }
  return updateObject(state, updatedSt)
}

const setIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.payload.salad,
      bacon: action.payload.bacon,
      cheese: action.payload.cheese,
      meat: action.payload.meat,
    },
    error: false,
    totalPrice: 4,
    building: false
  })
}

const fetchIngredientsFail = (state, action) => {
  return updateObject(state, {
    error: true
  })
}

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
    // return {
    //   ...state,
    //   ingredients: {
    //     ...state.ingredients,
    //     [action.payload]: state.ingredients[action.payload] - 1
    //   },
    //   totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload]
    // }
    case actionTypes.SET_INGREDIENT: return setIngredient(state, action)
    // return {
    //   ...state,
    //   ingredients: {
    //     salad: action.payload.salad,
    //     bacon: action.payload.bacon,
    //     cheese: action.payload.cheese,
    //     meat: action.payload.meat
    //   },
    //   error: false,
    //   totalPrice: 4
    // }
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFail(state, action)
    // return {
    //   ...state,
    //   error: true
    // }


    default:
      return state;
  }
}

export default reducer;