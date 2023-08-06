import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { IProjectTabs } from '@/interface'

type Props = {
  onTabChange?: (tab: IProjectTabs) => void
}

const ProjectTabs: React.FC<Props> = ({ onTabChange }) => {
  let [projectTabs, setProjectTabs] = useState<IProjectTabs[]>([
    {
      id: 1,
      name: 'Active Products',
      active: true,
      count: 5,
    },
    {
      id: 2,
      name: 'Archived',
      active: false,
      count: 4,
    },
    {
      id: 3,
      name: 'Draft',
      active: false,
    },
  ])

  let updateTabs = (tab: IProjectTabs, index: number) => {
    let newTabs = [...projectTabs]
    newTabs.forEach((tab) => (tab.active = false))
    newTabs[index]!.active = true
    setProjectTabs((projectTabs = newTabs))
    onTabChange && onTabChange(tab)
  }

  useEffect(() => {
    onTabChange &&
      onTabChange({
        id: 1,
        name: 'Active Products',
        active: true,
        count: 5,
      })
  }, [])

  return (
    <div className="pb-4 overflow-x-auto hide-scrollbar">
      <div>
        <nav className="flex gap-8" aria-label="Tabs">
          {projectTabs.map((tab: IProjectTabs, index: number) => (
            <span
              key={tab.name}
              className={cn(
                'flex whitespace-nowrap border-b-2 py-2 font-medium tracking-primary-spacing gap-3.5 cursor-pointer',
                {
                  'border-primary text-primary border-b-[3px]': tab.active,
                  'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700': !tab.active,
                },
              )}
              onClick={() => updateTabs(tab, index)}
            >
              {tab.name}
              {tab.count ? (
                <span
                  className={cn(
                    'rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center',
                    {
                      'bg-primary text-white': tab.active,
                      'bg-black-200 text-black-900': !tab.active,
                    },
                  )}
                >
                  {tab.count}
                </span>
              ) : null}
            </span>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default ProjectTabs
