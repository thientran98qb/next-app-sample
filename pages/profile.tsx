import { Button, Input, Typography } from '@material-tailwind/react'
import { Pagination } from '@mui/material'
import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='max-w-xl mx-auto py-10'>
      <Typography className="text-center font-bold uppercase text-[25px] tracking-wider leading-4 mb-9">Profile User</Typography>
      <div className='w-full sm:p-5'>
        <div className='flex items-center justify-between mb-4 flex-row sm:flex-col sm:items-start'>
          <label htmlFor="" className='text-left float-left clear-both w-[200px]'>Email</label>
          <Input label="Email address" />
        </div>
        <div className='flex items-center justify-between mb-4 flex-row sm:flex-col sm:items-start'>
          <label htmlFor="" className='text-left float-left clear-both w-[200px]'>Password</label>
          <Input label="Password"/>
        </div>
        <div className='flex items-center justify-between mb-4 flex-row sm:flex-col sm:items-start'>
          <label htmlFor="" className='text-left float-left clear-both w-[200px]'>Fullname</label>
          <Input label="Fullname" />
        </div>
        <div className='flex items-center justify-between mb-4 flex-row sm:flex-col sm:items-start'>
          <label htmlFor="" className='text-left float-left clear-both w-[200px]'>Avatar</label>
          <Input label="Avatar" />
        </div>
        <div className='text-center flex gap-3 items-center justify-center'>
          <Button>Cancel</Button>
          <Button>Update Profile</Button>
        </div>
      </div>
    </div>
  )
}

export default Profile
