import React from 'react'

const SearchOptions = ({ className, text, setDialogData }: { className: string, text: string, setDialogData?: () => void }) => {
  return (
    <div
      className='d-flex align-items-center p-1 ps-2 w-100'
      onClick={() => { if (setDialogData !== undefined) setDialogData(); }}
    >
      {
        (() => {
          return className.length === 0 ? <></> : (
            <div
              className="sprite-icon"
              style={{
                width: '2rem',
                marginRight: '0.5rem'
              }}
            >
              <div
                className={className}>
              </div>
            </div>
          )
        })()
      }
      <span style={{ flex: 1 }}>{text}</span>
    </div>
  )
}

export default SearchOptions