import React, { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import cn from 'classnames'

type Props = {
  projectTitle: string
  projectStatus: string
  numberOfVehicles: string | number
  productsByCamera: string | number
  productsByGpsTracker: string | number
  projectLocation: string
  projectStartDate: string
}

const ProjectListRow: React.FC<Props> = ({
  projectTitle = 'Project 1',
  projectStatus = 'Active',
  numberOfVehicles = 4,
  productsByCamera = 2,
  productsByGpsTracker = 1,
  projectLocation = 'carson city',
  projectStartDate = '5 august, 2023',
}) => {
  const [showProjectDetail, setShowProjectDetail] = useState<boolean>(false)

  return (
    <>
      <div
        className="lg:col-start-3 lg:row-end-1 cursor-pointer"
        onClick={() => setShowProjectDetail(true)}
      >
        <div className="rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="flex flex-wrap pb-6">
            <div className="flex-auto pl-6 pt-6">
              <span className="mt-1 text-base font-semibold leading-6 text-gray-900">
                {projectTitle}
              </span>
            </div>
            <div className="flex-none self-end px-6 pt-4">
              <span
                className={cn(
                  'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
                  {
                    'text-primary ring-1 ring-inset ring-primary bg-primary bg-opacity-5':
                      projectStatus.toLowerCase() === 'active',
                    'text-blue-600 ring-1 ring-inset ring-blue-600 bg-blue-50':
                      projectStatus.toLowerCase() === 'to bid',
                    'text-red-500 ring-1 ring-inset ring-red-600 bg-red-50':
                      projectStatus.toLowerCase() === 'lost',
                  },
                )}
              >
                {projectStatus}
              </span>
            </div>
            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                nobis recusandae dolorum fuga maxime quos impedit sapiente id,
                voluptates perspiciatis optio dolores debitis libero hic nulla
                delectus error distinctio tenetur architecto itaque soluta illo
                pariatur voluptatum! Ratione non dolor distinctio iste nesciunt
                libero doloribus id error est. Omnis, quis facere...
              </p>
            </div>
          </div>
        </div>
      </div>
      {showProjectDetail && (
        <aside className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10">
          <div className="bg-white z-20 md:w-[600px] w-full shadow-2xl h-screen ml-auto p-6 overflow-y-auto">
            <div className="flex flex-wrap">
              <div className="w-full text-primary flex justify-between mb-6 items-center">
                <div>
                  <span
                    className={cn(
                      'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
                      {
                        'text-primary ring-1 ring-inset ring-primary bg-primary bg-opacity-5':
                          projectStatus.toLowerCase() === 'active',
                        'text-blue-600 ring-1 ring-inset ring-blue-600 bg-blue-50':
                          projectStatus.toLowerCase() === 'to bid',
                        'text-red-500 ring-1 ring-inset ring-red-600 bg-red-50':
                          projectStatus.toLowerCase() === 'lost',
                      },
                    )}
                  >
                    {projectStatus}
                  </span>
                </div>
                <div>
                  <button
                    type="button"
                    className="outline-none focus:outline-none"
                    onClick={() => setShowProjectDetail(false)}
                  >
                    <XMarkIcon className="w-8 h-8" />
                  </button>
                </div>
              </div>
              <div className="w-full border-b pb-5 mb-6">
                <h2 className="text-4xl font-semibold">Project 1</h2>
              </div>
              <div className="w-full mb-4">
                <span className="text-gray-600 font-semibold uppercase tracking-[1px]">
                  Summary
                </span>
              </div>
              <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-6 mb-6 border-b pb-5">
                <div>
                  <span className="text-sm uppercase text-gray-900 font-semibold tracking-[1px]">
                    No. of vehicles:{' '}
                    <span className="text-gray-500">{numberOfVehicles}</span>
                  </span>
                </div>
                <div>
                  <span className="text-sm uppercase text-gray-900 font-semibold tracking-[1px]">
                    Products by cameras:{' '}
                    <span className="text-gray-500">{productsByCamera}</span>
                  </span>
                </div>
                <div>
                  <span className="text-sm uppercase text-gray-900 font-semibold tracking-[1px]">
                    Products by gps trackers:{' '}
                    <span className="text-gray-500">
                      {productsByGpsTracker}
                    </span>
                  </span>
                </div>
                <div>
                  <span className="text-sm uppercase text-gray-900 font-semibold tracking-[1px]">
                    Location:{' '}
                    <span className="text-gray-500">{projectLocation}</span>
                  </span>
                </div>
                <div>
                  <span className="text-sm uppercase text-gray-900 font-semibold tracking-[1px]">
                    Start date:{' '}
                    <span className="text-gray-500">{projectStartDate}</span>
                  </span>
                </div>
              </div>
              <div className="w-full mb-4">
                <span className="text-gray-600 font-semibold uppercase tracking-[1px] md:text-base text-sm">
                  description
                </span>
              </div>
              <div className="w-full border-b pb-5 mb-6">
                <p className="leading-relaxed md:text-base text-sm text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  hic incidunt quo repudiandae. Veniam eum asperiores libero
                  velit eius quis quisquam corporis blanditiis nisi iste nihil
                  cum recusandae, omnis a modi! Quibusdam enim cupiditate maxime
                  optio accusamus. Nisi tenetur doloribus, eveniet corporis iure
                  quibusdam repellendus eum ab tempora nobis earum cupiditate. A
                  dicta dignissimos neque ipsa repellat sint mollitia? Assumenda
                  ad sit quod itaque consectetur reiciendis, nobis
                  necessitatibus ducimus? Quam aliquid pariatur saepe
                  necessitatibus maxime? Nam eius animi perspiciatis voluptas
                  repellendus quam, esse qui incidunt sed adipisci et ipsam
                  beatae quisquam cum quas doloremque eos deserunt sunt dicta.
                  Illum, ullam?
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  hic incidunt quo repudiandae. Veniam eum asperiores libero
                  velit
                  <br />
                  <br />
                  eius quis quisquam corporis blanditiis nisi iste nihil cum
                  recusandae, omnis a modi! Quibusdam enim cupiditate maxime
                  optio accusamus. Nisi tenetur doloribus, eveniet corporis iure
                  quibusdam repellendus eum ab tempora nobis earum cupiditate. A
                  dicta dignissimos neque ipsa repellat sint mollitia? Assumenda
                  ad sit quod itaque consectetur reiciendis, nobis
                  necessitatibus ducimus? Quam aliquid pariatur saepe
                  necessitatibus maxime? Nam eius animi perspiciatis voluptas
                  repellendus quam, esse qui incidunt sed adipisci et ipsam
                  beatae quisquam cum quas doloremque eos deserunt sunt dicta.
                  Illum, ullam?
                </p>
              </div>
              <div className="w-full">
                <button
                  type="button"
                  className={cn(
                    'h-12 w-full flex items-center justify-center text-lg font-semibold text-white rounded-2xl shadow-lg',
                    {
                      'bg-primary hover:bg-opacity-80':
                        projectStatus.toLowerCase() === 'active',
                      'bg-blue-600 hover:bg-opacity-80':
                        projectStatus.toLowerCase() === 'to bid',
                      'bg-gray-600 cursor-not-allowed select-none':
                        projectStatus.toLowerCase() === 'lost',
                    },
                  )}
                >
                  Submit Bid
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  )
}

export default ProjectListRow
