import React, { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import {
  CogIcon,
  CreditCardIcon,
  HomeIcon,
  IDIcon,
  InfoCircleIcon,
} from '@/components/global/icons'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useLocation } from 'react-router-dom'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ChevronDownIcon } from '@/components/global/icons'

const Layout: React.FC = () => {
  const router = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleCreateProjectBtn: () => React.ReactNode = () => {
    if (
      router.pathname.includes('/projects') ||
      router.pathname.includes('/installers')
    ) {
      return (
        <div className="lg:block hidden">
          <button
            type="button"
            className="px-4 py-2.5 rounded-lg bg-primary text-sm font-medium text-white tracking-[0.1px]"
          >
            Create New Project
          </button>
        </div>
      )
    } else return null
  }

  return (
    <>
      <div className="bg-[#f7f7f9] h-screen">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <aside
                    className={cn(
                      'lg:w-[240px] w-[270px] bg-white self-stretch px-5 pt-9 h-screen fixed',
                    )}
                  >
                    <div className="flex flex-wrap">
                      <div className="w-full pl-[17px] mb-6">
                        <h1 className="text-primary text-xl font-bold tracking-[0.15px]">
                          IoT{' '}
                          <span className="text-title font-medium">
                            Install Hub
                          </span>
                        </h1>
                      </div>
                      <div className="w-full mb-5">
                        <div>
                          <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                              isActive
                                ? 'side-link-active'
                                : 'side-link-pending'
                            }
                          >
                            <HomeIcon />
                            <span>Projects</span>
                          </NavLink>
                        </div>
                        <div>
                          <NavLink
                            to="/bids"
                            className={({ isActive }) =>
                              isActive
                                ? 'side-link-active'
                                : 'side-link-pending'
                            }
                          >
                            <IDIcon />
                            <span>Bids</span>
                          </NavLink>
                        </div>
                        <div>
                          <NavLink
                            to="/product-training"
                            className={({ isActive }) =>
                              isActive
                                ? 'side-link-active'
                                : 'side-link-pending'
                            }
                          >
                            <CreditCardIcon />
                            <span>Product Training</span>
                          </NavLink>
                        </div>
                        <div>
                          <NavLink
                            to="/installers"
                            className={({ isActive }) =>
                              isActive
                                ? 'side-link-active'
                                : 'side-link-pending'
                            }
                          >
                            <CreditCardIcon />
                            <span>Installers</span>
                          </NavLink>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="px-5 mb-5">
                          <span className="text-[#082431] uppercase tracking-[1px] opacity-50 text-[11px]">
                            others
                          </span>
                        </div>
                        <div>
                          <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                              isActive
                                ? 'side-link-active'
                                : 'side-link-pending'
                            }
                          >
                            <CogIcon />
                            <span>Settings</span>
                          </NavLink>
                        </div>
                        <div>
                          <NavLink
                            to="/help"
                            className={({ isActive }) =>
                              isActive
                                ? 'side-link-active'
                                : 'side-link-pending'
                            }
                          >
                            <InfoCircleIcon />
                            <span>Help</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </aside>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="lg:block hidden">
          <aside
            className={cn(
              'lg:w-[240px] w-[270px] bg-white self-stretch px-5 pt-9 h-screen fixed',
            )}
          >
            <div className="flex flex-wrap">
              <div className="w-full pl-[17px] mb-6">
                <h1 className="text-primary text-xl font-bold tracking-[0.15px]">
                  IoT{' '}
                  <span className="text-title font-medium">Install Hub</span>
                </h1>
              </div>
              <div className="w-full mb-5">
                <div>
                  <NavLink
                    to="/installer/projects"
                    className={({ isActive }) =>
                      isActive ? 'side-link-active' : 'side-link-pending'
                    }
                  >
                    <HomeIcon />
                    <span>Projects</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/installer/bids"
                    className={({ isActive }) =>
                      isActive ? 'side-link-active' : 'side-link-pending'
                    }
                  >
                    <IDIcon />
                    <span>Bids</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/installer/product-training"
                    className={({ isActive }) =>
                      isActive ? 'side-link-active' : 'side-link-pending'
                    }
                  >
                    <CreditCardIcon />
                    <span>Product Training</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/installer/installers"
                    className={({ isActive }) =>
                      isActive ? 'side-link-active' : 'side-link-pending'
                    }
                  >
                    <CreditCardIcon />
                    <span>Installers</span>
                  </NavLink>
                </div>
              </div>
              <div className="w-full">
                <div className="px-5 mb-5">
                  <span className="text-[#082431] uppercase tracking-[1px] opacity-50 text-[11px]">
                    others
                  </span>
                </div>
                <div>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      isActive ? 'side-link-active' : 'side-link-pending'
                    }
                  >
                    <CogIcon />
                    <span>Settings</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/help"
                    className={({ isActive }) =>
                      isActive ? 'side-link-active' : 'side-link-pending'
                    }
                  >
                    <InfoCircleIcon />
                    <span>Help</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="lg:pl-[240px]">
          <nav className="px-5 lg:pt-10 pt-6 lg:pb-8 pb-6 sticky top-0 z-40 bg-white">
            <div className="flex justify-between items-center gap-4">
              <div>
                <button
                  type="button"
                  className="text-gray-700 lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <h2 className="text-xl font-bold tracking-primary-spacing text-gray-900 lg:block hidden capitalize">
                  {router.pathname.includes('/projects')
                    ? 'My Projects'
                    : router.pathname
                        .split('/installer/')
                        .join(' ')
                        .split('-')
                        .join(' ')}
                </h2>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <div className="relative flex gap-2 sm:w-[332px] border-b border-b-black-100">
                    <MagnifyingGlassIcon
                      className="pointer-events-none w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <input
                      className="h-full w-full border-0 text-black-900 placeholder:text-black-300 focus:ring-0 text-sm -ml-3 bg-transparent"
                      placeholder="Search..."
                      type="search"
                    />
                  </div>
                </div>
                {router.pathname === '/projects' && (
                  <div>
                    <button
                      type="button"
                      className="md:px-3 px-2 py-2 flex gap-2 items-center text-sm text-black-900 font-medium tracking-[0.1px] rounded-lg border border-black-100 shadow-sm bg-white truncate"
                    >
                      <span>Sort by</span>
                      <ChevronDownIcon />
                    </button>
                  </div>
                )}
                {toggleCreateProjectBtn()}
              </div>
            </div>
          </nav>
          <div className="transition-all ease-in-out duration-200">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
