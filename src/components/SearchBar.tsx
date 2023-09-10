import React, { useEffect, useRef, useState } from 'react';
import '../styles/SearchBar.scss';
import data, { IDialog, IItem, IOption, ICharacter, IEventDialog, IEvent } from '../data/data';
import SearchCategory from './SearchCategory';

const getCharacter: (id?: number) => ICharacter | undefined = (id) => {
  return data.characters.find(_ => _.id === id);
}

const getEventDialog: (_: number) => IEventDialog = (eventId: number) => {
  return {
    event: data.events.find(_ => _.id === eventId),
    dialog: data.dialog.filter(_ => _.eventId === eventId),
    options: data.options.filter(_ => _.eventId === eventId) || undefined
  } as IEventDialog;
}
const SearchBar = ({ setDialogData }: { setDialogData: (_: IEventDialog) => void }) => {
  const [searchText, setSearchText] = useState("");

  const [searchCharacters, setSearchCharacters] = useState<Array<ICharacter>>([]);
  const [searchItems, setSearchItems] = useState<Array<IItem>>([]);
  const [searchEvents, setSearchEvents] = useState<Array<IEvent>>([]);
  const [searchDialog, setSearchDialog] = useState<Array<IDialog>>([]);
  const [searchChoices, setSearchChoices] = useState<Array<IOption>>([]);

  const searchResultsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if(!searchText.trim()) {
      setSearchCharacters([]);
      setSearchItems([]);
      setSearchEvents([]);
      setSearchDialog([]);
      setSearchChoices([]);
      return;
    };
    
    setSearchCharacters(data.characters.filter(_ => _.name.toLowerCase().includes(searchText.toLowerCase())));
    // setSearchCharacters(data.characters.filter(_ => _.name.toLowerCase().includes(searchText.toLowerCase())));
    setSearchEvents(data.events.filter(_ => (_.name && _.name.toLowerCase().includes(searchText.toLowerCase())) || _.id.toString().includes(searchText)));
    setSearchDialog(data.dialog.filter(_ => _.text && _.text.toLowerCase().includes(searchText.toLowerCase())));
    setSearchChoices(data.options.filter(_ => _.text && _.text.toLowerCase().includes(searchText.toLowerCase())));
  }, [searchText]);
  return (
    <div id='search' className='w-100'>
      <div 
        className='ui-sprite ui_textbox-black'
        style={{position: 'absolute'} as React.CSSProperties}
      >
      </div>
        <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="" />
        <input 
          type="search"
          style={{
            "--cross": `url(${process.env.PUBLIC_URL}/images/x.svg)`
          } as React.CSSProperties}
          onChange={(e) => setSearchText(e.currentTarget.value)}
        />
        <div ref={searchResultsRef as React.MutableRefObject<HTMLDivElement>} id='searchResults'>
          {/* <div key={`char_${_.id}`} style={{display: 'flex', alignItems: 'center'}}><div className={`ch-sprite ch_${_.name.toLowerCase()}`}></div><span>{_.name}</span></div>) */}
          <SearchCategory title='Characters' options={searchCharacters.map(_ => {return {key:`char_${_.id}`, className:`ch-sprite ch_${_.name.toLowerCase()}`, text:_.name}} )} />
          <SearchCategory title='Items' options={[]} />
          {/* <div key={`txt_${_.eventId}-${i}`} style={{display: 'flex', alignItems: 'center'}}><div className={`ch-sprite ch_${getCharacter(_.character)?.name?.toLowerCase()}`}></div><span>{_.text}</span></div> */}
          <SearchCategory title='Events' options={searchEvents.map((_, i) => {return {key:`event_${_.id}-${i}`, setDialogData:() => setDialogData(getEventDialog(_.id)), className:``, text:_.name as string}} )} />
          <SearchCategory title='Choices' options={searchChoices.map((_, i) => {return {key:`choice_${_.eventId}-${i}`, setDialogData:() => setDialogData(getEventDialog(_.eventId)), className:``, text:_.text || "..."}} )} />
          <SearchCategory title='Conversations' options={searchDialog.map((_, i) => {return {key:`txt_${_.eventId}-${i}`, setDialogData:() => setDialogData(getEventDialog(_.eventId)), className:`ch-sprite ch_${getCharacter(_.character)?.name?.toLowerCase()}`, text:_.text || "..." }} )} />
          {/* {searchDialog.map(_ => _.text).join("|")} */}
        </div>
    </div>
  )
}

export default SearchBar