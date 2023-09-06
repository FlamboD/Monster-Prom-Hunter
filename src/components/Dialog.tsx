import React from 'react'
import { ICharacter } from '../data/data'

const Dialog = ({character, text}: {character?: ICharacter, text?: string}) => {
    console.log(character);
  return (
    <div className="dialog" style={{ textAlign: 'start', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: character === undefined ? 'center' : 'flex-start' }}>
        {
            (() => {
                return character === undefined ? (<></>) : (
                    <div style={{ width: '5rem' }}>
                        <div
                            className={`ch-sprite ch_${character?.name?.toLowerCase()}`}
                        ></div>
                    </div>
                )
            })()
        }
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 'calc(100% - 5rem)' }}>
            {
                (() => {
                    return character === undefined ? (<></>) : (
                        <span>
                            {character?.name}
                        </span>
                    )
                })()
            }
            <div
                className="textbox"
            >{text || "..."}</div>
        </div>
    </div>
  )
}

export default Dialog