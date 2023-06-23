import React from 'react'
import PeopleIcon from '@mui/icons-material/People';

function Widgets() {
  return (
    <div className='flex justify-between'>
        <div className='border-2 w-48 border-gray flex p-2 rounded-lg items-center bg-gray-500' id="values">
            <div className='items-center justify-start flex' id='val-box'>
                <div className='m-2'>
                    <PeopleIcon style={{ color: 'green', height:'48px'}}/>
                </div>
                <div className='text-center text-white'>
                <h3 className='text-2xl font-semibold'>100</h3>
                <span className='font-medium'>Online Users</span>
                </div>                   
            </div>
        </div>
        <div className='border-2 w-48 border-gray flex p-2 rounded-lg items-center bg-slate-500' id="values">
            <div className='items-center justify-start flex' id='val-box'>
                <div className='m-2'>
                    <PeopleIcon style={{ color: 'red', height:'48px'}}/>
                </div>
                <div className='text-center text-white'>
                <h3 className='text-2xl font-semibold'>100</h3>
                <span className='font-medium'>Online Users</span>
                </div>                   
            </div>
        </div>
        <div className='border-2 w-48 border-gray flex p-2 rounded-lg items-center bg-white' id="values">
            <div className='items-center justify-start flex' id='val-box'>
                <div className='m-2'>
                    <PeopleIcon style={{ color: 'blue', height:'48px'}}/>
                </div>
                <div className='text-center'>
                <h3 className='text-2xl font-semibold'>100</h3>
                <span className='font-medium'>Online Users</span>
                </div>                   
            </div>
        </div>
        <div className='border-2 w-48 border-gray flex p-2 rounded-lg items-center' id="values">
            <div className='items-center justify-start flex' id='val-box'>
                <div className='m-2'>
                    <PeopleIcon style={{ color: 'orange', height:'48px'}}/>
                </div>
                <div className='text-center text-white'>
                <h3 className='text-2xl font-semibold'>100</h3>
                <span className='font-medium'>Online Users</span>
                </div>                   
            </div>
        </div>
    </div>
  )
}

export default Widgets