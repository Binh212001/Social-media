import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authApi from '../../api/authApi';
import './register.scss';

function Register() {
  const [picture, setPicture] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const notify = () => toast('Register failure');
  const onChangeFile = (e) => {
    setPicture(e.target.files[0]);
  };

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    if (picture?.name) {
      const formData = new FormData();
      const fileName = Date.now() + picture?.name;
      formData.append('fileName', fileName);
      formData.append('picture', picture);

      try {
        const { firstName, lastName, password, confirmPassword, email } = data;

        if (password === confirmPassword) {
          const value = await authApi.register({
            firstName,
            lastName,
            password,
            confirmPassword,
            email,
            picturePath: fileName,
          });

          axios.post('http://localhost:4000/api/v1/upload/image', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          reset();
          navigate('/auth/login');
        }
      } catch (error) {
        notify();
      }
    }
  };
  return (
    <Container className='d-flex  justify-content-center mt-5 '>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='border rounded p-5 bg-mode'
        style={{
          width: '80%',
        }}>
        <h2 className='text-primary text-center '>Login Page</h2>
        <Row>
          <Col xs='12' sm='12' md='6' lg='6' className='gap-4'>
            <label className='d-block' htmlFor='firstName'>
              FirstName:
            </label>
            <input
              {...register('firstName', {
                required: true,
                minLength: 3,
              })}
              type='text'
              className='d-block outline-none  '
              style={{
                width: '100%',
              }}
            />
            <div className='err text-danger'>
              {errors.firstName && 'FirstName is invalid'}
            </div>
          </Col>
          <Col xs='12' sm='12' md='6' lg='6' className='gap-4'>
            <label className='d-block' htmlFor='lastName'>
              LastName:
            </label>
            <input
              {...register('lastName', {
                required: true,
                minLength: 3,
              })}
              type='text'
              className='d-block outline-none  '
              style={{
                width: '100%',
              }}
            />
            {errors.lastName && 'LastName is invalid'}
          </Col>
        </Row>
        <div>
          <label className='d-block' htmlFor='email'>
            Email:
          </label>
          <input
            {...register('email', { required: true, minLength: 10 })}
            type='email'
            className='d-block outline-none  '
            style={{
              width: '100%',
            }}
          />
          <div className='err text-danger'>
            {errors.email && 'Your email invalid'}
          </div>
        </div>

        <div>
          <label className='d-block' htmlFor='Picture'>
            Picture:
          </label>
          <div className='input__filed'>
            {picture?.name ? (
              <span>{picture.name}</span>
            ) : (
              <div>
                <i className='fa-solid fa-plus'></i>
                <span>Chose Your Avatar Picture</span>
              </div>
            )}
            <input
              type='file'
              onChange={(e) => onChangeFile(e)}
              className='d-block  input__file outline-none   opacity-0 '
              style={{
                width: '100%',
              }}
            />
          </div>
        </div>

        <div>
          <label className='d-block' htmlFor='password'>
            Password:
          </label>
          <input
            {...register('password', {
              required: true,
              minLength: 4,
            })}
            autoComplete='password'
            type='password'
            className='d-block  outline-none '
            style={{
              width: '100%',
            }}
          />
          <div className='err text-danger'>
            {errors.password && 'Password is required'}
          </div>
        </div>

        <div>
          <label className='d-block' htmlFor='Confirm-password'>
            Confirm Password:
          </label>
          <input
            {...register('confirmPassword', {
              required: true,
              minLength: 4,
            })}
            autoComplete='confirm-password'
            type='password'
            className='d-block  outline-none '
            style={{
              width: '100%',
            }}
          />
          <div className='err text-danger'>
            {errors.confirmPassword && 'confirmPassword is required'}
          </div>
        </div>

        <div className='d-flex justify-content-around mt-3 '>
          <Button variant='danger' type='submit'>
            Register
          </Button>
          <Button variant='warning' onClick={() => navigate('/auth/login')}>
            Cancel
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default Register;
