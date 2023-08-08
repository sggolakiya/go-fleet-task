import React, { useState } from 'react'
import ActionBtn from '@/components/global/ActionBtn'
import ChecklistTable from '@/components/InstallerFlow/CreateProjectFlow/ChecklistTable'
import AddEditTaskPopup from '@/components/InstallerFlow/CreateProjectFlow/AddEditTaskPopup'

const Checklist: React.FC = () => {
  const [showAddTaskPopup, setShowAddTaskPopup] = useState<boolean>(false)

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full flex justify-between items-center mb-5">
          <div>
            <h2 className="text-xl text-gray-900 font-bold tracking-primary-spacing">
              Task Checklist
            </h2>
          </div>
          <div>
            <ActionBtn
              text="Add Task"
              onClick={() => setShowAddTaskPopup(true)}
            />
          </div>
        </div>
        <div className="w-full">
          <ChecklistTable />
        </div>
      </div>
      {showAddTaskPopup && (
        <AddEditTaskPopup
          taskType="add"
          onCancelClick={() => setShowAddTaskPopup(false)}
          onAddEditClick={() => setShowAddTaskPopup(false)}
        />
      )}
    </>
  )
}

export default Checklist
