import React, { useState } from 'react'
import LoginBanner from '@/assets/login-banner.jpeg'
import Logo from '@/assets/logo.png'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, UserIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Register: React.FC = () => {
  let userTypes: string[] = ['installer', 'vendor', 'customer']
  let [selectedUserType, setSelectedUserType] = useState<string>('installer')

  const handleRegistration = (e: any) => {
    e.preventDefault()
    if (selectedUserType.toLowerCase() === 'installer') {
      window.location.pathname = '/installer'
    }
    if (selectedUserType.toLowerCase() === 'vendor') {
      window.location.pathname = '/vendor'
    }
    if (selectedUserType.toLowerCase() === 'customer') {
      window.location.pathname = '/customer'
    }
  }

  return (
    <>
      <div className="flex min-h-full h-screen flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto mx-auto"
                src={Logo}
                alt="Your Company"
              />
              <h2 className="mt-4 text-2xl font-semibold leading-9 tracking-tight text-gray-900 text-center">
                Sign in to your account
              </h2>
            </div>
            <div className="relative mb-10 mt-6">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center font-medium leading-6 mb-6">
                  <span className="bg-white px-6 text-gray-900">I am a</span>
                </div>
              </div>
              <RadioGroup
                value={selectedUserType}
                onChange={setSelectedUserType}
              >
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  {userTypes.map((userType: string, index: number) => (
                    <RadioGroup.Option
                      key={`${userType}${index}`}
                      value={userType}
                      className={({ active }) =>
                        classNames(
                          active
                            ? 'border-primary ring-2 ring-primary'
                            : 'border-gray-300',
                          'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <span className="flex flex-1">
                            <span className="flex flex-col">
                              <RadioGroup.Label
                                as="span"
                                className="block text-sm font-medium text-primary"
                              >
                                <UserIcon
                                  fill="none"
                                  stroke="currentColor"
                                  className="w-7 h-7"
                                />
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="mt-3 flex items-center text-sm text-gray-900 capitalize"
                              >
                                {userType}
                              </RadioGroup.Description>
                              <RadioGroup.Description
                                as="span"
                                className="mt-3 text-xs font-medium text-gray-500"
                              >
                                100+ {userType}s
                              </RadioGroup.Description>
                            </span>
                          </span>
                          <CheckCircleIcon
                            className={classNames(
                              !checked ? 'invisible' : '',
                              'h-5 w-5 text-primary absolute right-2 top-2',
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked ? 'border-primary' : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-lg',
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div>
              <div>
                <form className="space-y-6" onSubmit={handleRegistration}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-primary hover:text-primary hover:opacity-80"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={LoginBanner}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Register
