import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import styles from './Burger.module.css'

function Burger(props) {

  let transformedIngredients =
    Object
      .keys(props.ingredients) // tandsform the ing obj to arr :["ing","ing","ing","ing"]
      .map(ingKey => {
        return [...Array(props.ingredients[ingKey])] //to save the data into another array:[[],[],[],[]]
          .map((_, i) => {
            return <BurgerIngredient
              key={ingKey + i}
              type={ingKey}
            />
          })
      }).reduce((arr, el) => {
        return arr.concat(el)
      }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>please add some ingredients</p>
  }
  console.log(props.ingredients)
  console.log(transformedIngredients)

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}


export default Burger

