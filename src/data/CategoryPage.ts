import { IPage } from "../components/IPage"

export interface ICategoryPage extends IPage {
  cards: Array<ICard>
}

export interface ICard {
  key: React.Key,
  title: String,
  img: String
}

const page: ICategoryPage =
{
  key: "P_MP_MAIN",
  prev: undefined,
  cards: [
    {
      key: "C_MP_CHARACTERS",
      title: "Characters",
      img: process.env.PUBLIC_URL + "/images/prom/class_photo.png",
      // nextPage: {
      //   key: "P_MP_CHARACTERS",
      //   prev: undefined,
      //   cards: [
      //     {
      //       key: "C_MP_MAIN",
      //       title: "Main Characters",
      //       img: process.env.PUBLIC_URL + "/images/prom/polaroid7.png"
      //     },
      //     {
      //       key: "C_MP_NPCS",
      //       title: "NPCs",
      //       img: process.env.PUBLIC_URL + "/images/prom/class_photo.png"
      //     },
      //     {
      //       key: "C_MP_PLAYERS",
      //       title: "Player Characters",
      //       img: process.env.PUBLIC_URL + "/images/prom/class_photo.png"
      //     },
      //   ]
      // }
    },
    {
      key: "C_MP_ENDINGS",
      title: "Endings",
      img: process.env.PUBLIC_URL + "/images/prom/coke.jpg"
    },
    {
      key: "C_MP_ITEMS",
      title: "Items",
      img: process.env.PUBLIC_URL + "/images/gift.png"
    }
  ]
}

// const setPrev = (p: ICategoryPage) => {
//   p.cards.forEach((c: ICard) => {
//     if(c.nextPage) {
//       setPrev(c.nextPage);
//       c.nextPage.prev = p;
//     }
//   })
// }
// setPrev(page);


export default page;