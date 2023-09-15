import React, { useEffect, useState } from 'react';
import '../styles/BackBtn.scss';
import { History } from '../History';

const BackBtn = ({ history, onClick }: { history?: History, onClick: () => void }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(history?.previous !== undefined || true)
  })
  return (
    <div className='back-btn' style={{ display: visible ? '' : 'none' }}>
      <div
        className="ui-sprite ui_back"
        style={{ "--img": `url(${process.env.PUBLIC_URL}/images/prom/ui-sprites.png)` } as React.CSSProperties}
        onClick={onClick}>
      </div>
    </div>
  )
}

export default BackBtn