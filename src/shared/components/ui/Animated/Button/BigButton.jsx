import ButtonArrow from '@/shared/components/icons/ButtonArrow'
import React from 'react'

const BigButton = () => {
  return (
    <div className="w-[292px] h-[40px] opacity-100 rounded-[100px] gap-[10px] border py-[12px] px-[16px] flex items-center justify-center">
        <a href="#" className='flex items-center gap-[10px] text-[#6F6C7D]'>
            <span>Let’s turn your ideas into reality</span>
            <ButtonArrow />
        </a>
    </div>
  )
}

export default BigButton