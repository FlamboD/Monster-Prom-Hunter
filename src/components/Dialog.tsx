import React from 'react'
import '../styles/Dialog.scss';
import { ICharacter } from '../data/data'

const Dialog = ({character, text}: {character?: ICharacter, text?: string}) => {
  return (
    <div className="dialog my-1" style={{ justifyContent: character === undefined ? 'center' : 'flex-start' }}>
        {
            (() => {
                return character === undefined ? (<></>) : (
                    <div className='sprite'>
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
                        <span className='speaker-name'>
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