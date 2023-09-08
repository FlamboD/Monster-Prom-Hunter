import React from 'react'
import '../styles/ListScreen.scss'
import { IListData } from '../App'

const ListScreen = ({_ref, data}: {_ref: React.RefObject<HTMLDivElement>, data: Array<IListData>}) => {
  return <div ref={_ref} style={{display: 'flex', flexDirection: 'column'}}>
      {
        data.map(_ => {
        return (
            <div className='list-item' style={{display: 'flex', alignContent: 'center'}}>
                {
                    (() => {
                        return _.sprite === undefined ? (<></>) : (
                            <div style={{width: '2rem'}}>
                                <div className={`${_.sprite.prefix}-sprite ${_.sprite.prefix}_${_.sprite.item}`}></div>
                            </div>
                        )
                    })()
                }
                <span>{_.text}</span>
            </div>
        )
      })
    }
  </div>
}

export default ListScreen