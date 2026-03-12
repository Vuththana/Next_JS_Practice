import { BookOpen } from 'lucide-react'
import React from 'react'

export default function HeaderComponent() {
  return (
    <div className='max-w-4xl mx-auto'>
        <div className='flex items-center gap-[10px]'>
            <BookOpen className='text-orange-500'/>
            <p className='text-[30px] font-bold'>Learn Hub</p>
        </div>
        <p className='text-gray-600 text-[14px]'>Explore topics and save your favorites.</p>
    </div>
  )
}
