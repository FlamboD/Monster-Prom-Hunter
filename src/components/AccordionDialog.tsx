import React, { useEffect, useRef } from 'react'
import '../styles/AccordionDialog.scss';
import { ICharacter, IDialog, IEvent, IEventDialog } from '../data/data';
import Dialog from './Dialog';
import { Link } from 'react-router-dom';

const AccordionDialog = ({ iOption, iSuccess, dialog, nextEvent, getCharacter, setEventId }: { iOption: number, iSuccess: number, dialog: Array<IDialog>, nextEvent?: IEvent, getCharacter: (_?: number) => ICharacter | undefined, setEventId?: (_?: number) => void}) => {
    return (
        <div className="accordion-dialog d-flex mx-1" style={{maxWidth: '100%'}}>
            <div className='h-100' style={{ minWidth: '0.5rem', backgroundColor: 'gray' }}></div>
                <div id={`collapse${iOption}${iSuccess}`} className={`accordion-collapse collapse collapse-horizontal ${(iOption === 0 && iSuccess === 1) ? 'show' : ''}`} data-bs-parent="#dialogPaths">
                    <div className='dialog-container'>
                        {
                            dialog.map((_, i) => (
                                <Dialog key={`dialog_option_${iOption}${iSuccess}${i}`} character={getCharacter(_.character)} text={_.text} />
                            ))
                        }
                        {
                            (() => {
                                if(nextEvent === undefined) return;
                                return (
                                    <Link to={`/event/${nextEvent.id}`}>
                                        <div className='mx-2 mt-2 px-4 py-2' style={{backgroundColor: "#FE9", cursor: 'pointer'}}>
                                            <span>
                                                Next event: {nextEvent.name} ({nextEvent.id})
                                            </span>
                                        </div>
                                    </Link>
                                )
                            })()
                        }
                    </div>
                </div>
            <div className='h-100' style={{ minWidth: '0.5rem', backgroundColor: 'gray' }}></div>
        </div>
    )
}

export default AccordionDialog;