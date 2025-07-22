import { ICONS, IMAGES } from '@/assets'
import Container from '@/components/Reusable/Container/Container'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-fit w-full'>
      <Container><div className='flex justify-between items-center px-4 py-5 '>
          <Image src={IMAGES.logo} alt='Logo' className='md:h-[103px] md:w-[123px] h-[60px] w-[69px]' />
 <div
                  className="w-[220px] p-[1px] text-white font-semibold text-xl rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
                  }}
                >
                  <div className="bg-secondary-10 flex justify-center rounded-full relative">
                    <div
                      className="absolute h-full w-full rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(254, 119, 1, 0.10) 0%, rgba(255, 230, 1, 0.10) 100%);",
                      }}
                    ></div>

                    <button
                      className="text-transparent flex flex-row items-center justify-center bg-clip-text p-4 text-lg font-medium gap-2"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #FF7801 0%, #FFE601 100%)",
                      }}
                    >
                      <Image src={ICONS.wallet} alt=" " className="size-5" />
                      <span>Connect Wallet</span>
                    </button>
                  </div>
                </div>
      </div></Container>
      
      
    </div>
  )
}

export default Navbar