import React, { useEffect, useRef } from 'react'
import '../styles/AccordionDialog.scss';
import { ICharacter, IDialog } from '../data/data';
import Dialog from './Dialog';
import $ from 'jquery';

const AccordionDialog = ({ iOption, iSuccess, dialog, getCharacter }: { iOption: number, iSuccess: number, dialog: Array<IDialog>, getCharacter: (_?: number) => ICharacter | undefined }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const show = (_: Event) => {
            // (_.currentTarget as HTMLElement).style.width = '1000px';
            // let collapseElements = Array.from(document.getElementsByClassName("collapse") as HTMLCollectionOf<HTMLElement>);
            // for(let i = 0; i < collapseElements.length; i++) {
            //     let accordionDialog = collapseElements[i].closest('.accordion-dialog') as HTMLElement | undefined;
            //     if(accordionDialog === undefined) continue;
            //     // collapseElements[i].style.width = _.target === collapseElements[i] ? `${document.body.clientWidth-300}px` : '';
            //     accordionDialog.style.width = _.target === collapseElements[i] ? '100%' : '';
            //     accordionDialog.style.flexGrow = _.target === collapseElements[i] ? '1' : '';
            // }
            // $(".accordion-dialog").css("width", "");
            // $(_.target as any).closest(".accordion-dialog").css("width", "100%");
            // console.log($(_.target as any).closest(".accordion-dialog"))
            // _.closest('.accordion-dialog')?.style.width = '100%';
        }
        // const shown = (_: any) => {(_.currentTarget as HTMLElement).style.width = '1000px';}
        // const element: any = ref.current;
        // element.addEventListener('show.bs.collapse', show);
        // element.addEventListener('shown.bs.collapse', shown);
        return () => {
            // element.removeEventListener('show.bs.collapse', show);
            // element.removeEventListener('shown.bs.collapse', shown);
        }
    });
    return (
        <div className="accordion-dialog d-flex mx-1" style={{maxWidth: '100%'}}>
            <div className='h-100' style={{ minWidth: '0.5rem', backgroundColor: 'gray' }}></div>
            {
                <div ref={ref} id={`collapse${iOption}${iSuccess}`} className={`accordion-collapse collapse collapse-horizontal ${(iOption === 0 && iSuccess === 1) ? 'show' : ''}`} data-bs-parent="#dialogPaths">
                    <div className='dialog-container'>
                        {
                            dialog.map((_, i) => (
                                <Dialog key={`dialog_option_${iOption}${iSuccess}${i}`} character={getCharacter(_.character)} text={_.text} />
                            ))
                        }
                    </div>
                </div>
            }
            <div className='h-100' style={{ minWidth: '0.5rem', backgroundColor: 'gray' }}></div>
        </div>
    )
}

export default AccordionDialog;