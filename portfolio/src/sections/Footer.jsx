import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black flex justify-center flex-wrap gap-5'>
        <div className='flex justify-between w-full flex-wrap gap-5'>
            <div className='text-white flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className='flex gap-3'>
               <a href="https://github.com/MyshaZeshan" target="_blank" rel="noopener noreferrer">
                    <div className='social-icon'>
                        <img src='/assets/github.svg' alt='github' className="w-1/2 h-1/2"/>
                    </div>
                </a>
        
                <a href="https://www.linkedin.com/in/mysha-zeshan" target="_blank" rel="noopener noreferrer">
                    <div className='social-icon'>
                        <img src='/assets/linkedIn.png' alt='linkedin' className="w-1/2 h-1/2"/>
                    </div>
                </a>
            </div>
        </div>
        <p className='text-white justify-center'>
            ©️ 2026 MyshaZeshan. All rights reserved.
        </p>
    </section>
  )
}

export default Footer