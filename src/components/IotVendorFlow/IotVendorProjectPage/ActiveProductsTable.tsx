import React from 'react'

const ActiveProductsTable: React.FC = () => {
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
                picture
              </th>
              <th
                scope="col"
                className="p-4 text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
              >
                product name
              </th>
              <th
                scope="col"
                className="p-4 text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
              >
                average install time
              </th>
              <th
                scope="col"
                className="p-4 text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
              >
                install count
              </th>
              <th
                scope="col"
                className="text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
              >
                manage
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="p-4 whitespace-nowrap">
                <div className="flex -space-x-3">
                  <div className="z-10">
                    <img src="/avatar.png" alt="assignee" />
                  </div>
                  <div>
                    <img src="/avatar-2.png" alt="assignee" />
                  </div>
                </div>
              </td>
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
                  44 Assets
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
                  Manage Product
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4 whitespace-nowrap">
                <div className="flex -space-x-3">
                  <div className="z-10">
                    <img src="/avatar.png" alt="assignee" />
                  </div>
                  <div>
                    <img src="/avatar-2.png" alt="assignee" />
                  </div>
                </div>
              </td>
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
                  44 Assets
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
                  Manage Product
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4 whitespace-nowrap">
                <div className="flex -space-x-3">
                  <div className="z-10">
                    <img src="/avatar.png" alt="assignee" />
                  </div>
                  <div>
                    <img src="/avatar-2.png" alt="assignee" />
                  </div>
                </div>
              </td>
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
                  44 Assets
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
                  Manage Product
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4 whitespace-nowrap">
                <div className="flex -space-x-3">
                  <div className="z-10">
                    <img src="/avatar.png" alt="assignee" />
                  </div>
                  <div>
                    <img src="/avatar-2.png" alt="assignee" />
                  </div>
                </div>
              </td>
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
                  44 Assets
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
                  Manage Product
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4 whitespace-nowrap">
                <div className="flex -space-x-3">
                  <div className="z-10">
                    <img src="/avatar.png" alt="assignee" />
                  </div>
                  <div>
                    <img src="/avatar-2.png" alt="assignee" />
                  </div>
                </div>
              </td>
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
                  44 Assets
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
                  Manage Product
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ActiveProductsTable
