import React from 'react';
import '../styles/CharacterScreen.scss';
import withRouter, { IParamProps } from '../withRouter'
import data, { IDialog } from '../data/data'

function getCharacterById(id?: number) {
    if (id === undefined || isNaN(id)) return;
    return data.characters.find(_ => _.id === id);
}
function getCharacterByName(name?: string) {
    if (name === undefined) return;
    return data.characters.find(_ => _.name.toLowerCase() === name.toLowerCase());
}
const CharacterScreen = (props: IParamProps) => {
    const character = getCharacterById(parseInt(props.params.id ?? '')) ?? getCharacterByName(props.params.id);
    if (character === undefined) return <></>;
    const charDialogs = data.dialog.filter(_ => _.character === character.id).reduce(
        (pv: { [key: string]: IDialog[] }, cv) => {
            //   if (cv.name === undefined) return pv;
            let eid = cv.eventId.toString();
            if (Object.keys(pv).includes(eid)) pv[eid].push(cv);
            else pv[eid] = [cv];
            return pv;
        }, {});
    return (
        <div id="characterScreen">
            <div className="d-flex align-items-center">
                <div className="character-sprite mx-3" style={{ width: '5rem' }}>
                    <div className={`ch-sprite ch_${character.name.toLowerCase()}`}></div>
                </div>
                <h1>{character.name}</h1>
            </div>
            <h2>Stats</h2>
            #icon #stat <br />
            #shortGame #longGame

            <h2>Events</h2>
            <div className="collapsible d-flex flex-column">
                {
                    Object.keys(charDialogs).map(_ => {
                        return (
                            <div className="collapse-item">
                                <span className='collapsed' data-bs-toggle="collapse" data-bs-target={`#ev_${_}`} aria-expanded="false" aria-controls={`#ev_${_}`}>{_}: {data.events.find(__ => __.id.toString() === _)?.name}</span>
                                <div id={`ev_${_}`} className='collapse'>
                                    {
                                        charDialogs[_].map(__ => {
                                            return (
                                                <div className="collapse-item"><span>{__.text}</span></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='d-flex flex-column'>
                <span>Hearts</span>
                #choice
            </div>
        </div>
    )
}

export default withRouter(CharacterScreen)