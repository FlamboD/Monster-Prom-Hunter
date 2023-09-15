import React, { useEffect, useRef, useState } from 'react';
import { Link, Routes, Route, useNavigate, useNavigation, useNavigationType } from "react-router-dom";
import './styles/App.scss';
import { IPage } from './components/IPage';
import DialogScreen from './components/DialogScreen';
import TestX from './components/Test';
import CategoryScreen from './components/CategoryScreen';
import GameSelector from './components/GameSelector';
import BackBtn from './components/BackBtn';
import SearchBar from './components/SearchBar';
import ListScreen from './components/ListScreen';
import CategoryCard from './components/CategoryCard';
import categoryData from './data/CategoryPage';

import data, { IEvent } from './data/data';
import CharacterScreen from './components/CharacterScreen';

interface ISprite {
  prefix: string,
  item: string
}
export interface IListData {
  sprite?: ISprite,
  text: string,
  data?: HTMLLIElement[]
}

export const characterNames = ["norah", "scott", "miranda", "damien", "violet", "faith", "valerie", "shopkeeper", "narrator", "narratorbody", "calculester", "firstcalculester", "hope", "oldhope1", "oldhope2", "oldhope3", "dmitri", "amira", "brian", "slayer", "hunter", "aaravi", "pheel", "wolfpack", "oz", "tate", "joy", "coven", "violetandtate", "couple", "fellowstudent", "dahlia", "vicky", "vera", "prince", "polly", "blobert", "evilfaith", "evilhope", "zoe", "coach", "bellanda", "leonard", "liam", "fellowstudentcap", "kale"]

function App() {
  const navigate = useNavigate()
  let gridRow = 1;
  return (
    <div 
    className="App"
    style={{
      "--character-sprites": `url(${process.env.PUBLIC_URL}/images/character-sprites.png)`,
      "--character-default": `url(${process.env.PUBLIC_URL}/images/splat.svg)`,
      "--ui-sprites": `url(${process.env.PUBLIC_URL}/images/prom/ui-sprites.png)`,
      "--stat-sprites": `url(${process.env.PUBLIC_URL}/images/prom/stat-sprites.png)`
    } as React.CSSProperties}
    >
      {/* <div style={{ gridRow: gridRow++ }}>
        <GameSelector />
      </div> */}
      <div className='mt-4' style={{ gridRow: gridRow++ }}>
        <div className="row g-2 justify-content-start navigation">
          <div className='col-3 col-sm-3 col-md-2'>
            <BackBtn 
            onClick={ () => { 
              navigate(-1);
            }} />
          </div>
          <div className='col-12 col-sm-8 justify-content-sm-center' style={{ display: 'flex', alignItems: 'center'}}>
            <SearchBar />
          </div>
        </div>
      </div>
      <div style={{ gridRow: gridRow++ }}>
        <Routes>
          <Route path='/' element={
            <CategoryScreen>
            {
              categoryData.map(category => <Link className='col-7 col-sm-3' key={category.key} to={`/${category.title.toLowerCase()}`}><CategoryCard card={category} onClick={category.onClick}/></Link>)
            }
          </CategoryScreen>
          } />
          <Route path='/characters' element={<ListScreen data={data.characters.map(_ => {return {text: _.name, sprite: {prefix: "ch", item: _.name}}})} />} />
          <Route path='/characters/:id' element={<CharacterScreen />} />
          <Route path='/endings' element={<ListScreen data={Object.entries(data.events
      .filter(
        _ => [4, 5].includes(_.type)
      ).reduce(
        (pv: {[key: string]: IEvent[]}, cv) => {
          if (cv.name === undefined) return pv;
          let name = (cv.name.match(/.*\d$/g) ? cv.name.slice(0, -1) : cv.name).toUpperCase();
          if(Object.keys(pv).includes(name)) pv[name].push(cv);
          else pv[name] = [cv];
          return pv;
        }, {}
      )).map(
        ([k, v]) => {return {text: k.toUpperCase(), sprite: {prefix: "ch", item: k}, data: v.map(_ => <li key={`ending-${_.name}`} style={{cursor: 'pointer'}}><Link to={`/event/${_.id}`}>{_.name}</Link></li> as unknown as HTMLLIElement)}}
      )} />} />
          <Route path='/items' element={<ListScreen data={data.items.map(_ => {return {text: _.name, sprite: {prefix: "ch", item: _.name}}})} />} ></Route>
          <Route path='/event/:id' element={<DialogScreen />} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
