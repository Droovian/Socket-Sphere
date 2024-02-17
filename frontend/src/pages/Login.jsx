import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import { useCookies } from 'react-cookie';

import { SpinnerCircular } from 'spinners-react'
const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [_, setCookies] = useCookies(["access_token"]);

  const {loading, login} = useLogin();

  const handleSubmit = async(e) => {

    e.preventDefault();

    await login(username, password);

  } 
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-7 rounded-lg shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
                required
                className="border-2 border-black bg-white w-full px-3 py-1.5 text-gray-900 rounded-md focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                required
                className="border-2 border-black bg-white w-full px-3 py-1.5 text-gray-900 rounded-md focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-black px-3 py-1.5 text-sm font-semibold text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              { loading ? <SpinnerCircular/> : "Log In"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link className="text-black" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
  
    </div>
  );
};

export default Login;
