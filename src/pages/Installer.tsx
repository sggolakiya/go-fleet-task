import React, { useState } from 'react'
import ProjectListRow from '@/components/ProjectListRow'
import {
  activeProjectRows,
  installerProducts,
  lostProjectRows,
  toBidProjectRows,
} from '@/mock/InstallerMock'
import { IInstallerProductRow, IInstallerProjectRow } from '@/interface'
import ProductListRow from '@/components/ProductListRow'

interface ITabs {
  name: string
  href: string
  current: boolean
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Installer: React.FC = () => {
  let [tabs, setTabs] = useState<ITabs[]>([
    { name: 'Active', href: '#', current: true },
    { name: 'To bid', href: '#', current: false },
    { name: 'Lost', href: '#', current: false },
    { name: 'Products', href: '#', current: false },
  ])
  let [selectedTab, setSelectedTab] = useState<string>('products')

  const updateTabs = (index: number) => {
    let updatedTabs: ITabs[] = [...tabs]
    updatedTabs.forEach((tab: ITabs) => (tab.current = false))
    updatedTabs[index]!.current = true
    setSelectedTab((selectedTab = updatedTabs[index]!.name))
    setTabs((tabs = updatedTabs))
  }

  const renderProjectRows = () => {
    switch (selectedTab.toLowerCase()) {
      case 'active':
        return (
          <>
            {activeProjectRows.map(
              (project: IInstallerProjectRow, index: number) => (
                <React.Fragment key={`${project.id}${index}`}>
                  <div className="w-full mb-8">
                    <ProjectListRow
                      projectTitle={project.projectTitle}
                      projectStatus={project.projectStatus}
                      projectLocation={project.projectLocation}
                      projectStartDate={project.projectStartDate}
                      numberOfVehicles={project.numberOfVehicles}
                      productsByCamera={project.productsByCamera}
                      productsByGpsTracker={project.productsByGpsTracker}
                    />
                  </div>
                </React.Fragment>
              ),
            )}
          </>
        )
      case 'to bid':
        return (
          <>
            {toBidProjectRows.map(
              (project: IInstallerProjectRow, index: number) => (
                <React.Fragment key={`${project.id}${index}`}>
                  <div className="w-full mb-8">
                    <ProjectListRow
                      projectTitle={project.projectTitle}
                      projectStatus={project.projectStatus}
                      projectLocation={project.projectLocation}
                      projectStartDate={project.projectStartDate}
                      numberOfVehicles={project.numberOfVehicles}
                      productsByCamera={project.productsByCamera}
                      productsByGpsTracker={project.productsByGpsTracker}
                    />
                  </div>
                </React.Fragment>
              ),
            )}
          </>
        )
      case 'lost':
        return (
          <>
            {lostProjectRows.map(
              (project: IInstallerProjectRow, index: number) => (
                <React.Fragment key={`${project.id}${index}`}>
                  <div className="w-full mb-8">
                    <ProjectListRow
                      projectTitle={project.projectTitle}
                      projectStatus={project.projectStatus}
                      projectLocation={project.projectLocation}
                      projectStartDate={project.projectStartDate}
                      numberOfVehicles={project.numberOfVehicles}
                      productsByCamera={project.productsByCamera}
                      productsByGpsTracker={project.productsByGpsTracker}
                    />
                  </div>
                </React.Fragment>
              ),
            )}
          </>
        )
      case 'products':
        return (
          <>
            {installerProducts.map(
              (product: IInstallerProductRow, index: number) => (
                <React.Fragment key={`${product.id}${index}`}>
                  <div className="w-full mb-8">
                    <ProductListRow
                      productInstructions={product.productInstructions}
                      productVideo={product.productVideo}
                    />
                  </div>
                </React.Fragment>
              ),
            )}
          </>
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className="w-full mb-10">
        {/* Tabs */}
        <div className="border-b border-gray-200 pb-5 sm:pb-0">
          <h3 className="text-4xl font-semibold leading-6 text-gray-900">
            List of projects
          </h3>
          <div className="mt-10">
            <div className="sm:hidden">
              <label htmlFor="current-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="current-tab"
                name="current-tab"
                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                value={selectedTab}
                onChange={(e: any) => updateTabs(e.target.selectedIndex)}
              >
                {tabs.map((tab: ITabs, index: number) => (
                  <option key={index}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab: ITabs, index: number) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      tab.current
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'whitespace-nowrap border-b-2 px-1 pb-4 font-medium',
                    )}
                    aria-current={tab.current ? 'page' : undefined}
                    onClick={() => updateTabs(index)}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        {/* Tabs end */}
      </div>
      {renderProjectRows()}
    </>
  )
}

export default Installer
