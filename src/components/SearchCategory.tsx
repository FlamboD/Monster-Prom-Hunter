import React from 'react'
import '../styles/SearchCategory.scss'
import SearchOptions from './SearchOptions'

const SearchCategory = ({title, options}: {title: string, options: Array<{key: string, setDialogData?: () => void, className: string, text: string}>}) => {
  return (
    <div 
        key={`cat_${title}`}
        className='search-category' 
        style={{
            display: options.length ? 'flex' : 'none',
            flexDirection: 'column',
        }}
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
                backgroundPosition:  '10px 0, 10px 0, 0 0, 0 0',
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
            className='collapse show'
            style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0 0.5rem',
                backgroundColor: 'white'
            }}>
            {
                options.slice(0, 5).map(
                    _ => 
                    <SearchOptions 
                        key={_.key} 
                        setDialogData={_.setDialogData} 
                        className={_.className} 
                        text={_.text || "..."} 
                    />
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
            <div style={{width: '1rem'}}><div className="ui-sprite ui_arrow-down"></div></div>
        </div>
    </div>
  )
}

export default SearchCategory