import "../styles/CategoryScreen.scss";
import CategoryCard from "./CategoryCard";
import { ICategoryPage } from "../data/CategoryPage";

const CategoryScreen = ({categories, setPage}: {categories: ICategoryPage, setPage: (_?: ICategoryPage) => void}) => {
    return (
        <>
            <div className="category-screen">
                {
                    categories.cards?.map(category => <CategoryCard key={category.key} card={category} setPage={setPage}/>)
                }
            </div>
        </>
    )
}

export default CategoryScreen;