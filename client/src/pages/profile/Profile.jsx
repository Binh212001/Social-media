import React, { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMyPost, getMyPostFromPage2 } from '../../app/post/postAction';
import PostItem from '../../components/post/PostItem';
import SubProfile from '../../components/profile/SubProfile';
function Profile() {
  const { userId } = useParams();
  const [page, setPage] = useState(1);
  const [pageLoaded, setPageLoaded] = useState(1);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { myPost } = useSelector((state) => state.post);

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

  useEffect(() => {
    if (page >= pageLoaded && page === 1) {
      dispatch(
        getMyPost({
          page,
          userId,
        }),
      );
    } else if (page >= pageLoaded && page > 1) {
      dispatch(
        getMyPostFromPage2({
          page,
          userId,
        }),
      );
    }
  }, [page, pageLoaded, userId, dispatch]);
  return (
    <div className='container-fluid container-lg container-md container-fluid-sm my-2'>
      <SubProfile user={user} />
      {/* Yor post */}

      <div className='my-2 bg-mode bd-5'>
        <h5>Your Post</h5>
        <Stack>
          {myPost.map((post) => (
            <PostItem key={post._id} post={post} myPost={true} />
          ))}
        </Stack>
      </div>
    </div>
  );
}

export default Profile;
