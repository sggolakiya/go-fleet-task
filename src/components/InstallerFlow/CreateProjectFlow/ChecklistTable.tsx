import ActionBtn from '@/components/global/ActionBtn'
import { CheckIcon } from '@/components/global/icons'
import React, { useState } from 'react'
import AddEditTaskPopup from '@/components/InstallerFlow/CreateProjectFlow/AddEditTaskPopup'

const ChecklistTable: React.FC = () => {
  const [showEditTaskPopup, setShowEditTaskPopup] = useState<boolean>(false)

  return (
    <>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              <table className="min-w-full table-fixed divide-y divide-black-200 ">
                <thead className="bg-[#F9FAFB]">
                  <tr className="relative">
                    <th
                      scope="col"
                      className="md:min-w-[407px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase whitespace-nowrap"
                    >
                      task title
                    </th>
                    <th
                      scope="col"
                      className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase whitespace-nowrap"
                    >
                      assigned contact
                    </th>
                    <th
                      scope="col"
                      className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase whitespace-nowrap"
                    >
                      status
                    </th>
                    <th
                      scope="col"
                      className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase whitespace-nowrap"
                    >
                      due date
                    </th>
                    <th
                      scope="col"
                      className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase whitespace-nowrap"
                    >
                      action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black-200 bg-white">
                  <tr className="relative">
                    <td className="md:min-w-[407px] py-[25px] px-4 text-sm text-gray-900 tracking-primary-spacing whitespace-nowrap font-inter font-medium truncate">
                      <span className="flex gap-2 items-center">
                        <span className="text-primary">
                          <CheckIcon />
                        </span>
                        <span>
                          Create a Install, HDMI Cable and wire inventory in the
                          printer
                        </span>
                      </span>
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-sm text-gray-900 tracking-primary-spacing whitespace-nowrap font-inter">
                      Install Manager
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-xs text-gray-600 tracking-primary-spacing whitespace-nowrap font-inter">
                      <span className="px-2.5 py-0.5 bg-gray-100 rounded-[10px] text-center">
                        Open
                      </span>
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-500 tracking-primary-spacing whitespace-nowrap font-inter">
                      April 23, 2021
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                      <ActionBtn
                        text="Edit Task"
                        onClick={() => setShowEditTaskPopup(true)}
                      />
                    </td>
                  </tr>
                  <tr className="relative">
                    <td className="md:min-w-[407px] py-[25px] px-4 text-sm text-gray-900 tracking-primary-spacing whitespace-nowrap font-inter font-medium truncate">
                      <span className="flex gap-2 items-center">
                        <span className="text-primary">
                          <CheckIcon />
                        </span>
                        <span>
                          Create a Install, HDMI Cable and wire inventory in the
                          printer
                        </span>
                      </span>
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-sm text-gray-900 tracking-primary-spacing whitespace-nowrap font-inter">
                      Install Manager
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-xs text-green-800 tracking-primary-spacing whitespace-nowrap font-inter">
                      <span className="px-2.5 py-0.5 bg-green-100 rounded-[10px] text-center">
                        Completed
                      </span>
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-500 tracking-primary-spacing whitespace-nowrap font-inter">
                      April 23, 2021
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                      <ActionBtn
                        text="Edit Task"
                        onClick={() => setShowEditTaskPopup(true)}
                      />
                    </td>
                  </tr>
                  <tr className="relative">
                    <td className="md:min-w-[407px] py-[25px] px-4 text-sm text-gray-900 tracking-primary-spacing whitespace-nowrap font-inter font-medium truncate">
                      <span className="flex gap-2 items-center">
                        <span className="text-primary">
                          <CheckIcon />
                        </span>
                        <span>
                          Create a Install, HDMI Cable and wire inventory in the
                          printer
                        </span>
                      </span>
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-sm text-gray-900 tracking-primary-spacing whitespace-nowrap font-inter">
                      Install Manager
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-xs text-red-800 tracking-primary-spacing whitespace-nowrap font-inter">
                      <span className="px-2.5 py-0.5 bg-red-200 rounded-[10px] text-center">
                        Cancel
                      </span>
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-500 tracking-primary-spacing whitespace-nowrap font-inter">
                      April 23, 2021
                    </td>
                    <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                      <ActionBtn
                        text="Edit Task"
                        onClick={() => setShowEditTaskPopup(true)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showEditTaskPopup && (
        <AddEditTaskPopup
          taskType="edit"
          onCancelClick={() => setShowEditTaskPopup(false)}
          onAddEditClick={() => setShowEditTaskPopup(false)}
        />
      )}
    </>
  )
}

export default ChecklistTable
