'use client'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { validateEmail } from '@/app/helpers'
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
      className=" rounded-xl border border-grey py-10 px-20 w-max mx-auto "
      onSubmit={handleSubmit}
    >
      <div className="space-y-16 ">
        <div className="">
          <h3 className="font-medium text-lg">Login</h3>
          <p className="text-sm">Kindly enter your details to log in</p>
        </div>
        <div className="space-y-10 w-80">
          <Input
            title={'Email Address'}
            name="email"
            value={loginData.email}
            type="email"
            onChange={handleChange}
          />
          <div className="relative">
            <Input
              title={'Password'}
              name="password"
              value={loginData.password}
              type="password"
              onChange={handleChange}
            />
            {loginData.email && !validateEmail(loginData.email) && (
              <p className="text-xs font-bold text-primary absolute right-0 -bottom-5">
                Incorrect Email
              </p>
            )}
          </div>
          <Button
            text="Log in"
            disabled={
              !(
                loginData.email &&
                loginData.password &&
                validateEmail(loginData.email)
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
