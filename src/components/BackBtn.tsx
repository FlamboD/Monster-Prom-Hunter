import React from 'react';
import '../styles/BackBtn.scss';

const BackBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className='back-btn'>
      <div
        className="ui-sprite ui_back"
        style={{ "--img": `url(${process.env.PUBLIC_URL}/images/prom/ui-sprites.png)` } as React.CSSProperties}
        onClick={onClick}>
      </div>
    </div>
  )
}

export default BackBtn