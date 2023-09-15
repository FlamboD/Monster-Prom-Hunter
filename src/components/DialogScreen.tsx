import React, { useEffect, useState } from 'react'
import data, { ICharacter, IDialog, IEvent, IEventDialog, IOption } from '../data/data';
import "../styles/DialogScreen.scss"
import AccordionDialog from './AccordionDialog';
import Dialog from './Dialog';
import Choice from './Choice';
import { Params, useParams } from 'react-router';
import withRouter, { IParamProps } from '../withRouter';
// import withRouter, { IParamProps } from '../withRouter';


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
const getEvent = (eventId?: number) => {
    if (eventId === undefined) return;
    return data.events.find(_ => _.id === eventId);
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

const DialogScreen = (props: IParamProps) => {
    if (props.params.id === undefined) return <h1>NOT FOUND</h1>;
    const event = getEvent(parseInt(props.params.id));
    if (event === undefined) return <></>;
    const dialog = data.dialog.filter(_ => _.eventId === event.id);
    const options = data.options.filter(_ => _.eventId === event.id);

    const canLose = [6].includes(event.type);
    return (
        <div className="dialog-box">
            {/* <div style={{position: 'fixed', top: '2rem', right: '2rem', backgroundColor: 'orchid', padding: '2rem'}}>
                <span>{getEventType(data.event.type)} event</span><br />
                <span>Only show line if important</span><br />
                <span>Part of a route</span><br />
                <span>Characters</span>
            </div> */}
            {
                dialog.filter(_ => _.option === null).map((_, i) => {
                    return (
                        <Dialog key={`dialog_main_${i}`} character={getCharacter(_.character)} text={_.text} />
                    );
                })
            }
            {
                (() => {
                    return options === undefined || options.length === 0 ? null : (
                        <>
                            <div
                                className="row align-items-stretch w-100 px-4 mt-3"
                                style={{
                                    rowGap: "5rem"
                                }}>
                                {
                                    options.map((_, i) => (
                                        <Choice key={`opt_${i}`} canLose={canLose} isActive={i === 0} text={_.text} stat={getStat(_.stat)} />
                                    ))
                                }
                            </div>
                            <div className={`accordion d-flex ${canLose ? 'mt-2' : 'mt-5'} justify-content-between`} id="dialogPaths" style={{ "--item-count": `${canLose ? 4 : 7}rem` } as React.CSSProperties}>
                                {
                                    (() => {
                                        let items: Array<JSX.Element> = [];
                                        for (let iOption = 0; iOption < 2; iOption++) {
                                            for (let iSuccess = 1; iSuccess >= 0; iSuccess--) {
                                                if (canLose && iSuccess === 0) continue;
                                                items.push(
                                                    <AccordionDialog key={`dialog_${iOption}${iSuccess}`} dialog={dialog.filter(_ => _.option === iOption && _.success === iSuccess)} getCharacter={getCharacter} iOption={iOption} iSuccess={iSuccess} nextEvent={getEvent(options[iOption][iSuccess === 1 ? "onSuccess" : "onFailure"])} />
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

export default withRouter(DialogScreen);