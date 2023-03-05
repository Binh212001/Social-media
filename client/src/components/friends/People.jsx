import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listFriend } from '../../app/user/userAction';
import FriendItem from './FriendItem';

function People() {
  const { user } = useSelector((state) => state.auth);

  const { friend } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listFriend({ userId: user._id }));
  }, [dispatch, user]);
  return (
    <div className='bd-5 bg-mode p-3 my-3'>
      <h5 className='fz-14 my-3'>Friend List</h5>
      <hr />
      {friend.map((friend) => {
        return (
          <FriendItem
            key={friend._id}
            isFriend={user.friends.includes(friend._id) ? true : false}
            friend={friend}
          />
        );
      })}
    </div>
  );
}

export default People;
