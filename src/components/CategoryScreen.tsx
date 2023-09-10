import React from "react";
import "../styles/CategoryScreen.scss";

class CategoryScreen extends React.Component<{children: JSX.Element[]}, {}> {
    render() {
        return (
            <div className="category-screen">
                {/* {
                    categories.cards?.map(category => <CategoryCard key={category.key} card={category} setData={setData}/>)
                } */}
                { this.props.children }
            </div>
        )
    }
}

export default CategoryScreen;