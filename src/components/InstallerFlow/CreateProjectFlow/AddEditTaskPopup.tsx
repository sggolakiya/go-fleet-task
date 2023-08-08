import React from 'react'
import InputField from '@/components/global/InputField'
import SelectField from '@/components/global/SelectField'
import { CalendarIcon } from '@/components/global/icons'
import PrimaryBtn from '@/components/global/PrimaryBtn'

type Props = {
  taskType?: 'add' | 'edit'
  onCancelClick?: () => void
  onAddEditClick?: () => void
}

const AddEditTaskPopup: React.FC<Props> = ({
  taskType,
  onCancelClick,
  onAddEditClick,
}) => {
  return (
    <>
      <div className="relative z-50">
        <div className="fixed inset-0 md:h-screen w-full flex items-center justify-center bg-black-900/80">
          <div className="bg-white md:w-[500px] md:rounded-lg md:h-auto h-full flex flex-wrap items-start">
            <div className="flex flex-wrap gap-5 px-6 pt-4 pb-5 w-full">
              <div className="w-full">
                <h2 className="text-black-900 text-xl font-medium tracking-primary-spacing">
                  {taskType === 'add' ? 'Add New Task' : 'Edit Task'}
                </h2>
              </div>
              <div className="w-full">
                <InputField
                  fieldType="text"
                  fieldLabel="Task Name"
                  isRequired
                  placeholderText="e.g flatgreen"
                />
              </div>
              <div className="w-full">
                <SelectField
                  fieldLabel="Assigned Contact"
                  fieldOptions={['Install Manager', 'Product Manager']}
                />
              </div>
              <div className="w-full">
                <SelectField
                  fieldLabel="Status"
                  fieldOptions={['Open', 'Completed', 'Closed']}
                />
              </div>
              <div className="w-full">
                <InputField
                  hasIcon
                  icon={<CalendarIcon />}
                  fieldType="text"
                  fieldLabel="Due Date"
                  isRequired
                  placeholderText="Dd MM YYYY"
                />
              </div>
            </div>
            <div className="py-3 px-6 flex justify-end w-full bg-[#f7f7f9] md:rounded-b-lg md:self-start self-end">
              <div className="flex gap-5 items-center">
                <button
                  type="button"
                  className="px-4 py-2 bg-transparent outline-none focus:outline-none text-sm font-medium tracking-[0.1px]"
                  onClick={onCancelClick}
                >
                  Cancel
                </button>
                <PrimaryBtn
                  text={taskType === 'add' ? 'Save New Task' : 'Edit Task'}
                  onClick={onAddEditClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddEditTaskPopup
