import React from 'react'
import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { ChevronNextIcon } from '@/components/global/icons'

const Breadcrumbs: React.FC = () => {
  const breadcrumbs = useBreadcrumbs().splice(2)

  return (
    <div className="flex items-center overflow-x-auto hide-scrollbar">
      <React.Fragment>
        {breadcrumbs.map(({ breadcrumb, key }) => (
          <>
            <Link
              to={key}
              className="flex items-center group whitespace-nowrap"
            >
              <p className="text-sm font-medium tracking-[0.1px] text-black-900 capitalize">
                {breadcrumb}
              </p>
              <div className="group-last:hidden">
                <ChevronNextIcon />
              </div>
            </Link>
          </>
        ))}
      </React.Fragment>
    </div>
  )
}

export default Breadcrumbs
