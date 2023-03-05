import React from 'react';
import { Col, Row } from 'react-bootstrap';
import p1 from '../../asset/images/p1.jpeg';
import { IMAGE__URL } from '../../constants/constant';
import './createPost.scss';

function CreatePost({ user }) {
  return (
    <div className='container-fluid bg-mode  bd-5'>
      <div className='grid grid-1-10 py-3 border-bottom'>
        <img
          src={IMAGE__URL + user.picturePath}
          className='avatar mx-2'
          alt=''
        />
        <input
          style={{
            border: 'none',
          }}
          type='text'
          className='post__input'
          placeholder='What do you think ???'
        />
      </div>
      {/* list option */}

      <Row className='py-3 my-3 '>
        <Col className='border-end text-center'>
          <i className='fa fa-image' aria-hidden='true'></i>
        </Col>
        <Col className='border-end text-center'>
          <i className='fa fa-audio-description' aria-hidden='true'></i>
        </Col>
        <Col className='border-end text-center'>
          <i className='fa fa-video-camera' aria-hidden='true'></i>
        </Col>

        <Col className='d-flex justify-content-center'>
          <button type='' className='post__btn'>
            Post
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default CreatePost;
