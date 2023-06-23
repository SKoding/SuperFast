import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import MainWin from './MainWin'

function Landing() {
  return (
    <div>
      <NavBar />
      <hr/>
        <div className='flex flex-row'>
            <SideBar />
            <MainWin />
        </div>
    </div>
  )
}

export default Landing