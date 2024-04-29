import { auth, currentUser } from '@clerk/nextjs/server';
import React from 'react'

export default async function page () {
    const { userId } = auth();
    const user = await currentUser();
  return (
    <div className='w-full  flex justify-center items-center'>Hello {user?.firstName}</div>
  )
}

