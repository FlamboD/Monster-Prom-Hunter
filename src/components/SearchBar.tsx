import React, { useEffect, useState } from 'react';
import '../styles/SearchBar.scss';
import data, { IDialog, IItem, IOption, ICharacter } from '../data/data';
import SearchCategory from './SearchCategory';

const getCharacter: (id?: number) => ICharacter | undefined = (id) => {
  return data.characters.find(_ => _.id === id);
}
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const [searchCharacters, setSearchCharacters] = useState<Array<ICharacter>>([]);
  const [searchItems, setSearchItems] = useState<Array<IItem>>([]);
  const [searchDialog, setSearchDialog] = useState<Array<IDialog>>([]);
  const [searchChoices, setSearchChoices] = useState<Array<IOption>>([]);

  useEffect(() => {
    if(!searchText.trim()) {
      setSearchCharacters([]);
      setSearchItems([]);
      setSearchDialog([]);
      setSearchChoices([]);
      return;
    };
    setSearchCharacters(data.characters.filter(_ => _.name.toLowerCase().includes(searchText.toLowerCase())));
    // setSearchCharacters(data.characters.filter(_ => _.name.toLowerCase().includes(searchText.toLowerCase())));
    setSearchDialog(data.dialog.filter(_ => _.text && _.text.toLowerCase().includes(searchText.toLowerCase())));
    setSearchChoices(data.options.filter(_ => _.text && _.text.toLowerCase().includes(searchText.toLowerCase())));
  }, [searchText]);
  return (
    <div 
      id="search" 
      className='nav-sprite ui_textbox-black'
      style={{
        "--img": `url(${process.env.PUBLIC_URL}/images/prom/ui-sprites.png)`,
        "--character-sprites": `url(${process.env.PUBLIC_URL}/images/prom/character-sprites.png)`,
        position: 'relative'
      } as React.CSSProperties }
    >
      <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="" />
      <input 
        type="search"
        style={{
          "--cross": `url(${process.env.PUBLIC_URL}/images/x.svg)`
        } as React.CSSProperties}
        onChange={(e) => setSearchText(e.currentTarget.value)}
      />
      <div id='searchResults'>
        <SearchCategory title='Characters' options={searchCharacters.map(_ => <div style={{display: 'flex', alignItems: 'center'}}><div className={`ch-sprite ch_${_.name.toLowerCase()}`}></div><span>{_.name}</span></div>)} />
        <SearchCategory title='Items' options={[<></>]} />
        <SearchCategory title='Conversations' options={searchDialog.map(_ => <div style={{display: 'flex', alignItems: 'center'}}><div className={`ch-sprite ch_${getCharacter(_.character)?.name?.toLowerCase()}`}></div><span>{_.text}</span></div>)} />
        {/* {searchDialog.map(_ => _.text).join("|")} */}
      </div>
    </div>
  )
}

export default SearchBar