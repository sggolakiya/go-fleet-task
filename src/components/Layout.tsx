import React from 'react'
import Logo from '@/assets/logo.png'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <>
      <section className="relative container mx-auto my-10 px-6">
        <div className="flex flex-wrap">
          <div className="w-full flex justify-center mb-16">
            <img src={Logo} alt="" className="w-[280px]" />
          </div>
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default Layout
