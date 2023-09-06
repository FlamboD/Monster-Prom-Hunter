import React, { useEffect, useState } from 'react';
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

function App() {
  const [categories, setCategories] = useState<IPage>(categoryPage);
  useEffect(() => { setCategories(categoryPage); }, []);
  const setCategoryPage = (page?: IPage) => { if (page) setCategories(page) };
  const [page, setPage] = useState<JSX.Element>();
  const [dialogData, setDialogData] = useState<IEventDialog>();
  useEffect(() => {
    setPage(<TestX />);
    // setPage(<DialogScreen />);
    // setPage(<CategoryScreen key={categories.key} categories={categories as ICategoryPage} setPage={setCategoryPage} />);
  }, [categories]);
  useEffect(() => {
    if(dialogData) setPage(<DialogScreen data={dialogData as IEventDialog} />)
  }, [dialogData])
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
          <BackBtn onClick={() => { setCategoryPage(categories.prev) }} />
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
