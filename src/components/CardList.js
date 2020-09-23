import React from 'react';
import Card from './Card.js'

const CardList = (props) => {
    const cardArray = props.robots.map((robot) => {
        return <Card key={robot.id} {...robot} />
    })
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;