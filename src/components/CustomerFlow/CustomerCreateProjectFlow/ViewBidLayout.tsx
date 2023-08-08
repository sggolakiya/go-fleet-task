import ActionBtn from '@/components/global/ActionBtn'
import PrimaryBtn from '@/components/global/PrimaryBtn'
import TextArea from '@/components/global/TextArea'
import {
  CalendarIcon,
  MapMarkerIcon,
  ShareIcon,
  XlsFileIcon,
} from '@/components/global/icons'
import { IAssetListFields } from '@/interface'
import React, { useState } from 'react'

type Props = {
  hasShareBtn?: boolean
  onShareClick?: () => void
  onBackClick?: () => void
  onAwardClick?: () => void
}

const ViewBidLayout: React.FC<Props> = ({
  hasShareBtn,
  onShareClick,
  onBackClick,
  onAwardClick,
}) => {
  let [projectAssetListFields, _setProjectAssetListFields] = useState<
    IAssetListFields[]
  >([
    {
      id: 1,
      vehicleType: 'Heavy Duty + Camera',
      quantity: '12',
      pricePerVehicles: '10 USD',
      subTotal: '120 USD',
    },
    {
      id: 2,
      vehicleType: 'Heavy Duty + Camera',
      quantity: '12',
      pricePerVehicles: '10 USD',
      subTotal: '120 USD',
    },
    {
      id: 3,
      vehicleType: 'Heavy Duty + Camera',
      quantity: '12',
      pricePerVehicles: '10 USD',
      subTotal: '120 USD',
    },
  ])

  return (
    <>
      <div className="bg-white p-5 rounded-lg mb-3">
        <div className="flex flex-wrap">
          <div className="w-full mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_224_2939)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.9717 0.402832C9.16656 0.402832 7.43544 1.10241 6.15905 2.34767L0 8.35646V11.1069C0 13.0501 0.855552 14.7983 2.21921 16.0126C0.855552 17.2269 0 18.9751 0 20.9183V23.6687L6.15905 29.6775C7.43544 30.9228 9.16656 31.6223 10.9717 31.6223C12.9634 31.6223 14.7554 30.7877 16 29.4573C17.2446 30.7877 19.0366 31.6223 21.0283 31.6223C22.8334 31.6223 24.5646 30.9228 25.841 29.6775L32 23.6687V20.9183C32 18.9751 31.1445 17.2269 29.7808 16.0126C31.1445 14.7983 32 13.0501 32 11.1069V8.35646L25.841 2.34767C24.5646 1.10241 22.8334 0.402832 21.0283 0.402832C19.0366 0.402832 17.2446 1.23751 16 2.56791C14.7554 1.23751 12.9634 0.402832 10.9717 0.402832ZM20.607 16.0126C20.5303 15.9443 20.455 15.8741 20.3813 15.8022L16 11.5277L11.6187 15.8022C11.545 15.8741 11.4697 15.9443 11.393 16.0126C11.4697 16.0809 11.545 16.151 11.6187 16.223L16 20.4974L20.3813 16.223C20.455 16.151 20.5303 16.0809 20.607 16.0126ZM17.7778 23.6687V24.9823C17.7778 26.7337 19.2331 28.1535 21.0283 28.1535C21.8904 28.1535 22.7172 27.8194 23.3268 27.2247L28.4445 22.2318V20.9183C28.4445 19.1668 26.9891 17.747 25.1939 17.747C24.3318 17.747 23.505 18.0811 22.8954 18.6758L17.7778 23.6687ZM14.2222 23.6687L9.10456 18.6758C8.49496 18.0811 7.66819 17.747 6.8061 17.747C5.01087 17.747 3.55555 19.1668 3.55555 20.9183V22.2318L8.6732 27.2247C9.2828 27.8194 10.1096 28.1535 10.9717 28.1535C12.7669 28.1535 14.2222 26.7337 14.2222 24.9823V23.6687ZM14.2222 7.04292V8.35646L9.10456 13.3493C8.49496 13.9441 7.66819 14.2782 6.8061 14.2782C5.01087 14.2782 3.55555 12.8583 3.55555 11.1069V9.79334L8.6732 4.8005C9.2828 4.20578 10.1096 3.87167 10.9717 3.87167C12.7669 3.87167 14.2222 5.29149 14.2222 7.04292ZM22.8954 13.3493L17.7778 8.35646V7.04292C17.7778 5.29149 19.2331 3.87167 21.0283 3.87167C21.8904 3.87167 22.7172 4.20578 23.3268 4.8005L28.4445 9.79334V11.1069C28.4445 12.8583 26.9891 14.2782 25.1939 14.2782C24.3318 14.2782 23.505 13.9441 22.8954 13.3493Z"
                    fill="#FF630B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_224_2939">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h2 className="text-gray-900 text-xl font-bold">
                AUTOSONICS PROPOSAL
              </h2>
            </div>
            {hasShareBtn && (
              <div>
                <ActionBtn
                  text="Share"
                  hasIcon
                  icon={<ShareIcon />}
                  onClick={onShareClick}
                />
              </div>
            )}
          </div>
          <div className="w-full mb-4">
            <p className="text-gray-900 font-medium tracking-primary-spacing mb-1">
              About Autosonics
            </p>
            <span className="text-gray-500 text-sm tracking-primary-spacing md:w-[654px] block">
              Brace yourself for a comedy extravaganza filled with witty humor
              and hilarious punchlines. Get lost in the enchanting voice of a
              singer whose melodious tones resonate with your soul. Witness a
              stunning makeup transformation that showcases intricate artistry
              and impeccable skill.
            </span>
          </div>
          <div className="w-full flex flex-wrap items-center gap-4 pb-4 mb-4 border-b border-b-black-200">
            <div className="flex items-center gap-2">
              <div className="text-black-500">
                <MapMarkerIcon />
              </div>
              <div>
                <p className="text-sm font-medium tracking-[0.1px] text-gray-900 -mb-1">
                  Site Location
                </p>
                <span className="text-gray-500 text-sm tracking-primary-spacing">
                  Canada
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-black-500">
                <CalendarIcon />
              </div>
              <div>
                <p className="text-sm font-medium tracking-[0.1px] text-gray-900 -mb-1">
                  Requested Start
                </p>
                <span className="text-gray-500 text-sm tracking-primary-spacing">
                  August 17, 2023
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-black-500">
                <CalendarIcon />
              </div>
              <div>
                <p className="text-sm font-medium tracking-[0.1px] text-gray-900 -mb-1">
                  Asset Summary
                </p>
                <span className="text-gray-500 text-sm tracking-primary-spacing">
                  500 Assets, 44 Cameras, 5 GPS, 4 Routers
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full mb-4">
              <p className="text-xl font-bold text-gray-900">
                Project Asset List Bid
              </p>
            </div>
            <div className="w-full grid grid-cols-1 gap-4 border-b border-b-black-100 mb-4 pb-4">
              {projectAssetListFields.map(
                (project: IAssetListFields, index: number) => {
                  return (
                    <React.Fragment key={`${project.id}${index}`}>
                      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                        <div>
                          <p className="text-white-text-primary font-medium tracking-[0.08px] mb-2">
                            Vehicle Type
                          </p>
                          <span className="text-sm tracking-[0.035px] text-white-text-secondary">
                            {project.vehicleType}
                          </span>
                        </div>
                        <div>
                          <p className="text-white-text-primary font-medium tracking-[0.08px] mb-2">
                            Quantity
                          </p>
                          <span className="text-sm tracking-[0.035px] text-white-text-secondary">
                            {project.quantity}
                          </span>
                        </div>
                        <div>
                          <p className="text-white-text-primary font-medium tracking-[0.08px] mb-2">
                            Price per vehicle
                          </p>
                          <span className="text-sm tracking-[0.035px] text-white-text-secondary">
                            {project.pricePerVehicles}
                          </span>
                        </div>
                        <div>
                          <p className="text-white-text-primary font-medium tracking-[0.08px] mb-2">
                            Subtotal
                          </p>
                          <span className="text-sm tracking-[0.035px] text-white-text-secondary">
                            {project.subTotal}
                          </span>
                        </div>
                      </div>
                    </React.Fragment>
                  )
                },
              )}
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <span className="text-xl font-medium tracking-primary-spacing text-gray-900">
                Total Price Assets List
              </span>
            </div>
            <div>
              <span className="text-xl font-medium tracking-primary-spacing text-gray-900">
                $360
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg mb-3">
        <div className="flex flex-wrap">
          <div className="w-full mb-4">
            <p className="text-xl font-bold text-gray-900">
              Installer Bid Summary
            </p>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-wrap items-start justify-between py-4 gap-4">
              <div className="flex gap-4">
                <div>
                  <XlsFileIcon />
                </div>
                <div className="-mt-1">
                  <p className="text-sm font-medium text-black-900">
                    user-journey-01.xls
                  </p>
                  <span className="text-xs text-black-900">2m ago</span>
                </div>
              </div>
              <div className="flex items-center justify-end sm:w-auto w-full gap-3.5">
                <div className="border border-[#cdd3d8] px-2">
                  <button
                    type="button"
                    className="text-[11px] font-medium text-[#242634] uppercase"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg mb-3">
        <div className="flex flex-wrap">
          <div className="w-full mb-4">
            <p className="text-xl font-bold text-gray-900">
              Note and attach file
            </p>
          </div>
          <div className="w-full mb-3">
            <TextArea
              fieldLabel="Note"
              placeholderText="Write your note here..."
            />
          </div>
          <div className="w-full flex justify-end">
            <PrimaryBtn text="Add Notes" />
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-5 rounded-b-lg flex justify-end">
        <div className="flex items-center gap-5">
          <div>
            <ActionBtn
              text="BACK"
              className="border-black-100"
              onClick={onBackClick}
            />
          </div>
          <div>
            <PrimaryBtn text="AWARD BIDDER" onClick={onAwardClick} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewBidLayout
