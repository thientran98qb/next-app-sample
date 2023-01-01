import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';

interface IProps {
  provider: any,
  csrfToken: string
}

type FormValues = {
  email: string;
  password: string;
}
const Credentials = ({provider, csrfToken}: IProps) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
  })

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { register, handleSubmit, formState } = useForm<FormValues>(formOptions)
  const { errors } = formState
  const onSubmit: SubmitHandler<FormValues> = async(data) => {
    setLoading(true)
    const res = await signIn(provider.id, {
      email: data.email,
      password: data.password,
      callbackUrl: `/`,
      redirect: false
    })
    if (provider.id === 'credentials') {
      if (res?.error) {
        setLoading(false)
        return toast(res?.error)
      }
      setLoading(false)

      return window.location.replace(res?.url || '/')
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
      <div className='flex flex-col'>
        <label className='text-lg font-medium'>Email address</label>
        <input
          type="email"
          className={`px-3 focus:border-gray-700 border-gray-300 p-2 mt-3 rounded border outline-none border-solid w-100 text-slate-500 ${errors.email ? 'border-2 focus:border-red-700 border-red-700' : ''}`}
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
        <p className='m-0 pt-2 text-red-500 font-bold text-sm'>{errors.password?.message}</p>
      </div>
      <button className='mt-8 w-full cursor-pointer border hover:bg-gray-100 rounded outline-none border-solid border-gray-500 shadow bg-white my-2 py-3' type="submit">
        {loading ? <CircularProgress size="10px" color="success" /> : "Sign in with Email & Password"}
      </button>
    </form>
  )
}

export default Credentials
