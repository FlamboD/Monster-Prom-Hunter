import './App.scss';
import GameSelector from './components/GameSelector';
import CategoryScreen from './components/CategoryScreen';
import { useEffect, useState } from 'react'
import categoryPage, { ICategoryPage } from './data/CategoryPage';
import { IPage } from './components/IPage';
import DialogScreen from './components/DialogScreen';
import BackBtn from './components/BackBtn';
import SearchBar from './components/SearchBar';

import TestX from './components/Test';

function App() {
  const [categories, setCategories] = useState<IPage>(categoryPage);
  useEffect(() => { setCategories(categoryPage); }, []);
  const setCategoryPage = (page?: IPage) => { if (page) setCategories(page) };
  const [page, setPage] = useState<JSX.Element>()
  useEffect(() => {
    // setPage(<TestX />);
    // setPage(<DialogScreen />);
    setPage(<CategoryScreen key={categories.key} categories={categories as ICategoryPage} setPage={setCategoryPage} />);
  }, [categories]);

  return (
    <div className="App">
      <div style={{ gridRow: 1 }}>
        <GameSelector />
      </div>
      <div style={{ gridRow: 2}}>
        <BackBtn onClick={() => { setCategoryPage(categories.prev) }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SearchBar />
        </div>
      </div>
      <div style={{ gridRow: 3 }}>
        {
          page
        }
        
      </div>
    </div>
  );
}

export default App;
