import React from "react";
import { ICard, ICategoryPage } from "../data/CategoryPage";
import "../styles/CategoryCard.scss"
import { ISetData } from "../App";

const CategoryCard = ({card, setData}: {card: ICard, setData: ISetData}) => {
    return (
    <div className="category-card" onClick={() => {
        // if (card.nextPage !== undefined) setData.setCategories(card.nextPage)
        }}>
        <div className="image-border">
            <div className="category-image" style={{"--img": `url(${card.img})`} as React.CSSProperties}></div>
        </div>
        <h1 className="glow">{card.title}</h1>
    </div>
    )
}

export default CategoryCard;