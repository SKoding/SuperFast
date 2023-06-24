import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';

function Widgets() {
  return (
    <div className='flex justify-between'>
        <div className='border-2 w-48 border-gray flex p-2 rounded-lg items-center bg-gray-500' id="values">
            <div className='items-center justify-start flex' id='val-box'>
                <div className='m-2'>
                    <SignalWifi4BarIcon style={{ color: '#14F200'}} fontSize='large'/>
                </div>
                <div className='text-center text-white'>
                <h3 className='text-2xl font-semibold'>100</h3>
                <span className='font-medium'>Active Users</span>
                </div>                   
            </div>
        </div>
        <div className='border-2 w-48 border-gray flex p-2 rounded-lg items-center bg-slate-500' id="values">
            <div className='items-center justify-start flex' id='val-box'>
                <div className='m-2'>
                    <PeopleIcon style={{ color: '#800080'}} fontSize='large'/>
                </div>
                <div className='text-center text-white'>
                <h3 className='text-2xl font-semibold'>2</h3>
                <span className='font-medium'>Inactive Users</span>
                </div>                   
            </div>
        </div>
        <div className='border-2 w-48 border-gray flex p-2 rounded-lg items-center bg-slate-500' id="values">
            <div className='items-center justify-start flex' id='val-box'>
                <div className='m-2'>
                    <AttachMoneyIcon style={{ color: 'blue'}} fontSize='large'/>
                </div>
                <div className='text-center text-white'>
                    <div className='flex flex-row items-center'><h3 className='text-2xl font-semibold'>10,000</h3></div>
                <span className='font-medium'>Collected</span>
                </div>                   
            </div>
        </div>
        <div className='border-2 w-48 border-gray flex rounded-lg items-center bg-slate-500' id="values">
            <div className='items-center flex' id='val-box'>
                <div className='m-2'>
                    <CrisisAlertIcon style={{ color: 'red'}} fontSize='large'/>
                </div>
                <div className='text-center ml-4 text-white'>
                <h3 className='text-2xl font-semibold'>10</h3>
                <span className='font-medium'>Issues</span>
                </div>                   
            </div>
        </div>
    </div>
  )
}

export default Widgets