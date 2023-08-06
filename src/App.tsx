import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Register from '@/pages/Register'
import InstallerLayout from '@/components/layout/InstallerLayout'
import IotVendorLayout from '@/components/layout/IotVendorLayout'
import Projects from '@/pages/InstallerPages/Projects'
import Bids from '@/pages/InstallerPages/Bids'
import ProductTraining from '@/pages/InstallerPages/ProductTraining'
import Installers from '@/pages/InstallerPages/Installers'
import Settings from '@/pages/Settings'
import Help from '@/pages/Help'
import OurProduct from '@/pages/IotVendorPages/OurProducts'

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route element={<InstallerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/installer/projects" element={<Projects />} />
          <Route path="/installer/bids" element={<Bids />} />
          <Route
            path="/installer/product-training"
            element={<ProductTraining />}
          />
          <Route path="/installer/installers" element={<Installers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Route>
        <Route element={<IotVendorLayout />}>
          <Route path="/iot-vendor/our-products" element={<OurProduct />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
