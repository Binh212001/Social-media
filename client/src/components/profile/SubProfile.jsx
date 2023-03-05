import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../../asset/images/twitter.png';
import { IMAGE__URL } from '../../constants/constant';

function SubProfile({ user }) {
  return (
    <div
      className='container-fluid bg-mode bd-5 py-3'
      style={{
        marginBottom: '16px',
      }}>
      {/* Header profile */}
      <div className='d-flex p-2 justify-content-between  border-bottom align-items-center border-bottom'>
        <div className='d-flex align-items-center  gap-2'>
          <img className='avatar' src={IMAGE__URL + user.picturePath} alt='' />
          <div>
            <h5 className='m-0 fz-14'>
              <Link
                to={`/profile/${user._id}`}
                className='text-black '
                style={{
                  textDecoration: 'none',
                }}>
                {user.firstName + user.lastName}
              </Link>
            </h5>
            <small className='m-0'>{user.firstName + user.lastName}</small>
          </div>
        </div>
        <div className='text-danger'>
          <i className='fa fa-heart' aria-hidden='true'></i>
        </div>
      </div>

      {/* Description  user */}
      <div className='border-bottom'>
        <div className='my-2'>
          <i className='fa fa-location-arrow ' aria-hidden='true'></i>
          <small className='mx-3'>
            {user.address ? user.address : 'unknown'}
          </small>
        </div>
        <div className='my-2'>
          <i className='fa fa-shopping-bag' aria-hidden='true'></i>
          <small className='mx-3'>
            {user.location ? user.location : 'unknown'}
          </small>
        </div>
      </div>

      {/* Social Link */}
      <div className='my-2'>
        <h5 className='fz-14'>Social Profiles</h5>

        <div className='d-flex p-2 justify-content-between align-items-center'>
          <div className='d-flex align-items-center  gap-2'>
            <img src={twitter} alt='' />
            <div>
              <h5 className='m-0 fz-14'>Ashe ko</h5>
              <small className='m-0'>Http://localhost</small>
            </div>
          </div>
          <div className='text-danger'>
            <i className='fa fa-edit' aria-hidden='true'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubProfile;
