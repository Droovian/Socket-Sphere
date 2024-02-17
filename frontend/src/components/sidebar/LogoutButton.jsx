import React from 'react'
import useLogout from '../../hooks/useLogout'
import { SpinnerCircular } from 'spinners-react';

const LogoutButton = () => {

  const { loading, logout } = useLogout();

  return (
    <div className='mt-10'>

        { !loading ? (
          <button 
          onClick={logout}
          className='text-white bg-black px-4 py-2 rounded-md hover:bg-red-500'>Logout</button>
        ): (
          <SpinnerCircular/>
        )} 
        
    </div>
  )
}

export default LogoutButton