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
         <div className="test-sprite"><div className="ch-sprite ch_narrator"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_miranda"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_damien"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_scott"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_liam"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_polly"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_vera"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_prince"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_coach"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_blobert"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_valerie"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_slayer"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_wolfpack"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_hope"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_joy"></div></div>
         <div className="test-sprite"><div className="ch-sprite ch_faith"></div></div>

         <div className="test-sprite"><div className="ui-sprite ui_cursor-yellow"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_cursor-red"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_cursor-green"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_cursor-blue"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_cursor-black"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_cursor-white"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_textbox-lightblue"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_textbox-blue"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_textbox-lightgreen"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_textbox-green"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_textbox-lightred"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_textbox-red"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_textbox-lightyellow"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_textbox-yellow"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_textbox-salmon"></div></div>
         <div className="test-sprite"><div className="ui-sprite ui_textbox-black"></div></div>
        {
            ["smart", "bold", "creative", "fun", "charming", "wealthy"].map(_ => 
            <>
                 <div key={Math.random() * 500 * Math.random()} className="test-sprite"><div className={`st-sprite st_${_}`}></div></div>
                 <div key={Math.random() * 500 * Math.random()} className="test-sprite"><div className={`st-sprite st_not-${_}`}></div></div>
                 <div key={Math.random() * 500 * Math.random()} className="test-sprite"><div className={`st-sprite st_so-${_}`}></div></div>
                 <div key={Math.random() * 500 * Math.random()} className="test-sprite"><div className={`st-sprite st_not-so-${_}`}></div></div>
            </>
            )
        }
    </div>
  )
}

export default TestX