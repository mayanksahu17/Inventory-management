"use client"
import React from 'react'
import Image from 'next/image'
import { Formik, Field, ErrorMessage } from 'formik';
import { FcGoogle } from "react-icons/fc";
import {
  RenderInputField,
  RenderSelectField,
  getOptions,
} from "@/components/formfileds";
import * as Yup from 'yup';
import Link from 'next/link';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Name is required'),
  emailOrNumber: Yup.string().required('Email or number is required'),
  password: Yup.string().required('Password is required'),
});

const  SignUpSupplierBlock = () => {

  return (
    <>
      <div className='mt-1 w-full pb-10'>
        <div className="flex gap-4 pt-10 justify-evenly items-center">
          <div className="flex flex-col px-4 lg:px-16 w-full mt-10">
            <h1 className='font-medium text-3xl text-black text-center'>Create An Account</h1>
            <p className='text-sm font-medium mt-4 ml-1 text-black text-center'>Enter your Details</p>
            <Formik
              initialValues={{ firstName: '', emailOrNumber: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({ values, isSubmitting, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-6">
                  <div className="mb-3">
                    <h2 className="text-small text-black">First Name</h2>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Name"
                      className=""
                      value={values.firstName}
                      onChange={handleChange}
                      component={RenderInputField}
                    />
                  </div>
                  <div className="mb-3">
                    <h2 className="text-small text-black">Email or Phone No</h2>
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
                Already have account? &nbsp; <span className='font-medium underline'><Link href={'/log-in-supplier'}>Log in</Link></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpSupplierBlock
