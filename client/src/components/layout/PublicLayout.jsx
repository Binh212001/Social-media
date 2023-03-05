import React from 'react';
import AuthHeader from '../header/AuthHeader';

function PublicLayout({ children }) {
  return (
    <div
      style={{
        height: '100vh',
        overflow: 'scroll',
      }}>
      <AuthHeader />
      <div>{children}</div>
    </div>
  );
}

export default PublicLayout;
