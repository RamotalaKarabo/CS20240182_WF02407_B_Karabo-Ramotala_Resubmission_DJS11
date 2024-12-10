import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({

    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:1000/api/v1/sign-in", values, {withCredentials: true });

      console.log(res.data);

      navigate("/profile");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (

    <div className="h-screen bg-green-100 flex items-center justify-center">
      <ToastContainer/>
      
    <div className="w-4/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center">
      <Link to="/" className="text-2xl font-bold">The PodCast Hub</Link>

      <div className="mt-6 w-full">
        <div className="w-full flex flex-col mt-2">
            <label htmlFor="">Email:</label>
            <input 
              type="email"
              required
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={change}
              className="mt-2 px-2 py-2 rounded outline-none border-2 border-black"/>
        </div>

        <div className="w-full flex flex-col mt-2">
            <label htmlFor="">Password:</label>
            <input 
              type="password"
              required
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={change}
              className="mt-2 px-2 py-2 rounded outline-none border-2 border-black"/>
        </div>

        <div className="w-full flex flex-col mt-4">
          <button 
          type="submit"
          onClick={handleSubmit}
          className="bg-green-900 font-semibold text-xl text-white rounded py-2">
            Login
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col mt-4">
        <p className=" mt-4 text-center">or</p>
        <p className="text-center">Don't have an account yet? <Link to="/signup" className="font-semibold hover:text-blue-600">Sign-Up</Link></p>
      </div>

    </div>
  </div>

  )
}

export default Login