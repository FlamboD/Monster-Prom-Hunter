import React, { useEffect, useRef } from 'react'
import { ICharacter, IDialog } from '../data/data';
import Dialog from './Dialog';

const AccordionDialog = ({ iOption, iSuccess, dialog, getCharacter }: { iOption: number, iSuccess: number, dialog: Array<IDialog>, getCharacter: (_?: number) => ICharacter | undefined }) => {
    const ref = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     const show = (_: any) => {
    //         let collapseElements = Array.from(document.getElementsByClassName("collapse") as HTMLCollectionOf<HTMLElement>);
    //         for(let i = 0; i < collapseElements.length; i++) {
    //             let accordionDialog = collapseElements[i].closest('.accordion-dialog') as HTMLElement | undefined;
    //             if(accordionDialog === undefined) continue;
    //             // collapseElements[i].style.width = _.target === collapseElements[i] ? `${document.body.clientWidth-300}px` : '';
    //             accordionDialog.style.width = _.target === collapseElements[i] ? '100%' : '';
    //             accordionDialog.style.flexGrow = _.target === collapseElements[i] ? '1' : '';
    //         }
    //     }
    //     const shown = (_: any) => {_.target.closest('.accordion-dialog').style.width = "";}
    //     const element: any = ref.current;
    //     element.addEventListener('show.bs.collapse', show);
    //     element.addEventListener('shown.bs.collapse', shown);
    //     return () => {
    //         element.removeEventListener('show.bs.collapse', show);
    //         element.removeEventListener('shown.bs.collapse', shown);
    //     }
    // });
    return (
        <div className="accordion-dialog d-flex mx-1" style={{maxWidth: '100%'}}>
            <div className='h-100' style={{ minWidth: '0.5rem', backgroundColor: 'gray' }}></div>
            {
                <div ref={ref} id={`collapse${iOption}${iSuccess}`} className={`accordion-collapse collapse collapse-horizontal ${(iOption === 0 && iSuccess === 1) ? 'show' : ''}`} data-bs-parent="#dialogPaths">
                    {
                        (() => {
                            let optionDialogs: Array<JSX.Element> = []
                            for (let iOption = 0; iOption < 2; iOption++) {
                                for (let iSuccess = 1; iSuccess >= 0; iSuccess--) {
                                    dialog.forEach(_ => {
                                        // let character: ICharacter | undefined = getCharacter(_.character);
                                        optionDialogs.push(
                                            <Dialog character={getCharacter(_.character)} text={_.text} />
                                            // <div className="dialog" style={{ textAlign: 'start', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'flex-start' }}>
                                            //     <div style={{ width: '5rem' }}>
                                            //         <div
                                            //             className={`ch-sprite ch_${character?.name?.toLowerCase()}`}
                                            //         ></div>
                                            //     </div>
                                            //     <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            //         <span>
                                            //             {character?.name}
                                            //         </span>
                                            //         <div
                                            //             className="textbox"
                                            //         >{_.text || "..."}</div>
                                            //     </div>
                                            // </div>
                                        );
                                    })
                                }
                            }
                            return optionDialogs;
                        })()
                    }
                </div>
            }
            <div className='h-100' style={{ minWidth: '0.5rem', backgroundColor: 'gray' }}></div>
        </div>
    )
}

export default AccordionDialog;