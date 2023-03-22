import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import postApi from '../../api/postApi';
import { like, remove } from '../../app/post/postAction';
import { IMAGE__URL } from '../../constants/constant';

function PostItem({ post, myPost }) {
  const {
    userPicture,
    firstName,
    lastName,
    description,
    picturePath,
    likes,
    _id,
  } = post;

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLike = async (postId) => {
    // unlike

    await postApi.like({
      postId,
      userId: user._id,
    });
    dispatch(
      like({
        postId,
        userId: user._id,
      }),
    );
  };

  const deleteMyPost = async (postId) => {
    try {
      await postApi.remove({
        postId,
        userId: user._id,
        picturePath: picturePath,
      });
      dispatch(remove(postId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='my-3 bg-mode bd-5'>
      {/* Post Header  */}
      <div className='d-flex p-2 justify-content-between  border-bottom align-items-center border-bottom'>
        <div className='d-flex align-items-center  gap-2'>
          <img className='avatar' src={IMAGE__URL + userPicture} alt='' />
          <div>
            <h5 className='m-0 fz-14'>{firstName + lastName}</h5>
            <small className='m-0'>{firstName}</small>
          </div>
        </div>
        {myPost && (
          <i
            onClick={() => deleteMyPost(_id)}
            className='fa fa-trash'
            aria-hidden='true'></i>
        )}
      </div>
      {/* post text  */}
      <p className='px-3 my-3'>{description}</p>
      <Image src={IMAGE__URL + picturePath} width='100%' />
      <br />
      <Row className='p-3'>
        <Col className='text-center'>
          <i
            onClick={() => handleLike(_id)}
            className={`fa fa-heart ${
              likes.includes(user._id) && 'text-danger'
            }`}
            aria-hidden='true'></i>{' '}
          Like
        </Col>
        <Col className='text-center'>
          <i className='fa fa-comment' aria-hidden='true'></i> Comment
        </Col>
        <Col className='text-center'>
          <i className='fa fa-share' aria-hidden='true'></i> Share
        </Col>
      </Row>
    </div>
  );
}

export default PostItem;
