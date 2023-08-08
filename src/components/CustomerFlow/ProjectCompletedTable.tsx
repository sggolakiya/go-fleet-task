import React from 'react'

const ProjectCompletedTable: React.FC = () => {
  return (
    <>
      <div className="overflow-x-auto pb-10">
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
                  total assets
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
                  assigned
                </th>
                <th
                  scope="col"
                  className="text-xs font-semibold uppercase text-[#6b7280] font-inter whitespace-nowrap"
                >
                  progress
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white relative">
              <p className="pt-3 text-2xl text-center w-full absolute font-bold text-black-900">
                No data found
              </p>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProjectCompletedTable
