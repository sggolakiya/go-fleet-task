import ActionBtn from '@/components/global/ActionBtn'
import React from 'react'

const InProgressTable: React.FC = () => {
  return (
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
                timeline
              </th>
              <th
                scope="col"
                className="p-4 text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
              >
                progress
              </th>
              <th
                scope="col"
                className="p-4 text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
              >
                comments
              </th>
              <th
                scope="col"
                className="text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
              >
                action
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
                  5 Days
                </span>
                <span className="text-sm font-inter text-gray-500 truncate">
                  April 23, 2021
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter text-gray-900">
                  4 of 55
                </span>
                <span className="text-sm font-inter text-gray-500 truncate">
                  Assets Complete
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="text-sm font-inter text-gray-500 truncate">
                  5 open
                </span>
              </td>
              <td className="py-4 whitespace-nowrap">
                <ActionBtn text="Manage Project" className="border-black-300" />
              </td>
            </tr>
            <tr>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter font-bold text-gray-900">
                  Nevada Phase 3
                </span>
                <span className="text-sm font-inter text-gray-500">
                  Reno, Nevada
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter text-gray-900">
                  200 Days
                </span>
                <span className="text-sm font-inter text-gray-500 truncate">
                  April 24, 2021
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter text-gray-900">
                  4 of 55
                </span>
                <span className="text-sm font-inter text-gray-500 truncate">
                  Assets Complete
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="text-sm font-inter text-gray-500 truncate">
                  4 open
                </span>
              </td>
              <td className="py-4 whitespace-nowrap">
                <ActionBtn text="Manage Project" className="border-black-300" />
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
                  5 Days
                </span>
                <span className="text-sm font-inter text-gray-500 truncate">
                  April 23, 2021
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter text-gray-900">
                  4 of 55
                </span>
                <span className="text-sm font-inter text-gray-500 truncate">
                  Assets Complete
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="text-sm font-inter text-gray-500 truncate">
                  5 open
                </span>
              </td>
              <td className="py-4 whitespace-nowrap">
                <ActionBtn text="Manage Project" className="border-black-300" />
              </td>
            </tr>
            <tr>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter font-bold text-gray-900">
                  Nevada Phase 3
                </span>
                <span className="text-sm font-inter text-gray-500">
                  Reno, Nevada
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter text-gray-900">
                  200 Days
                </span>
                <span className="text-sm font-inter text-gray-500 truncate">
                  April 24, 2021
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter text-gray-900">
                  4 of 55
                </span>
                <span className="text-sm font-inter text-gray-500 truncate">
                  Assets Complete
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="text-sm font-inter text-gray-500 truncate">
                  4 open
                </span>
              </td>
              <td className="py-4 whitespace-nowrap">
                <ActionBtn text="Manage Project" className="border-black-300" />
              </td>
            </tr>
            <tr>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter font-bold text-gray-900">
                  Nevada Phase 3
                </span>
                <span className="text-sm font-inter text-gray-500">
                  Reno, Nevada
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter text-gray-900">
                  200 Days
                </span>
                <span className="text-sm font-inter text-gray-500 truncate">
                  April 24, 2021
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="block text-sm font-inter text-gray-900">
                  4 of 55
                </span>
                <span className="text-sm font-inter text-gray-500 truncate">
                  Assets Complete
                </span>
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className="text-sm font-inter text-gray-500 truncate">
                  4 open
                </span>
              </td>
              <td className="py-4 whitespace-nowrap">
                <ActionBtn text="Manage Project" className="border-black-300" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InProgressTable
