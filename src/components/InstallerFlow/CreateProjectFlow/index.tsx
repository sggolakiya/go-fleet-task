import PrimaryBtn from '@/components/global/PrimaryBtn'
import React, { useState } from 'react'
import CreateProjectTabs from '@/components/InstallerFlow/CreateProjectFlow/CreateProjectTabs'
import { IProjectTabs } from '@/interface'
import AssetList from '@/components/InstallerFlow/CreateProjectFlow/AssetList'
import Overview from '@/components/InstallerFlow/CreateProjectFlow/Overview'
import MyBid from '@/components/InstallerFlow/CreateProjectFlow/MyBid'
import ProjectContacts from '@/components/InstallerFlow/CreateProjectFlow/ProjectContacts'
import Checklist from '@/components/InstallerFlow/CreateProjectFlow/Checklist'
import Breadcrumbs from '@/components/global/BreadCrumbs'
import BidSummary from '@/components/InstallerFlow/CreateProjectFlow/BidSummary'

const CreateProjectPage: React.FC = () => {
  let [selectedProjectTab, setSelectedProjectTab] = useState<IProjectTabs>()

  return (
    <>
      <div className="py-8 px-4 bg-[#f7f7f9] sticky lg:top-0 top-20 z-50">
        <Breadcrumbs />
      </div>
      <div className="lg:px-0 px-6">
        <div className="p-5 rounded-t-lg bg-white">
          <div className="flex flex-wrap">
            <div className="w-full flex sm:flex-nowrap flex-wrap items-center gap-5 justify-between mb-5">
              <div>
                <h2 className="text-xl text-gray-900 font-medium tracking-primary-spacing">
                  Nevada Phase 2
                </h2>
              </div>
              <div className="sm:w-auto w-full">
                <div>
                  <PrimaryBtn type="button" text="Publish for Bidding" />
                </div>
                <div className="flex sm:justify-end mt-2">
                  <button
                    type="button"
                    className="px-2.5 py-0.5 bg-[#f3f4f6] text-gray-600 text-xs text-center rounded-[10px]"
                  >
                    Draft
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <CreateProjectTabs
                onTabChange={(tab: IProjectTabs) =>
                  setSelectedProjectTab((selectedProjectTab = tab))
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:px-0 px-6">
        {selectedProjectTab?.name.toLowerCase() === 'asset list' && (
          <div className="bg-white px-5 pb-5">
            <AssetList />
          </div>
        )}
        {selectedProjectTab?.name.toLowerCase() === 'overview' && (
          <div className="bg-white mt-3 p-5">
            <Overview />
          </div>
        )}
        {selectedProjectTab?.name.toLowerCase() === 'my bid' && (
          <>
            <div className="bg-white my-3 p-5">
              <MyBid />
            </div>
            <div className="p-5 bg-white rounded-lg">
              <div className="w-full pt-4">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <BidSummary />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {selectedProjectTab?.name.toLowerCase() === 'project contacts' && (
          <div className="bg-white p-5">
            <ProjectContacts />
          </div>
        )}
        {selectedProjectTab?.name.toLowerCase() === 'checklist' && (
          <div className="bg-white p-5">
            <Checklist />
          </div>
        )}
      </div>
    </>
  )
}

export default CreateProjectPage
