import React from 'react';
import './Card.scss'

const Card = ({ monster }) => {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="robot" />
            <h1 className='name'>{monster.firstName} {monster.lastName}</h1>
            <p className='email'>{monster.email}</p>
        </div>
    )
}

export default Card;