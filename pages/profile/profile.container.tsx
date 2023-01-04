import React from 'react'
import ProfileView from './profile.view'

type Props = {}

const ProfileContainer = (props: Props) => {
  console.log('propsss123', props);

  return (
    <ProfileView />
  )
}

export default ProfileContainer

