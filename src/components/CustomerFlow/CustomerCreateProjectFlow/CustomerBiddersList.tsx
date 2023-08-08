import ActionBtn from '@/components/global/ActionBtn'
import React from 'react'

type Props = {
  onViewBidClick?: () => void
}

const CustomerBiddersList: React.FC<Props> = ({ onViewBidClick }) => {
  return (
    <>
      <div className="w-full flex justify-between mb-5">
        <div>
          <h2 className="text-xl text-gray-900 tracking-primary-spacing">
            Installer Bidders
          </h2>
        </div>
        <div>
          <ActionBtn text="EMAIL RFQ TO" className="border-black-300" />
        </div>
      </div>
      <div className="w-full">
        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="relative">
                <table className="min-w-full table-fixed divide-y divide-black-200 ">
                  <thead className="bg-[#F9FAFB]">
                    <tr>
                      <th
                        scope="col"
                        className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                      >
                        installer company
                      </th>
                      <th
                        scope="col"
                        className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                      >
                        description
                      </th>
                      <th
                        scope="col"
                        className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                      >
                        total price
                      </th>
                      <th
                        scope="col"
                        className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                      >
                        action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black-200 bg-white">
                    <tr>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter font-bold">
                        AUTOSONICS
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-gray-500 tracking-primary-spacing whitespace-nowrap font-inter">
                        Dear,
                        <br />I am writing to express my strong interest in
                        the...
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        $ 1,200
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        <ActionBtn
                          text="View Bid"
                          className="border-black-300"
                          onClick={onViewBidClick}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter font-bold">
                        GOFLEET INSTALLER
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-gray-500 tracking-primary-spacing whitespace-nowrap font-inter">
                        Dear,
                        <br />I am writing to express my strong interest in
                        the...
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        $ 120
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        <ActionBtn
                          text="View Bid"
                          className="border-black-300"
                          onClick={onViewBidClick}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerBiddersList
