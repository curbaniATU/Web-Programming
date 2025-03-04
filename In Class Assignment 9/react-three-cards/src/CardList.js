import React from 'react';
import Card from './Card';

function CardList() {
    const cards = [
        {title: "Card 1", content: "First", color: "black", buttonColor: "white"},
        {title: "Card 2", content: "Second", color: "green", buttonColor: "yellow"},
        {title: "Card 3", content: "Third", color: "blue", buttonColor: "red"},
    ];

    return(
        <div className="container">
        {
            cards.map((card, index) => (
            <Card key={index}{...card} />
            ))
        }
        </div>
    );
}

export default CardList;