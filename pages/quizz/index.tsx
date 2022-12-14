import { Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { tagService } from '../../services'
import apiIns from '../../services/API.service'
import { useSession } from 'next-auth/react'
import Router, { useRouter } from 'next/router'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import { requiredAuthentication } from '../../utils/requiredAuthentication'

type Props = {}

interface Tag{
  name: string
}
const Quizz = (props: Props) => {
  const [tags, setTags] = useState<Tag[] | []>([])

  useEffect(() => {
    const fetchTags = async() => {
      const resp = await apiIns.get('/tags');
      setTags(resp.data)
    }
    fetchTags()
  }, [])
  return (
    <div className='py-5'>
      <div className='grid grid-cols-3 gap-5 sm:grid-cols-1 sm:gap-0 sm:p-2'>
        <div className="col-span-2">
          <Typography className="font-bold text-center text-[30px] uppercase leading-loose tracking-widest underline pb-2">Quizz Lists</Typography>
          <div className='bg-slate-300 border border-blue-gray-200 rounded shadow mb-5'>
            <div className='p-5'>
              <p className='leading-5 tracking-normal pb-3'>
                <span className='font-bold text-lg text-black mr-2'>
                  Q.
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad perspiciatis atque ex quidem iure obcaecati. Laboriosam dolore blanditiis aut odio ratione alias, fugiat voluptate illum maiores sed laudantium? Expedita.
              </p>
              <div className='flex gap-1 flex-wrap'>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edu</span>
                <span className='bg-red-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edi</span>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Js</span>
                <span className='bg-yellow-600 border rounded-2xl py-1 px-3 text-white shadow'>#Sport</span>
              </div>
            </div>
          </div>
          <div className='bg-slate-300 border border-blue-gray-200 rounded shadow mb-5'>
            <div className='p-5'>
              <p className='leading-5 tracking-normal pb-3'>
                <span className='font-bold text-lg text-black mr-2'>
                  Q.
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad perspiciatis atque ex quidem iure obcaecati. Laboriosam dolore blanditiis aut odio ratione alias, fugiat voluptate illum maiores sed laudantium? Expedita.
              </p>
              <div className='flex gap-1 flex-wrap'>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edu</span>
                <span className='bg-red-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edi</span>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Js</span>
                <span className='bg-yellow-600 border rounded-2xl py-1 px-3 text-white shadow'>#Sport</span>
              </div>
            </div>
          </div>
          <div className='bg-slate-300 border border-blue-gray-200 rounded shadow mb-5'>
            <div className='p-5'>
              <p className='leading-5 tracking-normal pb-3'>
                <span className='font-bold text-lg text-black mr-2'>
                  Q.
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad perspiciatis atque ex quidem iure obcaecati. Laboriosam dolore blanditiis aut odio ratione alias, fugiat voluptate illum maiores sed laudantium? Expedita.
              </p>
              <div className='flex gap-1 flex-wrap'>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edu</span>
                <span className='bg-red-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edi</span>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Js</span>
                <span className='bg-yellow-600 border rounded-2xl py-1 px-3 text-white shadow'>#Sport</span>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:order-first'>
          <Typography className="font-bold text-center text-[30px] uppercase leading-loose tracking-widest underline pb-2">Tag Listss</Typography>
          <div className='bg-slate-300 border rounded shadow mb-5 border-blue-gray-200 p-2 w-full'>
            <div className='p-3'>
              <div className='flex gap-1 flex-wrap'>
                {tags && tags.map((tag: Tag, index: number)=> (
                  <span key={index} className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#{tag.name}</span>
                ))}
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edu</span>
                <span className='bg-red-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edi</span>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Js</span>
                <span className='bg-yellow-600 border rounded-2xl py-1 px-3 text-white shadow'>#Sport</span>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edu</span>
                <span className='bg-red-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edi</span>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Js</span>
                <span className='bg-yellow-600 border rounded-2xl py-1 px-3 text-white shadow'>#Sport</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export async function getServerSideProps(context: any) {
  return requiredAuthentication(context, ({session}: any) => {
    return {
      props: {
        session
      }
    }
  })
}

export default Quizz
