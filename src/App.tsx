import React, { useEffect, useRef, useState } from 'react';
import './styles/App.scss';
import { IPage } from './components/IPage';
import DialogScreen from './components/DialogScreen';
import TestX from './components/Test';
import CategoryScreen from './components/CategoryScreen';
import GameSelector from './components/GameSelector';
import BackBtn from './components/BackBtn';
import SearchBar from './components/SearchBar';
import ListScreen from './components/ListScreen';
import $ from 'jquery';
import CategoryCard from './components/CategoryCard';
import { useHistory } from './History';
import categoryData from './data/CategoryPage';

import data, { IEvent, IEventDialog } from './data/data';

interface ISprite {
  prefix: string,
  item: string
}
export interface IListData {
  sprite?: ISprite,
  text: string
}

export interface ISetData {
  setCategories: (_: IPage) => void,
  setDialogData: (_: IEventDialog) => void,
  setListData: (_: Array<IListData>) => void
}

function App() {
  const history = useHistory<any>(useRef(null));
  // const previous = useRef<JSX.Element>(null);
  const [categories, setCategories] = useState(categoryData);
  useEffect(() => { setCategories(categoryData); }, []);
  // const setCategoryPage = (page?: IPage) => { if (page) setCategories(page) };
  const [page, setPage] = useState<JSX.Element>();
  const [dialogData, setDialogData] = useState<IEventDialog>();
  const [listData, setListData] = useState<Array<IListData>>();

  useEffect(() => {
    console.log(data.events.filter(_ => [4, 5].includes(_.type)).map(_ => {_.name = _.name?.replace(/^(\w+)\d+$/g, "$1"); return _;}));
    categoryData[0].onClick = () => setListData(data.characters.map(_ => {return {text: _.name, sprite: {prefix: "ch", item: _.name}}}));
    categoryData[1].onClick = () => setListData(data.events
      .filter(
        _ => [4, 5].includes(_.type)
      ).map(
        _ => {_.name = _.name?.replace(/^(\w+)\d+$/g, "$1").toUpperCase(); return _;})
      .filter(
        (v, i, a) => a.findIndex(
          (_v, _i, _a) => v.name === _a[_i].name, v
        ) === i
      ).map(_ => {return {text: _.name as string, sprite: {prefix: "ch", item: _.name as string}}}));
    categoryData[2].onClick = () => setListData(data.items.map(_ => {return {text: _.name, sprite: {prefix: "ch", item: _.name}}}));
  })

  useEffect(() => {
    if(categories !== undefined) {
      setPage((
        <CategoryScreen ref={history.ref} >
          {
            categoryData.map(category => <CategoryCard key={category.key} card={category} onClick={category.onClick}/>)
          }
        </CategoryScreen>
      ));
    }
  }, [categories]);
  useEffect(() => {
    if(dialogData !== undefined) {
      setPage(<DialogScreen ref={history.ref} data={dialogData} />);
      $(".choice-trigger").addClass("collapsed");
      $(".choice-bg")?.[0]?.click();
    }
  }, [dialogData]);
  useEffect(() => {
    if(listData !== undefined) setPage(<ListScreen ref={history.ref} data={listData} />)
  }, [listData]);
  


  let gridRow = 1;
  return (
    <div 
    className="App"
    style={{
      "--character-sprites": `url(${process.env.PUBLIC_URL}/images/prom/character-sprites.png)`,
      "--character-default": `url(${process.env.PUBLIC_URL}/images/splat.svg)`,
      "--ui-sprites": `url(${process.env.PUBLIC_URL}/images/prom/ui-sprites.png)`,
      "--stat-sprites": `url(${process.env.PUBLIC_URL}/images/prom/stat-sprites.png)`
    } as React.CSSProperties}
    >
      {/* <div style={{ gridRow: gridRow++ }}>
        <GameSelector />
      </div> */}
      <div className='mt-4' style={{ gridRow: gridRow++ }}>
        <div className="navigation d-grid">
          <div></div>
          <BackBtn history={history} onClick={() => { setPage(history.current) }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SearchBar setDialogData={setDialogData} />
          </div>
        </div>
      </div>
      <div style={{ gridRow: gridRow++ }}>
        {
          page
        }
      </div>
    </div>
  );
}

export default App;
