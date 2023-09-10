import React from 'react'
import '../styles/ListScreen.scss'
import { IListData } from '../App'

class ListScreen extends React.Component<{ data: Array<IListData> }> {
    render() {
        return <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
                this.props.data.map((_, i) => {
                    return (
                        <div key={`li-${i}`} className='list-item' style={{ display: 'flex', alignContent: 'center' }}>
                            {
                                (() => {
                                    return _.sprite === undefined ? (<></>) : (
                                        <div style={{ width: '2rem' }}>
                                            <div className={`${_.sprite.prefix}-sprite ${_.sprite.prefix}_${_.sprite.item.toLowerCase()}`}></div>
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
}

export default ListScreen