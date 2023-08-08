import ActionBtn from '@/components/global/ActionBtn'
import React from 'react'

const CustomerProjectContactsList: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-between mb-5">
        <div>
          <h2 className="text-xl text-gray-900 tracking-primary-spacing">
            Project Contacts
          </h2>
        </div>
        <div>
          <ActionBtn text="Add Contact" className="border-black-300" />
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
                        contact name
                      </th>
                      <th
                        scope="col"
                        className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                      >
                        role
                      </th>
                      <th
                        scope="col"
                        className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                      >
                        email
                      </th>
                      <th
                        scope="col"
                        className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                      >
                        phone
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
                        John Doe
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        Project Manager
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        Johndoe@gmail.com
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        +2161 123182
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        <ActionBtn
                          text="Reset Password"
                          className="border-black-300"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter font-bold">
                        Jani Joe
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        Install Manager
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        janijoe@gmail.com
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        +2161 123182
                      </td>
                      <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap font-inter">
                        <ActionBtn
                          text="Reset Password"
                          className="border-black-300"
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

export default CustomerProjectContactsList
