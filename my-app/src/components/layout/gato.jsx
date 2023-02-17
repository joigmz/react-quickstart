import React from 'react';
import PrimaryLink from '../link/primaryLink'

function gato() {
  return (
    <div className='grid grid-cols-1 max-w-6xl h-[50vh] mt-10 mx-auto'>
      <div className='grid grid-cols-3 items-center gap-3'>
        <PrimaryLink text='X' />
        <PrimaryLink text='O' />
        <PrimaryLink text='X' />
      </div>

      <div className='grid grid-cols-3 items-center gap-3'>
        <PrimaryLink text='X' />
        <PrimaryLink text='O' />
        <PrimaryLink text='X' />
      </div>

      <div className='grid grid-cols-3 items-center gap-3'>
        <PrimaryLink text='X' />
        <PrimaryLink text='O' />
        <PrimaryLink text='X' />
      </div>
    </div>
  );
}

export default gato;