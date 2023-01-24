import React, { Fragment } from 'react'

const Antrian = () => {
  return (
    <Fragment>
        <div className='bg-blue-500 w-full p-6 space-y-5'>
            <div className='text-white text-center'>
                <p className='text-xl font-semibold'>Sekarang Antrian ke berapa ya ?</p>
                <p className='text-xs'>Nomor antrian sekarang dan nomor antrian yang akan kamu dapat</p>
            </div>
            <div className='flex justify-evenly'>
                <div className='bg-gray-200 w-32 p-2 rounded-lg drop-shadow-lg space-y-3'>
                    <div>
                        <p className=' text-sm font-semibold text-center'>Antrian</p>
                        <p className='-mt-1 text-sm font-semibold text-center'>Sekarang</p>
                    </div>
                    <p className='text-4xl font-semibold text-center'>10</p>
                </div>
                <div className='bg-gray-200 w-32 p-2 rounded-lg drop-shadow-lg space-y-3'>
                    <div>
                        <p className=' text-sm font-semibold text-center'>Antrian</p>
                        <p className='-mt-1 text-sm font-semibold text-center'>Anda</p>
                    </div>
                    <p className='text-4xl font-semibold text-center'>20</p>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Antrian;