import React from 'react'

const BidsLostTable: React.FC = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="md:block inline-block">
          <table className="divide-y divide-[#e5e7ee] min-w-full">
            <thead className="bg-[#F9FAFB] rounded-t-xl text-left">
              <tr>
                <th
                  scope="col"
                  className="p-4 text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
                >
                  project
                </th>
                <th
                  scope="col"
                  className="p-4 text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
                >
                  location
                </th>
                <th
                  scope="col"
                  className="p-4 text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
                >
                  start date
                </th>
                <th
                  scope="col"
                  className="p-4 text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
                >
                  comments
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter font-bold text-gray-900">
                    Nevada Phase 2
                  </span>
                  <span className="text-sm font-inter text-gray-500">
                    205 Assets
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter text-gray-900">
                    SpaceX
                  </span>
                  <span className="text-sm font-inter text-gray-500 truncate">
                    Canada
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="text-sm font-inter text-gray-500 truncate">
                    Apr 23, 2021
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-black-300 rounded-lg shadow-sm text-sm font-medium tracking-[0.1px]"
                  >
                    Add Comments
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter font-bold text-gray-900">
                    Nevada Phase 2
                  </span>
                  <span className="text-sm font-inter text-gray-500">
                    205 Assets
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter text-gray-900">
                    SpaceX
                  </span>
                  <span className="text-sm font-inter text-gray-500 truncate">
                    Canada
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="text-sm font-inter text-gray-500 truncate">
                    Apr 23, 2021
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-black-300 rounded-lg shadow-sm text-sm font-medium tracking-[0.1px]"
                  >
                    Add Comments
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default BidsLostTable
