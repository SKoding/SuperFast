import React from 'react'
import Widgets from './main_components/Widgets'
import Plotter from './main_components/Plotter'
import Table from './main_components/Table'


function MainWin() {
  return (
    <div className='p-2 bg-gray-800 w-full'>
        <div>
            <Widgets />
        </div>
        <hr className='mt-6'/>
        <div className='mt-4'>
            <Plotter />
        </div>
        <hr className='mt-6'/>
        <div className='mt-4'>
            <Table />
        </div>
    </div>
  )
}

export default MainWin