import { Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { tagService } from '../../services'

type Props = {}

const Quizz = (props: Props) => {

  /**
   * Quiz example: count questions
   *  - Question
   *  - Answers: Radio, Select
   */
  return (
    <div className='py-5'>
      <Typography className="font-bold text-center text-[30px] uppercase leading-loose tracking-widest">Quizz Lists</Typography>
      <div className='grid grid-cols-3 gap-5'>
        <div className="col-span-2">
          <div className='bg-slate-300 border border-blue-gray-200 rounded shadow mb-5'>
            <div className='p-5'>
              <p className='leading-5 tracking-normal pb-3'>
                <span className='font-bold text-lg text-black mr-2'>
                  Q.
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad perspiciatis atque ex quidem iure obcaecati. Laboriosam dolore blanditiis aut odio ratione alias, fugiat voluptate illum maiores sed laudantium? Expedita.
              </p>
              <div className='flex gap-1'>
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
              <div className='flex gap-1'>
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
              <div className='flex gap-1'>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edu</span>
                <span className='bg-red-600 border rounded-2xl py-1 px-3 text-white shadow'>#Edi</span>
                <span className='bg-blue-600 border rounded-2xl py-1 px-3 text-white shadow'>#Js</span>
                <span className='bg-yellow-600 border rounded-2xl py-1 px-3 text-white shadow'>#Sport</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-slate-300 border rounded shadow mb-5 border-blue-gray-200'>
            <div className='p-3'>
              <Typography className="font-bold underline text-[30px] py-2 tracking-wider">Tag Lists</Typography>
              <div className='flex gap-1 flex-wrap'>
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

export default Quizz
