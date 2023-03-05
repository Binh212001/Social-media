import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getListPost, getListPostFromPage2 } from '../../app/post/postAction';
import People from '../../components/friends/People';
import CreatePost from '../../components/post/CreatePost';
import PostForm from '../../components/post/PostForm';
import PostItem from '../../components/post/PostItem';
import SubProfile from '../../components/profile/SubProfile';
import './home.scss';
function Home() {
  const [isPostForm, setIsPostForm] = useState(false);
  const [page, setPage] = useState(1);
  const [pageLoaded, setPageLoaded] = useState(1);
  const { user } = useSelector((state) => state.auth);
  const { post } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    if (page >= pageLoaded && page === 1) {
      dispatch(
        getListPost({
          page,
        }),
      );
    } else if (page >= pageLoaded && page > 1) {
      dispatch(
        getListPostFromPage2({
          page,
        }),
      );
    }
  }, [page, pageLoaded]);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > page * 1000 && page >= pageLoaded) {
        setPage(page + 1);
      } else if (page < pageLoaded && page > 1) {
        setPage(page - 1);
      }
    });
    setPageLoaded(page + 1);
  }, [page, pageLoaded]);

  return (
    <div className='container-fluid mt-4 container-sm-fluid container-fluid-md container-lg'>
      <Row>
        <Col xs='12' sm='12 ' md='3' lg='3'>
          <SubProfile user={user} />
        </Col>
        <Col xs='12' sm='12 ' md='6' lg='6'>
          <div onClick={() => setIsPostForm(true)}>
            <CreatePost user={user} />
          </div>
          {post.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </Col>
        <Col xs='0' sm='12 ' md='3' lg='3'>
          <People title='Friends' />
        </Col>
      </Row>
      {isPostForm && (
        <div className='post__form'>
          <PostForm setIsPostForm={setIsPostForm} user={user} />
        </div>
      )}
    </div>
  );
}

export default Home;
