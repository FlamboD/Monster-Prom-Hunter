import React from "react";
import { ICard } from "../data/CategoryPage";
import "../styles/CategoryCard.scss"

interface ICategoryCardProps {
    card: ICard,
    onClick?: () => void
}
export interface ICategoryCard extends JSX.Element { 
    props: ICategoryCardProps
}

const CategoryCard: (_: ICategoryCardProps) => ICategoryCard = ({card, onClick}: ICategoryCardProps) => {
    return (
    <div className="category-card" onClick={onClick}>
        <div className="image-border">
            <div className="category-image" style={{"--img": `url(${card.img})`} as React.CSSProperties}></div>
        </div>
        <h1 className="glow">{card.title}</h1>
    </div>
    )
}

export default CategoryCard;