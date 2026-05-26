import React from 'react'
import Left from './left';
import Right from './right';
const hero = () => {
  return (
    <div>
      <div className="lg:flex h-165  py-20 backdrop-blur-sm">
       <Left/>
       <Right/>
      </div>
    </div>
  );
}

export default hero
