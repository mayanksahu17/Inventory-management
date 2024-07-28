'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
// import Button from '@/components/ui/Button';
import {
  RenderInputField,
  // RenderSelectField,
  // getOptions,
} from "@/utils/formfileds";

const validationSchema = Yup.object({
  emailOrNumber: Yup.string().required('Email or number is required'),
  password: Yup.string().required('Password is required'),
});

const LogInSupplierBlock = () => {
  return (
    <>
      <div className='mt-1 min-h-[77vh] w-full pb-10'>
        <div className="flex flex-col lg:flex-row gap-4 pt-10 justify-evenly items-center w-full">
          <div className='flex flex-col px-4 lg:px-16 w-full mt-10'>
            <h1 className='font-medium text-3xl text-black text-center'>Log in to Montery</h1>
            <p className='text-sm font-medium mt-4 ml-1 text-black text-center pb-4'>Enter your details below</p>

            <Formik
              initialValues={{ emailOrNumber: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({ values, isSubmitting, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-6">
                  <div className="mb-3">
                    <h2 className=" text-black text-small">Email or Phone No</h2>
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
                    <h2 className=" text-black text-small0">Password</h2>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className=" bg-blue-300"
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
                    <Link href={'forget-password'} className='text-sm text-blue-500 hover:cursor-pointer hover:underline '>Forget Password?</Link>
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

export default LogInSupplierBlock
