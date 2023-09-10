// import { IPage } from "../components/IPage"

// export interface ICategoryPage extends IPage {
//   cards: Array<ICard>
// }

export interface ICard {
  key: React.Key,
  title: String,
  img?: String,
  onClick?: () => void
}

const categoryData: ICard[] = [
  {
    key: "C_MP_CHARACTERS",
    title: "Characters",
    img: process.env.PUBLIC_URL + "/images/prom/class_photo.png",
    onClick: () => {}
  },
  {
    key: "C_MP_ENDINGS",
    title: "Endings",
    img: process.env.PUBLIC_URL + "/images/prom/coke.jpg",
    onClick: () => {}
  },
  {
    key: "C_MP_ITEMS",
    title: "Items",
    img: process.env.PUBLIC_URL + "/images/gift.png",
    onClick: () => {}
  }
]


export default categoryData;