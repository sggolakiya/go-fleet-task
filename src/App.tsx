import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Installer from '@/pages/Installer'
import HardwareProvider from '@/pages/HardwareProvider'
import Customer from '@/pages/Customer'
import Layout from '@/components/Layout'

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/installer" element={<Installer />} />
          <Route path="/hardware-provider" element={<HardwareProvider />} />
          <Route path="/customer" element={<Customer />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
