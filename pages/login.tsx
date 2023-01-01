import React, { useEffect } from 'react'
import Credentials from '../components/Credentials'
import { getCsrfToken, getProviders, useSession } from 'next-auth/react'
import Router from 'next/router'

const Login = ({provider, csrfToken}: any) => {
  const { data: session } = useSession()

  useEffect(() => {
    if (session) Router.push('/');

  }, [session]);

  return (
    <div className='bg-gray-50 flex-col justify-center py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='text-center text-3xl mt-6 m-0 font-extrabold text-gray-900'>Sign In</h2>
        <p className='mt-2 text-center text-gray-600'>Welcome back website!</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md p-3 lg:mx-auto lg:w-2/4">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg lg:px-10">
          <Credentials provider={provider.credentials} csrfToken={csrfToken} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      provider: await getProviders(),
      csrfToken: await getCsrfToken(context)
    }
  }
}
export default Login

