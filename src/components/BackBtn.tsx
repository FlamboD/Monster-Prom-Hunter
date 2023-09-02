import React from 'react';
import '../styles/BackBtn.scss';

const BackBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="nav-sprite ui_back back-btn"
      style={{ "--img": `url(${process.env.PUBLIC_URL}/images/prom/ui-sprites.png)` } as React.CSSProperties}
      onClick={onClick}>
    </div>
  )
}

export default BackBtn