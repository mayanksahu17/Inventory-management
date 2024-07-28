"use client";
import React from 'react';
import { Formik, Field } from 'formik';
import { FcGoogle } from "react-icons/fc";
import { RenderInputField } from "@/utils/formfileds";
import * as Yup from 'yup';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string().required('Password is required'),
  location: Yup.string().required('Location is required'),
});

const SignUpManagerBlock = () => {

  const handleLogin = async (data : any) => {
    try {
      const response = await axios.post("/api/sign-up", data);
      console.log('Sign-up successful:', response.data);
      // Optionally handle success, like redirecting or showing a success message
    } catch (error) {
      console.error('Error signing up:', error);
      // Optionally handle error, like showing an error message
    }
  };

  return (
    <>
    <ToastContainer />
    <div className='mt-1 w-full pb-10'>
      <div className="flex gap-4 pt-10 justify-evenly items-center">
        <div className="flex flex-col px-4 lg:px-16 w-full mt-10">
          <h1 className='font-medium text-3xl text-black text-center'>Create An Account</h1>
          <p className='text-sm font-medium mt-4 ml-1 text-black text-center'>Enter your Details</p>
          <Formik
            initialValues={{ name: '', email: '', password: '', location: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await handleLogin(values); // Pass form values directly to handleLogin
              setSubmitting(false);
            }}
          >
            {({ values, isSubmitting, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-6">
                <div className="mb-3">
                  <h2 className="text-small text-black">Name</h2>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className=""
                    value={values.name}
                    onChange={handleChange}
                    component={RenderInputField}
                  />
                </div>
                <div className="mb-3">
                  <h2 className="text-small text-black">Email</h2>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-blue-800"
                    value={values.email}
                    onChange={handleChange}
                    component={RenderInputField}
                  />
                </div>
                <div className="mb-3">
                  <h2 className="text-small text-black">Password</h2>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className=""
                    value={values.password}
                    onChange={handleChange}
                    component={RenderInputField}
                  />
                </div>
                <div className="mb-3">
                  <h2 className="text-small text-black">Location</h2>
                  <Field
                    type="text"
                    name="location"
                    placeholder="Location"
                    className=""
                    value={values.location}
                    onChange={handleChange}
                    component={RenderInputField}
                  />
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-2 py-2 bg-brand-color-300 text-black bg-gray-400 font-bold transition-all duration-100 ease-in hover:ease-out hover:bg-brand-color-300 focus:outline-none focus:shadow-outline rounded-md"
                  >
                    Create Account
                  </button>
                </div>
              
              </form>
            )}
          </Formik>
          <div className='flex items-center justify-center mt-8'>
            <p className='text-sm text-black'>
              Already have an account? &nbsp; <span className='font-medium underline'><Link href={'/log-in-manager'}>Log in</Link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUpManagerBlock;
