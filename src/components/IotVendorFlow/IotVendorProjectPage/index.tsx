import React, { useState } from 'react'
import { IProjectTabs } from '@/interface'
import ActiveProductsTable from '@/components/IotVendorFlow/IotVendorProjectPage/ActiveProductsTable'
import ProjectTabs from '@/components/IotVendorFlow/IotVendorProjectPage/ProjectTabs'

const IotVenderProductPage: React.FC = () => {
  let [_selectedProjectTab, setSelectedProjectTab] = useState<IProjectTabs>()

  return (
    <>
      <ProjectTabs
        onTabChange={(tab: IProjectTabs) =>
          setSelectedProjectTab((_selectedProjectTab = tab))
        }
      />
      <ActiveProductsTable />
    </>
  )
}

export default IotVenderProductPage
