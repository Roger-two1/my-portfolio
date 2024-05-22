import React from 'react'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
  return (
    <div id='footer' className='border-t-2 border-white-200'>
      <div className='py-5 px-6 md:px-10 flex justify-between'>
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Shahid
        </p>
        <div className='flex gap-4'>
        <Link href="https://github.com/Roger-two1" target="_blank">
            <FaGithub size={20} />
          </Link>
        <Link href="https://x.com/Roger__21" target="_blank">
            <FaXTwitter size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
