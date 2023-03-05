import React, { useEffect, useRef, useState } from 'react';
import Header from '../header/Header';

function PrivateLayout({ children }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 500) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <div className='content'>{children}</div>
      {scroll && (
        <span
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            setScroll(false);
          }}
          className='bg-mode position-fixed p-3 rounded'
          style={{
            bottom: '2rem',
            right: '2rem',
          }}>
          <i className='fa fa-arrow-up' aria-hidden='true'></i>
        </span>
      )}
    </div>
  );
}

export default PrivateLayout;
