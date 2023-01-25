import React, { Fragment } from 'react'

const Banner = () => {
  return (
    <Fragment>
      <div className='bg-gray-100 p-3 lg:px-52 lg:flex lg:justify-between lg:pt-20'>
        <div className='p-5 space-y-4 lg:w-[40em] lg:space-y-12'>
          <h1 className='lg:text-5xl text-2xl font-semibold'>We Provide High Quality <span className='text-orange-500'>Dental</span> Services</h1>
          <p className='lg:text-2xl text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, architecto commodi. Reiciendis, laborum adipisci dolor facere, doloribus soluta quasi cum reprehenderit quam voluptatibus aperiam repudiandae.</p>
          <div className='space-x-3 w-full'>
            <button className='lg:text-xl lg:p-3 lg:px-8 bg-blue-400 font-semibold  text-white px-5 p-1 rounded-md text-sm'>Pasien Baru</button>
            <button className='lg:text-xl lg:p-3 lg:px-8 bg-white text-gray-800 ring-1 ring-gray-400 font-semibold px-5 p-1 rounded-md text-sm'>Pasien Lama</button>
          </div>
        </div>

        <div className='px-10 lg:px-0'>
          <img src="https://i.ibb.co/WySMWcZ/banner.png" alt="banner" border="0"/>
          {/* <img src="../../src/assets/banner.png" alt="" srcset="" /> */}
        </div>
      </div>
    </Fragment>
  )
}

export default Banner;