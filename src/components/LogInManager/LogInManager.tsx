"use client";
import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { RenderInputField } from "@/utils/formfileds";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  emailOrNumber: Yup.string().required('Email or number is required'),
  password: Yup.string().required('Password is required'),
});

const LogInManagerBlock = () => {
  const router = useRouter()
  const handleSubmit = async (data : any) => {
    try {
      // Map `emailOrNumber` to `email` to match the API requirement
      const formattedData = {
        email: data.emailOrNumber,
        password: data.password
      };

      const response = await axios.post('/api/sign-in', formattedData);
      // toast.success('Login successful!');
      console.log('Login successful:', response.data);
      localStorage.setItem("token", response.data?.token)
      router.push("/warehouse")
      // Optionally handle success, like redirecting or showing a success message
    } catch (error) {
      toast.error('Error signing in. Please try again.');
      console.error('Error signing in:', error);
      // Optionally handle error, like showing an error message
    }
  };

  return (<>
 
 <ToastContainer />
    <div className='mt-1 min-h-[77vh] w-full pb-10'>
      <div className="flex flex-col lg:flex-row gap-4 pt-10 justify-evenly items-center w-full">
        <div className='flex flex-col px-4 lg:px-16 w-full mt-10'>
          <h1 className='font-medium text-3xl text-black text-center'>Log in to Dolphine</h1>
          <p className='text-sm font-medium mt-4 ml-1 text-black text-center pb-4'>Enter your details below</p>

          <Formik
            initialValues={{ emailOrNumber: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await handleSubmit(values); // Pass form values to handleSubmit
              setSubmitting(false);
            }}
          >
            {({ values, isSubmitting, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-6">
                <div className="mb-3">
                  <h2 className="text-black text-small">Email or Phone No</h2>
                  <Field
                    type="text"
                    name="emailOrNumber"
                    placeholder="Email or Phone No"
                    className="bg-blue-800"
                    value={values.emailOrNumber}
                    onChange={handleChange}
                    component={RenderInputField}
                  />
                </div>

                <div className="mb-3">
                  <h2 className="text-black text-small">Password</h2>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-blue-300"
                    value={values.password}
                    onChange={handleChange}
                    component={RenderInputField}
                  />
                </div>

                <div className='flex justify-between items-center gap-x-6 text-md p-2'>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className='hover:cursor-pointer font-semibold p-2 px-2 rounded-md bg-blue-500 text-white'>
                    Login
                  </button>
                  <Link href={'/forget-password'} className='text-sm text-blue-500 hover:cursor-pointer hover:underline'>Forget Password?</Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    </>
  )
}

export default LogInManagerBlock;
