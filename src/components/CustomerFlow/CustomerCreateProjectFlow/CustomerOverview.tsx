import React, { useState } from 'react'
import cn from 'classnames'
import { CalendarIcon } from '@/components/global/icons'
import ActionBtn from '@/components/global/ActionBtn'

type Props = {
  projectName?: string
  onProjectNameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  projectLocation?: string
  onProjectLocationChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  projectStartDate?: string
  onProjectStartDateChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  projectBidDueDate?: string
  onProjectBidDueDateChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  projectDesc?: string
  onProjectDescChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const CustomerOverview: React.FC<Props> = ({
  projectName,
  onProjectNameChange,
  projectLocation,
  onProjectLocationChange,
  projectStartDate,
  onProjectStartDateChange,
  projectBidDueDate,
  onProjectBidDueDateChange,
  projectDesc,
  onProjectDescChange,
}) => {
  let [isDisabled, setDisabled] = useState<boolean>(true)

  return (
    <>
      <div>
        <div>
          <h2 className="font-inter text-xl font-bold text-gray-900 tracking-[0.15px] mb-4">
            Detail CustomerOverview
          </h2>
        </div>
        <div>
          <form className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-black-900 mb-1 tracking-primary-spacing">
                    Project Name
                  </label>
                  <input
                    className="appearance-none block w-full disabled:bg-black-100 bg-white rounded-md py-2.5 px-3 focus:outline-none border border-black-200 disabled:text-black-400 placeholder:text-black-400 text-black-900 text-sm"
                    type="text"
                    value={projectName}
                    disabled={isDisabled}
                    onChange={onProjectNameChange}
                  />
                </div>
                <div>
                  <label className="text-sm text-black-900 mb-1 tracking-primary-spacing">
                    Project Location
                  </label>
                  <input
                    className="appearance-none block w-full disabled:bg-black-100 bg-white rounded-md py-2.5 px-3 focus:outline-none border border-black-200 placeholder:text-black-400 text-black-900 text-sm disabled:text-black-400"
                    type="text"
                    placeholder="Canada"
                    value={projectLocation}
                    onChange={onProjectLocationChange}
                    disabled={isDisabled}
                  />
                </div>
                <div>
                  <label className="text-sm text-black-900 mb-1 tracking-primary-spacing">
                    Start Date
                  </label>
                  <div
                    className={cn(
                      'flex items-center gap-3 rounded-md py-2.5 px-4 border border-black-200',
                      {
                        'bg-black-100': isDisabled,
                        'bg-white': !isDisabled,
                      },
                    )}
                  >
                    <div className="text-black-400">
                      <CalendarIcon />
                    </div>
                    <div className="flex-1">
                      <input
                        className="appearance-none focus:outline-none placeholder:text-black-400 text-black-900 text-sm border-0 bg-transparent outline-none focus:ring-0 p-0 w-full disabled:text-black-400"
                        type="text"
                        placeholder="01 JAN 2022"
                        value={projectStartDate}
                        onChange={onProjectStartDateChange}
                        disabled={isDisabled}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-black-900 mb-1 tracking-primary-spacing">
                    Bid Due Date
                  </label>
                  <div
                    className={cn(
                      'flex items-center gap-3 rounded-md py-2.5 px-4 border border-black-200',
                      {
                        'bg-black-100': isDisabled,
                        'bg-white': !isDisabled,
                      },
                    )}
                  >
                    <div className="text-black-400">
                      <CalendarIcon />
                    </div>
                    <div className="flex-1">
                      <input
                        className="appearance-none focus:outline-none placeholder:text-black-400 text-black-900 text-sm border-0 bg-transparent outline-none focus:ring-0 p-0 w-full disabled:text-black-400"
                        type="text"
                        placeholder="01 JAN 2022"
                        value={projectBidDueDate}
                        onChange={onProjectBidDueDateChange}
                        disabled={isDisabled}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <label className="text-sm text-black-900 mb-1 tracking-primary-spacing">
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full disabled:bg-black-100 bg-white rounded-md py-2.5 px-3 focus:outline-none border border-black-200 placeholder:text-black-400 text-black-900 text-sm disabled:text-black-400"
                  cols={30}
                  rows={14}
                  value={projectDesc}
                  onChange={onProjectDescChange}
                  disabled={isDisabled}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full flex justify-end mt-3 items-center">
          <ActionBtn
            text="Edit"
            onClick={() => setDisabled((isDisabled = !isDisabled))}
          />
        </div>
      </div>
    </>
  )
}

export default CustomerOverview
