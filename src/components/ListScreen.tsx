import React, { ReactNode } from 'react'
import '../styles/ListScreen.scss'
import { IListData } from '../App'

class ListScreen extends React.Component<{ data: Array<IListData> }> {
    render() {
        return <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
                this.props.data.map((_, i) => {
                    return (
                        <div key={`li-${i}`} className='list-item d-flex flex-column align-content-center m-1 p-2' style={{ backgroundColor: 'lightgray' }}>
                            <div className="d-flex align-content-center">
                                {
                                    (() => {
                                        return _.sprite === undefined ? (<></>) : (
                                            <div className='me-2' style={{ width: '2rem' }}>
                                                <div className={`${_.sprite.prefix}-sprite ${_.sprite.prefix}_${_.sprite.item.toLowerCase()}`}></div>
                                            </div>
                                        )
                                    })()
                                }
                                <span>{_.text}</span>
                            </div>
                            <ul>
                                {
                                    _.data as undefined | ReactNode[]
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    }
}

export default ListScreen