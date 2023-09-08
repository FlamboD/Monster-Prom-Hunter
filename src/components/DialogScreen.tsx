import React, { useState } from 'react'
import data, { ICharacter } from '../data/data';
import { IEventDialog } from "../data/data"
import "../styles/DialogScreen.scss"
import AccordionDialog from './AccordionDialog';
import Dialog from './Dialog';
import Choice from './Choice';

const getCharacter: (id?: number) => ICharacter | undefined = (id) => {
    return data.characters.find(_ => _.id === id);
}
const getStat: (stat?: number) => string = stat => {
    switch (stat) {
        case 0: return 'smart'
        case 1: return 'bold'
        case 2: return 'creative'
        case 3: return 'charming'
        case 4: return 'fun'
        case 5: return 'wealthy'
        default: return 'smart'
    }
}
const getEventType = (eventType: number) => {
    switch (eventType) {
        case 0: return 'Basic activity'
        case 1: return 'First encounter'
        case 2: return 'Encounter'
        case 3: return 'Special encounter'
        case 4: return 'Route'
        case 5: return 'Item route'
        case 6: return 'Lunch'
        case 7: return 'Wingmonster'
        case 8: return 'Ask to prom'
        case 9: return 'Multiplayer karma'
        case 10: return 'Buddies'
        default: return 'DEFAULT'
    }
}
const DialogScreen = ({ _ref, data }: { _ref: React.RefObject<HTMLDivElement>, data: IEventDialog }) => {
    console.log(data);
    const canLose = [6].includes(data.event.type);
    // const [canLose, setCanLose] = useState([6].includes(data.event.type));
    return (
        <div ref={_ref} className="dialog-box" style={{ display: "flex", flexDirection: "column" }}>
            {/* <div style={{position: 'fixed', top: '2rem', right: '2rem', backgroundColor: 'orchid', padding: '2rem'}}>
                <span>{getEventType(data.event.type)} event</span><br />
                <span>Only show line if important</span><br />
                <span>Part of a route</span><br />
                <span>Characters</span>
            </div> */}
            {
                data.dialog.filter(_ => _.option === null).map((_, i) => {
                    return (
                        <Dialog key={`dialog_main_${i}`} character={getCharacter(_.character)} text={_.text} />
                    );
                })
            }
            {
                (() => {
                    return data.options === undefined || data.options.length === 0 ? null : (
                        <>
                            <div
                                className="choice-box"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: '1fr 1fr',
                                    alignItems: 'stretch',
                                    width: '100%',
                                    padding: '0 2rem',
                                    gap: '2rem',
                                    boxSizing: 'border-box'
                                }}>
                                {
                                    data.options.map((_, i) => (
                                        <Choice key={`opt_${i}`} canLose={canLose} isActive={i === 0} text={_.text} stat={getStat(_.stat)} />
                                    ))
                                }
                            </div>
                            {/* TODO: Only show 2 items for some events */}
                            <div className={`accordion d-flex ${canLose ? 'mt-2' : 'mt-5'} justify-content-between`} id="dialogPaths" style={{"--item-count": `${canLose ? 4 : 7}rem`} as React.CSSProperties}>
                                {
                                    (() => {
                                        let items: Array<JSX.Element> = [];
                                        for(let iOption = 0; iOption < 2; iOption++) {
                                            for(let iSuccess = 1; iSuccess >= 0; iSuccess--) {
                                                if(canLose && iSuccess === 0) continue;
                                                items.push(
                                                    <AccordionDialog key={`dialog_${iOption}${iSuccess}`} dialog={data.dialog.filter(_ => _.option === iOption && _.success === iSuccess)} getCharacter={getCharacter} iOption={iOption} iSuccess={iSuccess}/>
                                                )
                                            }
                                        }
                                        return items;
                                    })()
                                }
                            </div>
                        </>
                    )
                })()
            }
        </div>
    )
}

export default DialogScreen;