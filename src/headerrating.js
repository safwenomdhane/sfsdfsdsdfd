import React, {Component} from 'react'
import Rate from './rate'





const Rating=({onchange,count})=>{
    return (
        <div className='ratingfilter'>
            <span className='rating'>
                <p className='minimumrating'>Minimum rating</p>
                <p className='stars'><Rate count={count}
                onChangeRating={(newRating) =>{
                onchange(newRating)
            }}/></p>
            </span>
      </div>
    )
}

export default Rating; 