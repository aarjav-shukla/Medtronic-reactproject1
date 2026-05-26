import React from 'react'
// import {Sparkle} from 'lucide-react';

import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/Section3';

import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <div className='select-none '>
      <Section1/>
<Section2/>
<Section3/>

    </div>
  );
}

export default App
