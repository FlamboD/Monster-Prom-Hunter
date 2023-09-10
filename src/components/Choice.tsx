import React, { useCallback, useEffect, useRef } from 'react';
import '../styles/Choice.scss';
import $ from 'jquery';
import { Collapse } from 'react-bootstrap';

const Choice = ({ isActive, text, canLose=false, stat }: { isActive: boolean, text: string, canLose: boolean, stat?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log("Register box click")
        const el: HTMLDivElement | null = ref.current;
        const onClick = (_: Event) => {
            console.log("CHOICE BOX CLICK")
            if ($(_.target as any).closest(".choice-trigger").length !== 0) return;
            if (el?.classList.contains("selected")) return;
            $(".choice").toggleClass("selected");

            let sprite = $(el as any).find('.choice-trigger:first-of-type');
            console.log(sprite);
            if (sprite.hasClass("collapsed")) sprite[0].click();
            // sprite[0]?.click();
        }
        el?.addEventListener('click', onClick);

        return () => { el?.removeEventListener('click', onClick); }
    });
    useEffect(() => {
        console.log("Register choice trigger");
        const onClick = (_: Event) => {
            console.log("CHOICE TRIGGER")
            const target = _.currentTarget as HTMLElement;
            if (!target.closest(".choice")?.classList.contains("selected")) $(".choice").toggleClass("selected");
            // console.log($(".choice-trigger"));
            // $(".choice-trigger").removeClass("collapsed");
            // console.log(_.target);
            // $(_.target as any).addClass("collapsed");
        }
        $(".choice-trigger").each((i, _) => _.addEventListener('click', onClick));
        return () => {
            $(".choice-trigger").each((i, _) => _.removeEventListener('click', onClick));
        }
    });
    return (
        <div ref={ref} className={`choice ${isActive ? 'selected' : ''}`}>
            {/* TODO: Make unselected option white background w black border/outline */}
            <div className="choice-bg">
                <span>{text}</span>
            </div>
            {/* TODO: Hide stat sprites for some events */}
            {/* Reset selected sprite to first when new dialog is selected */}
            <div className={"stat-btns"} style={{ position: 'absolute', top: '100%', width: '100%', display: canLose ? 'none' : 'flex', justifyContent: 'space-around', transform: 'translateY(-2rem)' }}>
                <div
                    style={{ width: '5rem' }}
                    className={`choice-trigger ${isActive ? '' : 'collapsed'}`}
                    data-bs-toggle="collapse" data-bs-target={`#collapse${isActive ? 0 : 1}1`} aria-expanded={isActive} aria-controls={`collapse${isActive ? 0 : 1}1`}
                >
                    <div className={`st-sprite st_so-${stat}`}></div>
                </div>
                <div
                    style={{ width: '5rem' }}
                    className={'choice-trigger collapsed'}
                    data-bs-toggle="collapse" data-bs-target={`#collapse${isActive ? 0 : 1}0`} aria-expanded='false' aria-controls={`collapse${isActive ? 0 : 1}0`}
                >
                    <div className={`st-sprite st_not-so-${stat}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Choice