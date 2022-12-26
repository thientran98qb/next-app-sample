import React from 'react'
import Credentials from '../components/Credentials'
import { getPosts } from '../services'

type Props = {}

const Login = (props: Props) => {
  console.log(props);

  return (
    <div className='bg-gray-50 flex-col justify-center py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='text-center text-3xl mt-6 m-0 font-extrabold text-gray-900'>Sign In</h2>
        <p className='mt-2 text-center text-gray-600'>Welcome back website!</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Credentials providers={'123'} csrfToken={'123'} />
        </div>
      </div>
    </div>
  )
}

export default Login

export async function getStaticProps() {
    const posts = await getPosts() || []
    return {
      props: { posts }
    }
}
