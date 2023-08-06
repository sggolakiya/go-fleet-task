import React from 'react'

const BidsWonTable: React.FC = () => {
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
                  status
                </th>
                <th
                  scope="col"
                  className="text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
                >
                  completion date
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
                    Reno, Nevada
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
                <td className="p-4 whitespace-nowrap">
                  <span className="text-xs text-center truncate px-2.5 py-0.5 bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <span className="text-sm font-inter text-gray-500 truncate">
                    Nov 20, 2021
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter font-bold text-gray-900">
                    Nevada Phase 2
                  </span>
                  <span className="text-sm font-inter text-gray-500">
                    Reno, Nevada
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
                <td className="p-4 whitespace-nowrap">
                  <span className="text-xs text-center truncate px-2.5 py-0.5 bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <span className="text-sm font-inter text-gray-500 truncate">
                    Nov 20, 2021
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default BidsWonTable
