import React, { useState } from 'react'
import BidsTabs from '@/components/InstallerFlow/InstallerBidsPage/BidsTabs'
import { IProjectTabs } from '@/interface'
import BidsOpenTable from '@/components/InstallerFlow/InstallerBidsPage/BidsOpenTable'
import BidsWonTable from '@/components/InstallerFlow/InstallerBidsPage/BidsWonTable'
import BidsLostTable from '@/components/InstallerFlow/InstallerBidsPage/BidsLostTable'

const InstallerBidsPage: React.FC = () => {
  let [selectedBidsTab, setSelectedBidsTab] = useState<IProjectTabs>()

  return (
    <>
      <BidsTabs
        onTabChange={(tab: IProjectTabs) =>
          setSelectedBidsTab((selectedBidsTab = tab))
        }
      />
      {selectedBidsTab?.name.toLowerCase() === 'open' && <BidsOpenTable />}
      {selectedBidsTab?.name.toLowerCase() === 'won' && <BidsWonTable />}
      {selectedBidsTab?.name.toLowerCase() === 'lost' && <BidsLostTable />}
    </>
  )
}

export default InstallerBidsPage
