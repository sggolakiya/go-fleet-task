import React, { useLayoutEffect, useRef, useState } from 'react'
import cn from 'classnames'
import ActionBtn from '@/components/global/ActionBtn'
import { ChevronDownIcon } from '@/components/global/icons'
import { IAssetListTable } from '@/interface'

const tableData: IAssetListTable[] = [
  {
    assetName: 'Unit 234',
    plate: 'C3B434',
    driver: 'John Smith',
    products: 'Heavy',
    status: 'Draft',
    action: {
      text: 'Update',
      callbackFunction: () => {},
    },
  },
  {
    assetName: 'Unit 235',
    plate: 'C3B434',
    driver: 'Charlie',
    products: 'Light',
    status: 'Draft',
    action: {
      text: 'Update',
      callbackFunction: () => {},
    },
  },
]

const AssetList: React.FC = () => {
  const checkbox = useRef<any>(null)
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedTableRow, setSelectedTableRow] = useState<any[]>([])

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedTableRow.length > 0 && selectedTableRow.length < tableData.length
    setChecked(selectedTableRow.length === tableData.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedTableRow])

  function toggleAll() {
    setSelectedTableRow(checked || indeterminate ? [] : tableData)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  return (
    <>
      <div className="bg-white rounded-xl sm:p-3 grid md:grid-cols-3 mb-5">
        <div className="border md:rounded-tr-none rounded-t-lg border-gray-500 md:rounded-l-lg p-4">
          <p className="text-black-500 text-xs mb-1">Total Asset Completed</p>
          <h2 className="text-green-600 font-inter text-xl font-semibold">
            0 from 44
          </h2>
        </div>
        <div className="md:border-y md:border-x-0 border-x border-gray-500 p-4">
          <p className="text-black-500 text-xs mb-1">Project Timeline</p>
          <div className="flex items-center gap-1">
            <h2 className="text-red-600 font-inter text-xl font-semibold">
              -50d
            </h2>
            <span className="text-xs text-gray-500 pt-1">
              from April 22,2023
            </span>
          </div>
        </div>
        <div className="border md:rounded-bl-none rounded-b-lg border-gray-500 md:rounded-r-lg p-4">
          <p className="text-black-500 text-xs mb-1">Project Locations</p>
          <h2 className="text-blue-600 font-inter text-xl font-semibold">
            Start in 50 Days
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full flex items-center gap-3 mb-4">
          <div>
            <h2 className="text-gray-900 text-xl font-bold tracking-primary-spacing">
              Asset List
            </h2>
          </div>
          <div>
            <ActionBtn text="Sort By" hasIcon icon={<ChevronDownIcon />} />
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
                        <th scope="col" className="relative p-4 py-[25px]">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-black-200 border-2 text-primary focus:border-primary focus:ring-0 focus:ring-offset-0"
                            ref={checkbox}
                            checked={checked}
                            onChange={toggleAll}
                          />
                        </th>
                        <th
                          scope="col"
                          className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                        >
                          asset name
                        </th>
                        <th
                          scope="col"
                          className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                        >
                          plate
                        </th>
                        <th
                          scope="col"
                          className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                        >
                          driver
                        </th>
                        <th
                          scope="col"
                          className="min-w-[126px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                        >
                          products
                        </th>
                        <th
                          scope="col"
                          className="min-w-[227px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                        >
                          status
                        </th>
                        <th
                          scope="col"
                          className="min-w-[227px] py-[25px] px-4 text-left text-xs font-inter font-semibold text-gray-500 uppercase"
                        >
                          action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black-200 bg-white">
                      {tableData.map((data: IAssetListTable, key: number) => (
                        <tr
                          key={`${data.assetName}${key}`}
                          className={cn('relative', {
                            'bg-[#F5FFEF]': selectedTableRow.includes(data),
                          })}
                        >
                          <td className="px-4 py-[25px] flex justify-center">
                            {selectedTableRow.includes(data) && (
                              <div className="absolute inset-y-0 left-0 w-0.5 bg-primary" />
                            )}
                            <input
                              type="checkbox"
                              className="w-5 h-5 rounded border-black-200 border-2 text-primary focus:border-primary focus:ring-0 focus:ring-offset-0"
                              value={data.assetName}
                              checked={selectedTableRow.includes(data)}
                              onChange={(e) =>
                                setSelectedTableRow(
                                  e.target.checked
                                    ? [...selectedTableRow, data]
                                    : selectedTableRow.filter(
                                        (d) => d !== data,
                                      ),
                                )
                              }
                            />
                          </td>
                          <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap">
                            {data.assetName}
                          </td>
                          <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap">
                            {data.plate}
                          </td>
                          <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap">
                            {data.driver}
                          </td>
                          <td className="min-w-[126px] py-[25px] px-4 text-sm text-black-900 tracking-primary-spacing whitespace-nowrap">
                            {data.products}
                          </td>
                          <td className="min-w-[227px] whitespace-nowrap py-[25px] px-4">
                            <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs text-center">
                              {data.status}
                            </span>
                          </td>
                          <td className="min-w-[227px] whitespace-nowrap py-[25px] px-4 rounded-[10px]">
                            <ActionBtn text={data.action.text} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AssetList
