import React from "react";
import { ICard, ICategoryPage } from "../data/CategoryPage";
import "../styles/CategoryCard.scss"

const CategoryCard = ({card, setPage}: {card: ICard, setPage: (_?: ICategoryPage) => void}) => {
    return (
    <div className="category-card" onClick={() => setPage(card.nextPage)}>
        <div className="image-border">
            <div className="category-image" style={{"--img": `url(${card.img})`} as React.CSSProperties}></div>
        </div>
        <h1>{card.title}</h1>
    </div>
    )
}

export default CategoryCard;