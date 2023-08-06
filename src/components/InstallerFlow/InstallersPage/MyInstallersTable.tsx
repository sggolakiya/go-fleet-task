import React from 'react'

const MyInstallersTable: React.FC = () => {
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
                  name
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
                  role
                </th>
                <th
                  scope="col"
                  className="p-4 text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
                >
                  products trained
                </th>
                <th
                  scope="col"
                  className="text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
                >
                  install form
                </th>
                <th
                  scope="col"
                  className="text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
                >
                  edit
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-4 whitespace-nowrap flex items-center gap-2">
                  <div>
                    <img src="/avatar.png" alt="" />
                  </div>
                  <div>
                    <span className="block text-sm font-inter text-gray-900">
                      Johndoe@gmail.com
                    </span>
                    <span className="text-sm font-inter text-gray-500">
                      +18123219 123
                    </span>
                  </div>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter text-gray-900">
                    Reno, Nevada
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter text-gray-900">
                    Jr Installer
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter text-gray-900">
                    Camera, GPS
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-black-300 rounded-lg shadow-sm text-sm font-medium tracking-[0.1px]"
                  >
                    Share
                  </button>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-black-300 rounded-lg shadow-sm text-sm font-medium tracking-[0.1px]"
                  >
                    Comments
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap flex items-center gap-2">
                  <div>
                    <img src="/avatar.png" alt="" />
                  </div>
                  <div>
                    <span className="block text-sm font-inter text-gray-900">
                      Johndoe@gmail.com
                    </span>
                    <span className="text-sm font-inter text-gray-500">
                      +18123219 123
                    </span>
                  </div>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter text-gray-900">
                    Las Vegas, Nevada
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter text-gray-900">
                    Sr Installer
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="block text-sm font-inter text-gray-900">
                    Camera, GPS
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-black-300 rounded-lg shadow-sm text-sm font-medium tracking-[0.1px]"
                  >
                    Share
                  </button>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-black-300 rounded-lg shadow-sm text-sm font-medium tracking-[0.1px]"
                  >
                    Comments
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

export default MyInstallersTable
