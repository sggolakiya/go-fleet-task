import ActionBtn from '@/components/global/ActionBtn'
import FileUpload from '@/components/global/FileUpload'
import InputField from '@/components/global/InputField'
import PrimaryBtn from '@/components/global/PrimaryBtn'
import TextArea from '@/components/global/TextArea'
import { CalendarIcon } from '@/components/global/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const BidSummary: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-4">
          <h2 className="text-xl text-gray-900 font-bold tracking-primary-spacing">
            My Bid Summary
          </h2>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 items-start pb-4 mb-5">
          <div className="flex flex-wrap gap-4">
            <div className="w-full">
              <InputField
                hasIcon
                icon={<CalendarIcon />}
                fieldType="text"
                fieldLabel="Proposed Start Date"
                placeholderText="Dd MM YYYY"
              />
            </div>
            <div className="w-full">
              <TextArea
                fieldLabel="Deployment Approach Summary"
                placeholderText="Write description here..."
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-full">
              <TextArea
                fieldLabel="Installer Relevant Experience"
                placeholderText="Write description here..."
              />
            </div>
            <div className="w-full">
              <FileUpload btnText="Click to upload file" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-5 px-6 py-3">
          <div>
            <Link to="/installer/bids">
              <ActionBtn text="Cancel" className="border-black-300" />
            </Link>
          </div>
          <div>
            <Link to="/installer/bids">
              <PrimaryBtn text="Submit Bid" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BidSummary
