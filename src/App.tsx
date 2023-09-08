import React, { useEffect, useRef, useState } from 'react';
import { IPage } from './components/IPage';
import categoryPage, { ICategoryPage } from './data/CategoryPage';
import DialogScreen from './components/DialogScreen';
import TestX from './components/Test';
import CategoryScreen from './components/CategoryScreen';
import GameSelector from './components/GameSelector';
import BackBtn from './components/BackBtn';
import SearchBar from './components/SearchBar';
import './styles/App.scss';
import { IEventDialog } from './data/data';
import ListScreen from './components/ListScreen';
import $ from 'jquery';

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
  const history = useRef<HTMLDivElement>(null);
  // const previous = useRef<JSX.Element>(null);
  const [categories, setCategories] = useState<IPage>(categoryPage);
  useEffect(() => { setCategories(categoryPage); }, []);
  // const setCategoryPage = (page?: IPage) => { if (page) setCategories(page) };
  const [page, setPage] = useState<JSX.Element>();
  const [dialogData, setDialogData] = useState<IEventDialog>();
  const [listData, setListData] = useState<Array<IListData>>();

  useEffect(() => {
    if(categories !== undefined) {
      setPage(<CategoryScreen _ref={history} key={categories.key} categories={categories as ICategoryPage} setData={{ setCategories, setDialogData, setListData }} />);
    }
  }, [categories]);
  useEffect(() => {
    if(dialogData !== undefined) {
      setPage(<DialogScreen _ref={history} data={dialogData} />);
      $(".choice-trigger").addClass("collapsed");
      $(".choice-bg")?.[0].click();
    }
  }, [dialogData]);
  useEffect(() => {
    if(listData !== undefined) setPage(<ListScreen _ref={history} data={listData} />)
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
          {/* <BackBtn onClick={() => { setPage(history.current) }} /> */}
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
