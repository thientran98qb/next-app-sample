import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup'

interface IProps {
  providers: string,
  csrfToken: string
}

type FormValues = {
  email: string;
  password: string;
}
const Credentials = ({providers, csrfToken}: IProps) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
  })

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { register, handleSubmit, formState } = useForm<FormValues>(formOptions)
  const { errors } = formState
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col'>
        <label className='text-lg font-medium'>Email address</label>
        <input
          type="email"
          className={`px-3  focus:border-gray-700 border-gray-300 p-2 mt-3 rounded border outline-none border-solid w-100 text-slate-500 ${errors.email ? 'border-2 focus:border-red-700 border-red-700' : ''}`}
          placeholder='email@example.com'
          {...register('email', {required: true})}
        />
        <p className='m-0 pt-2 text-red-500 font-bold text-sm'>{errors.email?.message}</p>
      </div>
      <div className='flex flex-col mt-3'>
        <label className='text-lg font-medium'>Password</label>
        <input
          type="password"
          {...register('password')}
          className={`p-2 px-3 mt-3 border focus:border-gray-700 border-gray-300 rounded outline-none border-solid w-100 text-slate-600 ${errors.email ? 'border-2 focus:border-red-700 border-red-700' : ''}`}
          placeholder='Enter password'
        />
        <p className='m-0 pt-2 text-red-500 font-bold text-sm'>{errors.email?.message}</p>
      </div>
      <button className='mt-8 w-full cursor-pointer border hover:bg-gray-100 rounded outline-none border-solid border-gray-500 shadow bg-white my-2 py-3' type="submit">Sign in with Email & Password</button>
    </form>
  )
}

export default Credentials
