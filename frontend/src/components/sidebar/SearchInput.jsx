import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className='flex items-center gap-2 p-5'>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search…'
          className='input input-bordered rounded-full py-2 px-4 text-gray-200 focus:outline-none'
        />
      </div>
      <button
        type='submit'
        className='btn btn-primary btn-circle'
      >
        <IoSearchSharp className='w-6 h-6 text-white' />
      </button>
    </div>
  );
};

export default SearchBar;
