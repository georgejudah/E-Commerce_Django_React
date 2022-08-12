import React from 'react'

function Rating({value, text, color}) {
  return (
    <div className="rating">
    <span>
        <i style={{ color }} className={
            // condition for setting classname for the number of starts
            // stars using font awesome
            value >= 1 
            ? 'fas fa-star'
            : value >= 0.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }>

        </i>
    </span>
    <span>
        <i style={{ color }} className={
            value >= 2 
            ? 'fas fa-star'
            : value >= 1.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }>

        </i>
    </span>
    <span>
        <i style={{ color }} className={
            value >= 3 
            ? 'fas fa-star'
            : value >= 2.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }>

        </i>
    </span>
    <span>
        <i style={{ color }} className={
            value >= 4 
            ? 'fas fa-star'
            : value >= 3.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }>

        </i>
    </span>
    <span>
        <i style={{ color }} className={
            value >= 5 
            ? 'fas fa-star'
            : value >= 4.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }>

        </i>
    </span>
    <span>{ text && text}</span>
    {/* inline if with logical operator, if true, the variable or the text after && will be output */}
    {/* https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator */}
    </div>
  )
}

export default Rating