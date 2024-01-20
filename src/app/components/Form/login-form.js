'use client'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { validateEmail, validatePassword } from '@/app/helpers'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router = useRouter()
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (evt) => {
    setLoginData({ ...loginData, [evt.target.name]: evt.target.value })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    router.push('/pages/overview')
  }
  return (
    <form
      className="rounded-xl border border-grey py-4 md:py-10 px-4 md:px-20 w-10/12 md:w-max mx-auto "
      onSubmit={handleSubmit}
    >
      <div className="space-y-16 ">
        <div className="">
          <h3 className="font-medium text-lg">Login</h3>
          <p className="text-sm">Kindly enter your details to log in</p>
        </div>
        <div className="space-y-14 md:space-y-12 w-full md:w-80">
          <div className="relative">
            <Input
              title={'Email Address'}
              name="email"
              value={loginData.email}
              type="email"
              onChange={handleChange}
            />
            {loginData.email && !validateEmail(loginData.email) && (
              <p className="text-xs text-red-500 absolute right-0  md:-bottom-5">
                Incorrect Email
              </p>
            )}
          </div>
          <div className="relative">
            <Input
              title={'Password'}
              name="password"
              value={loginData.password}
              type="password"
              onChange={handleChange}
            />

            {loginData.password && !validatePassword(loginData.password) && (
              <p className="text-xs text-red-500 absolute right-0 md:-bottom-9">
                Password must be atleast 6 characters and must contain letters
                and numbers
              </p>
            )}
          </div>
          <Button
            text="Log in"
            disabled={
              !(
                loginData.email &&
                loginData.password &&
                validateEmail(loginData.email) &&
                validatePassword(loginData.password)
              )
            }
          />
          <p className="text-center text-primary-medium">
            Forgot your password?
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm ">
            <a className="font-medium underline">Privacy Policy</a> and{' '}
            <a className="font-medium underline"> Terms of services</a>
          </p>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
