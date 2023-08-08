import React from 'react'
import MyBid from '@/components/InstallerFlow/CreateProjectFlow/MyBid'
import BidSummary from '@/components/InstallerFlow/CreateProjectFlow/BidSummary'
import Breadcrumbs from '@/components/global/BreadCrumbs'

const AddBidFlow: React.FC = () => {
  return (
    <>
      <div className="py-8 px-4 bg-[#f7f7f9] sticky lg:top-0 top-20 z-50">
        <Breadcrumbs />
      </div>
      <div>
        <div className="lg:mx-0 mx-4 p-5 rounded-lg bg-white mb-3">
          <div className="flex flex-wrap">
            <div className="w-full">
              <MyBid hasShareBtn />
            </div>
          </div>
        </div>
        <div className="lg:mx-0 mx-4 p-5 bg-white rounded-lg">
          <div className="w-full pt-4">
            <div className="flex flex-wrap">
              <div className="w-full">
                <BidSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBidFlow
