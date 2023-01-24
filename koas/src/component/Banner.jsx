import React, { Fragment } from 'react'

const Banner = () => {
  return (
    <Fragment>
      <div className='bg-gray-100 p-3'>
        <div className='p-5 space-y-4'>
          <h1 className='text-2xl font-semibold'>We Provide High Quality <span className='text-orange-500'>Dental</span> Services</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatum blanditiis dignissimos et, fugit repellendus.</p>
          <div className='space-x-3 w-full'>
            <button className='bg-blue-400 font-semibold  text-white px-5 p-1 rounded-md text-sm'>Pasien Baru</button>
            <button className='bg-white text-gray-800 ring-1 ring-gray-400 font-semibold px-5 p-1 rounded-md text-sm'>Pasien Lama</button>
          </div>
        </div>

        <div className='px-3'>
          <img src="https://i.ibb.co/WySMWcZ/banner.png" alt="banner" border="0"/>
          {/* <img src="../../src/assets/banner.png" alt="" srcset="" /> */}
        </div>
      </div>
    </Fragment>
  )
}

export default Banner;