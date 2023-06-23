import React from 'react'

function Login() {
  return (
    <div className='justify-center'>
        <div className='w-96 border-2 border-lg border-gray-700'>
          <div>
            <span>UserName: </span><input type="text" />
          </div>
          <hr />
          <div>
            <span>Password: </span><input type="text" />
          </div>
        </div>
    </div>
  )
}

export default Login