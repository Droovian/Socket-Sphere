import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up for an account
        </h2>
      </div>

      <div className="w-full sm:w-1/2 mt-10 sm:mx-auto sm:max-w-sm bg-white p-7 rounded-lg shadow-md">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="fullname"
                name="fullname"
                type="text"
                autoComplete="name"
                required
                className="border-2 border-black bg-white w-full px-3 py-1.5 text-gray-900 rounded-md focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="border-2 border-black bg-white w-full px-3 py-1.5 text-gray-900 rounded-md focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="border-2 border-black bg-white w-full px-3 py-1.5 text-gray-900 rounded-md focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="border-2 border-black bg-white w-full px-3 py-1.5 text-gray-900 rounded-md focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="radio" className="radio radio-accent" name="gender" value="male" />
                <span className="text-black text-sm ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input type="radio" className="radio radio-accent" name="gender" value="female" />
                <span className="text-black text-sm ml-2">Female</span>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link className='text-black' to='/login'>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
