import React from 'react'
import data, { ICharacter } from '../data/data';
import { IEventDialog } from "../data/data"
import "../styles/DialogScreen.scss"
import AccordionDialog from './AccordionDialog';
import Dialog from './Dialog';

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
const DialogScreen = ({ data }: { data: IEventDialog }) => {
    return (
        <div className="dialog-box" style={{ display: "flex", flexDirection: "column" }}>
            {
                data.dialog.filter(_ => _.option === null).map(_ => {
                    return (
                        <Dialog character={getCharacter(_.character)} text={_.text} />
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
                                    data.options.map(_ => {
                                        return (
                                            <div className="choice">
                                                <div style={{
                                                    backgroundColor: 'black',
                                                    height: '100%',
                                                    padding: '1rem',
                                                    paddingBottom: '2rem',
                                                    boxSizing: 'border-box'
                                                }}>
                                                    <span>{_.text}</span>
                                                </div>
                                                <div style={{ position: 'absolute', top: '100%', width: '100%', display: 'flex', justifyContent: 'space-around', transform: 'translateY(-2rem)' }}>
                                                    <div
                                                        style={{ width: '5rem' }}
                                                        className={_.option === 0 ? '' : 'collapsed'}
                                                        data-bs-toggle="collapse" data-bs-target={`#collapse${_.option}1`} aria-expanded={_.option === 0} aria-controls={`collapse${_.option}1`}
                                                    >
                                                        <div className={`st-sprite st_so-${getStat(_.stat)}`}></div>
                                                    </div>
                                                    <div
                                                        style={{ width: '5rem' }}
                                                        className={'collapsed'}
                                                        data-bs-toggle="collapse" data-bs-target={`#collapse${_.option}0`} aria-expanded='false' aria-controls={`collapse${_.option}0`}
                                                    >
                                                        <div className={`st-sprite st_not-so-${getStat(_.stat)}`}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="accordion d-flex mt-5 justify-content-between" id="dialogPaths">
                                {
                                    (() => {
                                        let items: Array<JSX.Element> = [];
                                        for(let iOption = 0; iOption < 2; iOption++) {
                                            for(let iSuccess = 1; iSuccess >= 0; iSuccess--) {
                                                items.push(
                                                    <AccordionDialog dialog={data.dialog.filter(_ => _.option === iOption && _.success === iSuccess)} getCharacter={getCharacter} iOption={iOption} iSuccess={iSuccess}/>
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