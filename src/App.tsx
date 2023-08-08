import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Register from '@/pages/Register'
import InstallerLayout from '@/components/layout/InstallerLayout'
import IotVendorLayout from '@/components/layout/IotVendorLayout'
import Projects from '@/pages/InstallerPages/Projects'
import CustomerProjectPage from '@/pages/CustomerPages/Projects'
import Bids from '@/pages/InstallerPages/Bids'
import ProductTraining from '@/pages/InstallerPages/ProductTraining'
import Installers from '@/pages/InstallerPages/Installers'
import Settings from '@/pages/Settings'
import Help from '@/pages/Help'
import OurProduct from '@/pages/IotVendorPages/OurProducts'
import CreateProject from '@/pages/InstallerPages/CreateProject'
import AddBids from '@/pages/InstallerPages/AddBid'
import EditProduct from '@/pages/IotVendorPages/EditProduct'
import CustomerLayout from '@/components/layout/CustomerLayout'
import CustomerCreateProjectPage from '@/pages/CustomerPages/CreateProject'

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route element={<InstallerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/installer/projects" element={<Projects />} />
          <Route
            path="/installer/projects/create-project"
            element={<CreateProject />}
          />
          <Route path="/installer/bids" element={<Bids />} />
          <Route
            path="/installer/product-training"
            element={<ProductTraining />}
          />
          <Route path="/installer/installers" element={<Installers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/installer/bids/add-bid" element={<AddBids />} />
        </Route>
        <Route element={<IotVendorLayout />}>
          <Route path="/iot-vendor/our-products" element={<OurProduct />} />
        </Route>
        <Route element={<IotVendorLayout hasNavbar={false} />}>
          <Route
            path="/iot-vendor/our-products/:productID"
            element={<EditProduct />}
          />
        </Route>
        <Route element={<CustomerLayout />}>
          <Route path="/customer/projects" element={<CustomerProjectPage />} />
        </Route>
        <Route element={<CustomerLayout hasNavbar={false} />}>
          <Route
            path="/customer/projects/create-project"
            element={<CustomerCreateProjectPage />}
          />
        </Route>
      </Routes>
    </main>
  )
}

export default App
