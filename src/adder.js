import React from 'react'





const Addmovie = ({addmovie=()=>{}}) => {
    return (
        <div className='movie-add-container'>
            <p className='add' onClick={addmovie}>+</p>
        </div>
    )
}


export default Addmovie;    