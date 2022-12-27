import { signOut } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-3xl font-bold underline'>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
    </div>
  )
}
