import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import cn from 'classnames'
import { IUserType } from '@/interface'
import {
  CustomerIcon,
  InstallerIcon,
  IotVendorIcon,
} from '@/components/global/icons'
import { Link } from 'react-router-dom'
import RegistrationForm from '@/components/RegisterComponents/RegistrationForm'

const Register: React.FC = () => {
  const [userTypes, _setUserTypes] = useState<IUserType[]>([
    {
      id: 1,
      icon: () => <InstallerIcon />,
      userType: 'Installer',
      numberOfUsers: '100+',
    },
    {
      id: 2,
      icon: () => <IotVendorIcon />,
      userType: 'IoT Vendor',
      numberOfUsers: '100+',
    },
    {
      id: 3,
      icon: () => <CustomerIcon />,
      userType: 'Customer',
      numberOfUsers: '100+',
    },
  ])
  let [selectedUserType, setSelectedUserTypes] = useState<
    IUserType | undefined
  >()
  const [showRegistorForm, setShowRegisterForm] = useState<boolean>(false)

  return (
    <>
      <main className="md:h-screen md:py-0 py-10 w-full flex items-center justify-center">
        <header className="fixed top-0 inset-x-0 h-16 flex items-center md:justify-start justify-center px-[30px] md:shadow-header-shadow">
          <h1 className="text-primary text-xl font-bold tracking-[0.15px]">
            IoT <span className="text-title">Install Hub</span>
          </h1>
        </header>
        <div className="md:w-[585px] w-full md:rounded-3xl py-8 md:px-12 px-4 border-card-border-color md:border bg-white">
          {!showRegistorForm && (
            <div className="flex flex-wrap bg-white">
              <div className="w-full text-center mb-3">
                <h2 className="text-4xl font-bold text-black-900">
                  Let's Get Started
                </h2>
              </div>
              <div className="w-full text-center mb-8">
                <span className="text-black-400 text-lg">
                  Select you type of user
                </span>
              </div>
              <div className="w-full mb-8">
                <RadioGroup
                  value={selectedUserType}
                  onChange={setSelectedUserTypes}
                  className=""
                >
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-[18px]">
                    {userTypes.map((type: IUserType) => (
                      <RadioGroup.Option
                        key={type.id}
                        value={type}
                        className={({ active }) =>
                          cn(
                            'relative flex cursor-pointer rounded-2xl border bg-white p-4 shadow-sm focus:outline-none overflow-hidden',
                            {
                              'border-primary': active,
                              'border-card-border-color': !active,
                            },
                          )
                        }
                      >
                        {({ checked }) => (
                          <>
                            <span className="flex flex-1">
                              <span className="flex flex-col">
                                <div className="mb-[15px]">{type.icon()}</div>
                                <RadioGroup.Label
                                  as="span"
                                  className="block text-lg truncate font-bold text-black-900"
                                >
                                  {type.userType}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className="text-sm text-black-400 tracking-[0.15px]"
                                >
                                  {type.numberOfUsers} {type.userType}
                                </RadioGroup.Description>
                              </span>
                            </span>
                            <CheckCircleIcon
                              className={cn(
                                'h-5 w-5 text-primary absolute top-2 transition-all ease-in-out duration-200',
                                {
                                  '-right-20': !checked,
                                  'right-2': checked,
                                },
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
              <div className="w-full mb-4">
                <button
                  type="button"
                  className="h-11 disabled:bg-black-100 disabled:text-black-300 w-full flex items-center justify-center font-medium tracking-primary-spacing transition-all ease-in-out duration-200 bg-primary text-white rounded-md"
                  disabled={!selectedUserType}
                  onClick={() => setShowRegisterForm(true)}
                >
                  {!selectedUserType
                    ? 'Create Account'
                    : `Continue as ${selectedUserType.userType}`}
                </button>
              </div>
              <div className="w-full text-center">
                <p className="text-black tracking-primary-spacing">
                  have an account?{' '}
                  <span className="font-medium text-black-900">
                    <Link to="/sign-in">Login</Link>
                  </span>
                </p>
              </div>
            </div>
          )}
          {showRegistorForm && (
            <>
              <RegistrationForm
                formType={selectedUserType?.userType}
                onBackClick={() => setShowRegisterForm(false)}
              />
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default Register
