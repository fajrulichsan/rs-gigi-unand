import React, { Fragment } from 'react';
import Antrian from '../component/Antrian';
import Banner from '../component/Banner';
import PasienBaru from '../component/popup/PasienBaru';
import { useStateContext } from '../context/ContextProvider';

const Home = () => {

  return (
    
    <Fragment>
      <div className='relative'>
        <Banner/>
        <Antrian/>
        <div className='absolute w-full h-screen top-0 flex justify-center items-center' style={{backgroundColor: 'rgba(48, 48, 48, 0.53)'}}>
          <PasienBaru/>
        </div>
      </div>
    </Fragment>
  )
}

export default Home;