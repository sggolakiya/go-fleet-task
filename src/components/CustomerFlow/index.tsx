import React, { useState } from 'react'
import ProjectTabs from '@/components/CustomerFlow/ProjectTabs'
import { IProjectTabs } from '@/interface'
import InProgressTable from '@/components/CustomerFlow/InProgressTable'
import ProjectCompletedTable from '@/components/CustomerFlow/ProjectCompletedTable'
import ForAwardTable from '@/components/CustomerFlow/ForAwardTable'

const CustomerProjectPage: React.FC = () => {
  let [selectedProjectTab, setSelectedProjectTab] = useState<IProjectTabs>()

  return (
    <>
      <ProjectTabs
        onTabChange={(tab: IProjectTabs) =>
          setSelectedProjectTab((selectedProjectTab = tab))
        }
      />
      {selectedProjectTab?.name.toLowerCase() === 'in progress' && (
        <InProgressTable />
      )}
      {selectedProjectTab?.name.toLowerCase() === 'for award' && (
        <ForAwardTable />
      )}
      {selectedProjectTab?.name.toLowerCase() === 'completed' && (
        <ProjectCompletedTable />
      )}
    </>
  )
}

export default CustomerProjectPage
