import React from 'react'
import '../styles/SearchCategory.scss'
import SearchOptions from './SearchOptions'
import { Link } from 'react-router-dom'

const SearchCategory = ({ title, options }: { title: string, options: Array<{ key: string, link?: string, className: string, text: string }> }) => {
    const onClick = (_: any) => {
        $("#searchResults").addClass("pe-none");
    }
    return (
        <div
            key={`cat_${title}`}
            className='search-category'
            style={{
                display: options.length ? 'flex' : 'none',
                flexDirection: 'column',
            }}
            onClick={onClick}
        >
            <span
                className='title'
                style={{
                    padding: '0.5rem',
                    color: 'white',
                    fontSize: '20pt',
                    fontWeight: 'bold',
                    backgroundColor: '#5d5d5d',
                    backgroundImage: 'linear-gradient(135deg, #666666 25%, transparent 25%), linear-gradient(225deg, #666666 25%, transparent 25%), linear-gradient(45deg, #666666 25%, transparent 25%), linear-gradient(315deg, #666666 25%, #5d5d5d 25%)',
                    backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                    backgroundSize: '20px 20px',
                    backgroundRepeat: 'repeat'
                }}
                data-bs-toggle="collapse"
                data-bs-target={`#cat-${title}`}
                aria-expanded="true"
                aria-controls={`cat-${title}`}
            >{title}</span>
            <div
                id={`cat-${title}`}
                className='category-items flex-column collapse show'
                style={{
                    backgroundColor: 'white'
                }}>
                {
                    options.slice(0, 5).map(
                        _ => <Link to={_.link ?? ''}>
                            <SearchOptions
                                key={_.key}
                                className={_.className}
                                text={_.text || "..."}
                            />
                        </Link>
                    )
                }
                {
                    options.length > 5 ? <div>{options.length - 5} more...</div> : <></>
                }
            </div>
            <div
                className='category-extender'
                data-bs-toggle="collapse"
                data-bs-target={`#cat-${title}`}
                aria-expanded="true"
                aria-controls={`cat-${title}`}
            >
                <div style={{ width: '1rem' }}><div className="ui-sprite ui_arrow-down"></div></div>
            </div>
        </div>
    )
}

export default SearchCategory