import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-blue-400 rounded-md hover:cursor-pointer'>
        <div className='avatar online p-2'>
            <div className='w-12 rounded-full '>
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
            </div>
        </div>

        <div className='flex flex-col flex-1 p-3'>
            <div className='flex justify-between'>
                <p className='font-bold text-black'>John Doe</p>
                <span className='text-xl'>🚀</span>
            </div>
        </div>

    </div>
    <div>
    
    </div>
    <div className='divider px-2'></div>
    </>
  )
}

export default Conversation