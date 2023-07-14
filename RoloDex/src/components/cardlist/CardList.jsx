import React, { Component } from 'react';
import Card from '../card/Card';

import './CardList.scss';

const CardList = ({filteredMonsters}) => {
    return (
        <div className='card-container'>
            {
                filteredMonsters.map((monster) => {
                    return (
                        <Card key={monster.id} monster={monster} />
                    )
                })
            }
        </div>
    )
}

export default CardList;