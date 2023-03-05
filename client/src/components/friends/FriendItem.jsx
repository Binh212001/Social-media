import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authApi from '../../api/authApi';
import { addFriend, removeFriend } from '../../app/auth/authAction';
import { IMAGE__URL } from '../../constants/constant';

function FriendItem({ isFriend, friend }) {
  const { firstName, lastName, picturePath } = friend;
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleAddFriend = async (friendId) => {
    console.log(user._id);
    try {
      await authApi.addRemoveFriend(user._id, friendId);
      dispatch(addFriend(user._id, friendId));
    } catch (error) {}
  };

  const handleRemoveFriend = async (friendId) => {
    try {
      await authApi.addRemoveFriend(user._id, friendId);
      dispatch(removeFriend(user._id, friendId));
    } catch (error) {}
  };

  return (
    <div className='d-flex p-2 justify-content-between  border-bottom align-items-center border-bottom'>
      <div className='d-flex align-items-center  gap-2'>
        <img className='avatar' src={IMAGE__URL + picturePath} alt='' />
        <div>
          <h5 className='m-0 fz-14'>{lastName + firstName}</h5>
          <small className='m-0'>{firstName}</small>
        </div>
      </div>
      <div>
        <div className='text-danger'>
          {isFriend ? (
            <i
              className='fa-solid fa-user-check'
              onClick={() => {
                handleRemoveFriend(friend._id);
              }}></i>
          ) : (
            <i
              className='fa fa-user-plus'
              aria-hidden='true'
              onClick={() => {
                handleAddFriend(friend._id);
              }}></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendItem;
