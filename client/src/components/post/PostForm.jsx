import React, { useState } from 'react';
import './postForm.scss';
import p1 from '../../asset/images/p1.jpeg';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { create } from '../../app/post/postAction';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IMAGE__URL } from '../../constants/constant';
import postApi from '../../api/postApi';

function PostForm({ setIsPostForm, user }) {
  const [picture, setPicture] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onChangeFile = (e) => {
    setPicture(e.target.files[0]);
  };

  const notify = () => toast('Fill out description');

  const onSubmit = async (data) => {
    const { description } = data;

    const { firstName, lastName, _id, picturePath } = user;

    const formData = new FormData();
    const fileName = Date.now() + picture?.name;
    formData.append('fileName', fileName);
    formData.append('picture', picture);
    try {
      if (picture) {
        axios.post('http://localhost:4040/api/v1/upload/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      await postApi.create({
        firstName,
        lastName,
        picturePath: fileName,
        userId: _id,
        description,
        userPicture: picturePath,
        likes: [],
      });
      dispatch(
        create({
          firstName,
          lastName,
          picturePath: fileName,
          userId: _id,
          description,
          userPicture: picturePath,
          likes: [],
        }),
      );
      reset();
      setIsPostForm(false);
    } catch (error) {
      notify();
    }
  };
  return (
    <div
      className='d-flex flex-column justify-content-center'
      style={{
        height: '100vh',
      }}>
      <ToastContainer />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-3'
        style={{
          backgroundColor: '#fff',
          width: '500px',
          margin: 'auto',
          color: '#333',
        }}>
        {/* Header Form */}
        <div className='position-relative border-bottom'>
          <h3 className='text-center'>Create new post</h3>
          <span className='post__form__cancel position-absolute  '>
            <i
              onClick={() => setIsPostForm(false)}
              className='fa-solid fa-xmark'></i>
          </span>
        </div>
        {/* Body form */}
        <div className='d-flex align-items-center my-2'>
          <img src={IMAGE__URL + user.picturePath} alt='' className='avatar ' />

          <div className='user mx-3'>
            <h5 className='fz-14 m-0 '>{user.firstName + user.lastName}</h5>
            <small>{user.firstName}</small>
          </div>
        </div>
        <textarea
          {...register('description', {
            required: true,
          })}
          style={{
            width: '100%',
            outline: 'none',
            border: 'none',
          }}
          placeholder=' Content'
          cols='30'
          rows='10'></textarea>

        <input type='file' onChange={(e) => onChangeFile(e)} />
        <div className='d-grid my-2 '>
          <Button type='submit'>Post</Button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
