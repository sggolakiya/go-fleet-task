import React, { useState } from 'react'
import ProjectTabs from '@/components/InstallerFlow/InstallerProjectsPage/ProjectTabs'
import { IProjectTabs } from '@/interface'
import InProgressTable from '@/components/InstallerFlow/InstallerProjectsPage/InProgressTable'
import ScheduledTable from '@/components/InstallerFlow/InstallerProjectsPage/ScheduledTable'
import AssignmentsTable from '@/components/InstallerFlow/InstallerProjectsPage/AssignmentsTable'
import ProjectCompletedTable from '@/components/InstallerFlow/InstallerProjectsPage/ProjectCompletedTable'

const InstallerProjectPage: React.FC = () => {
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
      {selectedProjectTab?.name.toLowerCase() === 'scheduled' && (
        <ScheduledTable />
      )}
      {selectedProjectTab?.name.toLowerCase() === 'needs assignment' && (
        <AssignmentsTable />
      )}
      {selectedProjectTab?.name.toLowerCase() === 'completed' && (
        <ProjectCompletedTable />
      )}
    </>
  )
}

export default InstallerProjectPage
