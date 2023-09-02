import React from 'react'

const SearchCategory = ({title, options}: {title: string, options: Array<JSX.Element>}) => {
  return (
    <div 
        className='search-category' 
        style={{
            display: options.length ? 'flex' : 'none',
            flexDirection: 'column',
        }}>
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
        >{title}</span>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0 0.5rem',
                backgroundColor: 'white'
            }}>
            {
                options
            }
        </div>
    </div>
  )
}

export default SearchCategory