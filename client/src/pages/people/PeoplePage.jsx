import React, { useEffect } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userList } from '../../app/user/userAction';
import BoxFriend from '../../components/friends/BoxFriend';
import FriendItem from '../../components/friends/FriendItem';

function PeoplePage() {
  const { user } = useSelector((state) => state.auth);

  const listUser = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userList({ userId: user._id }));
  }, [dispatch]);

  return (
    <div className='container-md-fluid container-lg container-fluid container-sm-fluid py-5'>
      <Row>
        {/* <Col xs='12' sm='12' md='4' lg='4'>
          <h5 className='fz-14'>Your friends</h5>
          <div
            className='d-grid gap-3'
            style={{
              gridTemplateColumns: '1fr 1fr 1fr',
            }}>
            <BoxFriend />
            <BoxFriend />
            <BoxFriend />
            <BoxFriend />
            <BoxFriend />
            <BoxFriend />
          </div>
          <small className='text-primary'>Xem them</small>
        </Col> */}
        {/* <Col xs='12' sm='12' md='8' lg='8'> */}
        {/* <h5 className='fz-14'>Stranger</h5> */}

        <Stack className='bg-mode bd-5'>
          {listUser.map((item) => (
            <FriendItem
              key={item._id}
              isFriend={user.friends.includes(item._id) ? true : false}
              // isFriend={currentUser.friends.includes(user._id) ? true : false}
              friend={item}
            />
          ))}
          {/* <FriendItem isFriend={false} />
          <FriendItem isFriend={false} />
          <FriendItem isFriend={false} /> */}
        </Stack>
        {/* <small className='text-primary'>Xem them</small> */}
        {/* </Col> */}
      </Row>
    </div>
  );
}

export default PeoplePage;
