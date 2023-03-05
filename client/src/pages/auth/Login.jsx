import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../app/auth/authAction';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    await dispatch(login(data));
    reset();
    navigate('/');
  };
  return (
    <Container className='d-flex  justify-content-center mt-5'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='border rounded p-5  bg-mode'
        style={{
          width: '80%',
        }}>
        <h2 className='text-primary text-center '>Login Page</h2>
        <div>
          <label className='d-block' htmlFor='email'>
            Email:
          </label>
          <input
            {...register('email', {
              required: true,
              minLength: 10,
            })}
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
          <label className='d-block' htmlFor='password'>
            Password:
          </label>
          <input
            {...register('password', {
              required: true,
              minLength: 4,
            })}
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

        <div className='d-flex text-center mt-3  '>
          <Button className='mx-auto' type='submit'>
            Login
          </Button>
        </div>
        <div className='d-flex text-center mt-3  justify-content-center '>
          <Link to='/auth/register'> Create new account</Link>
        </div>
      </form>
    </Container>
  );
}

export default Login;
