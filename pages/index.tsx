import { Typography } from '@material-tailwind/react'
import { signOut, useSession } from 'next-auth/react'

export default function Home() {

  return (
    <div className="relative w-full">
      <div className='flex flex-col items-center mt-5'>
        <button onClick={() => signOut({redirect: false})}>Logout</button>
        <Typography className="font-bold text-[40px] uppercase tracking-widest font-body">I'm <span className='underline'>Thien Tran</span></Typography>
        <Typography className="tracking-widest font-body">"I'm fullstack developer in Tomosia Company"</Typography>
      </div>
    </div>
  )
}
