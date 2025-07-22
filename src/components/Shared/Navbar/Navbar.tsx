import { IMAGES } from '@/assets'
import Container from '@/components/Reusable/Container/Container'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[143px] w-full'>
      <Container><div className='flex justify-between items-center px-4 py-2 '>
          <Image src={IMAGES.logo} alt='Logo' className='h-[103px] w-[123px]' />

      </div></Container>
      
      
    </div>
  )
}

export default Navbar