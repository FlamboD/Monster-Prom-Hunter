import React from "react";
import "../styles/CategoryScreen.scss";

class CategoryScreen extends React.Component<{children: JSX.Element[]}, {}> {
    render() {
        return (
            // Class name: category-screen
            <div className="category-screen row g-2 justify-content-md-center">
                {/* {
                    categories.cards?.map(category => <CategoryCard key={category.key} card={category} setData={setData}/>)
                } */}
                { this.props.children }
            </div>
        )
    }
}

export default CategoryScreen;