import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import imag from "../assets/Mobile login-rafiki.png"

const Auth = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
    admin_email: '',
    admin_password: ''
  });
  console.log(formData)
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      console.log('Admin logged in successfully:', response);
      navigate('/')

    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid username or password');
    }
  }

  const togglePasswordShow = () => {
    setShow(true);
  };
  const togglePasswordHide = () => {
    setShow(false);
  };
  return (
    <div className='w-screen flex items-center justify-center '>
      <div className=" shadow-md border-4  mx-auo my-10 px-10 ">
        <div className="py-4 flex ">
          <div>
            <div className="mt-2">
              <h2 className="text-4xl text-black font-bold mb-2 ">Admin Login</h2>
              <h2 className="text-4xl text-black font-bold mb-2 "></h2>
              <p className="text-sm font-medium text-red-500">{error}</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div class="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Email
                </label>

                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="admin_email"
                  placeholder="email"
                  name='admin_email'
                  onChange={handleChange}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type={show ? 'text' : 'password'}
                  placeholder="password"
                  name='admin_password'
                  onChange={handleChange}
                />
                {show ? (
                  <svg
                    onClick={() => togglePasswordHide()}
                    className=' relative left-[14em] bottom-[2.3em] cursor-pointer'
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                  >
                    <path d="M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z" />
                  </svg>
                ) : (
                  <svg
                    onClick={() => togglePasswordShow()} className='relative left-[14em] bottom-[2.3em] cursor-pointer'
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                  >
                    <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z" />
                    <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z" />
                  </svg>

                )
                }
                <p className="flex item-end justify-end text-gray-800 cursor-pointer">forgot password?</p>
                <button type="submit" className="my-2 w-[17em] py-2 bg-blue-700 text-white text-1xl rounded-md" value="Login">Sign in</button>
                <p className="flex justify-center items-center text-lg"><span className=""></span> or <span></span> </p>

                <p className="flex justify-center items-center">Don't have an account? <span className="text-lg ml-2 underline text-blue-600 cursor-pointer">Sign Up</span></p>
              </div>
            </form>
          </div>
          <div className=" ml-[5em] hidden lg:block">
            <img className="w-[27em] rounded-md" src={imag} alt="" />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Auth