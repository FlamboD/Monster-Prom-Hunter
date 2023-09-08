import "../styles/CategoryScreen.scss";
import CategoryCard from "./CategoryCard";
import { ICategoryPage } from "../data/CategoryPage";
import { ISetData } from "../App";

const CategoryScreen = ({_ref, categories, setData}: {_ref: React.RefObject<HTMLDivElement>, categories: ICategoryPage, setData: ISetData}) => {
    return (
        <div ref={_ref} className="category-screen">
            {
                categories.cards?.map(category => <CategoryCard key={category.key} card={category} setData={setData}/>)
            }
        </div>
    )
}

export default CategoryScreen;