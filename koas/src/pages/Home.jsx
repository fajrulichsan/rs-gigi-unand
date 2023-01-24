import React, { Fragment } from 'react';
import Antrian from '../component/Antrian';
import Banner from '../component/Banner';

const Home = () => {
  return (
    <Fragment>
      <Banner/>
      <Antrian/>
    </Fragment>
  )
}

export default Home;