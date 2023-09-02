import React from 'react'
import "../styles/Test.scss";

const TestX = () => {
  return (
    <div style={{
            display: 'flex', 
            flexWrap: 'wrap', 
            "--character-sprites": `url(${process.env.PUBLIC_URL}/images/prom/character-sprites.png)`, 
            "--img": `url(${process.env.PUBLIC_URL}/images/prom/ui-sprites.png)`,
            "--stat-sprites": `url(${process.env.PUBLIC_URL}/images/prom/stat-sprites.png)`
        } as React.CSSProperties}>
        <div className="ch-sprite ch_narrator"></div>
        <div className="ch-sprite ch_miranda"></div>
        <div className="ch-sprite ch_damien"></div>
        <div className="ch-sprite ch_scott"></div>
        <div className="ch-sprite ch_liam"></div>
        <div className="ch-sprite ch_polly"></div>
        <div className="ch-sprite ch_vera"></div>
        <div className="ch-sprite ch_prince"></div>
        <div className="ch-sprite ch_coach"></div>
        <div className="ch-sprite ch_blobert"></div>
        <div className="ch-sprite ch_valerie"></div>
        <div className="ch-sprite ch_slayer"></div>
        <div className="ch-sprite ch_wolfpack"></div>
        <div className="ch-sprite ch_hope"></div>
        <div className="ch-sprite ch_joy"></div>
        <div className="ch-sprite ch_faith"></div>

        <div className="ui-sprite ui_cursor-yellow"></div>
        <div className="ui-sprite ui_cursor-red"></div>
        <div className="ui-sprite ui_cursor-green"></div>
        <div className="ui-sprite ui_cursor-blue"></div>
        <div className="ui-sprite ui_cursor-black"></div>
        <div className="ui-sprite ui_cursor-white"></div>
        <div className="ui-sprite ui_textbox-lightblue"></div>
        <div className="ui-sprite ui_textbox-blue"></div>
        <div className="ui-sprite ui_textbox-lightgreen"></div>
        <div className="ui-sprite ui_textbox-green"></div>
        <div className="ui-sprite ui_textbox-lightred"></div>
        <div className="ui-sprite ui_textbox-red"></div>
        <div className="ui-sprite ui_textbox-lightyellow"></div>
        <div className="ui-sprite ui_textbox-yellow"></div>
        <div className="ui-sprite ui_textbox-salmon"></div>
        <div className="ui-sprite ui_textbox-black"></div>
        {
            ["smart", "bold", "creative", "fun", "charming", "wealthy"].map(_ => 
            <>
                <div className={`st-sprite st_${_}`}></div>
                <div className={`st-sprite st_not-${_}`}></div>
                <div className={`st-sprite st_so-${_}`}></div>
                <div className={`st-sprite st_not-so-${_}`}></div>
            </>
            )
        }
    </div>
  )
}

export default TestX