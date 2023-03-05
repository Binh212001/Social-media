import React from 'react';
import p1 from '../../asset/images/p1.jpeg';
import './boxFriend.scss';

function BoxFriend() {
  return (
    <div className='box__friend position-relative   '>
      <img
        src={p1}
        alt=''
        style={{
          width: '100%',
        }}
      />
      <h5 className='fz-14 position-absolute box__friend__name'>Name</h5>
    </div>
  );
}
export default BoxFriend;
