"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { Logo } from './logo'
import { useRouter } from 'next/navigation'

type Props = {}

const Main = (props: Props) => {
    const router = useRouter();
    const handleStart = () => {
        router.push("/quizz")
    }
  return (
    <div className="w-full h-full flex items-center justify-center">
        <div className='flex flex-col items-center gap-4 '>
            <img className='lg:w-[200px] rounded-xl w-[150px]' src="/logo.jpg" alt="" />
            <h2 className='text-2xl font-bold text-center'>Chào mừng bạn đến với những câu hỏi hóc búa</h2>
            <Button className='w-[100px] hover:bg-sky-600' onClick={handleStart}>Bắt Đầu</Button>
        </div>
    </div>
  )
}

export default Main