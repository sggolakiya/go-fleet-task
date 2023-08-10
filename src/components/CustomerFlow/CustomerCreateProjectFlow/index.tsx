import React, { useState } from 'react';
import cn from 'classnames';
import ActionBtn from '@/components/global/ActionBtn';
import FileUpload from '@/components/global/FileUpload';
import InputField from '@/components/global/InputField';
import PrimaryBtn from '@/components/global/PrimaryBtn';
import TextArea from '@/components/global/TextArea';
import { CalendarIcon, ChevronNextIcon } from '@/components/global/icons';
import CustomerProjectTabs from './CustomerProjectTabs';
import { IProjectTabs } from '@/interface';
import CustomerAssetList from '@/components/CustomerFlow/CustomerCreateProjectFlow/CustomerAssetList';
import CustomerOverview from '@/components/CustomerFlow/CustomerCreateProjectFlow/CustomerOverview';
import CustomerBiddersList from '@/components/CustomerFlow/CustomerCreateProjectFlow/CustomerBiddersList';
import CustomerProjectContactsList from '@/components/CustomerFlow/CustomerCreateProjectFlow/CustomerProjectContactList';
import CustomerChecklist from '@/components/CustomerFlow/CustomerCreateProjectFlow/CustomerCheckList';
import ViewBidLayout from '@/components/CustomerFlow/CustomerCreateProjectFlow/ViewBidLayout';
import { Link } from 'react-router-dom';
import { API } from '@/api';

const CustomerCreateProjectFlow: React.FC = () => {
  let [steps, setSteps] = useState<number>(1);
  let [projectName, setProjectName] = useState<string>('');
  let [projectLocation, setProjectLocation] = useState<string>('');
  let [projectStartDate, setProjectStartDate] = useState<string>('');
  let [projectBidDueDate, setProjectBidDueDate] = useState<string>('');
  let [projectDesc, setProjectDesc] = useState<string>('');
  let [selectedProjectTab, setSelectedProjectTab] = useState<IProjectTabs>();
  const [files, setFiles] = useState<any[]>([]);

  return (
    <>
      <div className='pb-8 pt-4 px-4 bg-[#f7f7f9] sticky lg:top-0 top-20 z-50 flex items-center justify-between'>
        <div>
          <div className='flex items-center overflow-x-auto hide-scrollbar'>
            <div className='flex items-center group whitespace-nowrap'>
              <p className='text-sm font-medium tracking-[0.1px] text-black-900 capitalize'>
                Create Project
              </p>
              <div>
                <ChevronNextIcon />
              </div>
              <p
                className={cn(
                  'text-sm font-medium tracking-[0.1px] capitalize',
                  {
                    'text-black-900': projectName,
                    'text-black-500': !projectName,
                  }
                )}
              >
                {projectName ? projectName : 'Project Name'}
              </p>
              {steps === 3 && (
                <>
                  <div>
                    <ChevronNextIcon />
                  </div>
                  <p className='text-sm font-medium tracking-[0.1px] text-black-900 capitalize'>
                    Bids
                  </p>
                  <div>
                    <ChevronNextIcon />
                  </div>
                  <p className='text-sm font-medium tracking-[0.1px] capitalize text-black-500'>
                    Autosonics Bid
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        {steps === 2 && (
          <div>
            <Link to='/customer/projects'>
              <PrimaryBtn text='Publish for Bidding' />
            </Link>
          </div>
        )}
      </div>
      {steps === 1 && (
        <>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const f = new FormData();
              f.append('projectName', projectName);
              f.append('projectLocation', projectLocation);
              f.append('projectStartDate', projectStartDate);
              f.append('projectBidDueDate', projectBidDueDate);
              f.append('projectDesc', projectDesc);
              files.forEach((file) => {
                f.append('files', file);
              });

              const data = await API.project.createProject(f);
              // setSteps((steps = steps + 1));
            }}
          >
            <div className='w-full p-5 bg-white rounded-lg mb-3'>
              <div className='w-full mb-4'>
                <h2 className='text-xl font-bold tracking-primary-spacing text-gray-900'>
                  Create New Project
                </h2>
              </div>
              <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-4 items-start'>
                <div className='flex flex-wrap gap-4'>
                  <div className='w-full'>
                    <InputField
                      fieldType='text'
                      fieldLabel='Project Name'
                      placeholderText='Nevada Phase 2'
                      value={projectName}
                      onChange={(e) =>
                        setProjectName((projectName = e.target.value))
                      }
                    />
                  </div>
                  <div className='w-full'>
                    <InputField
                      fieldType='text'
                      fieldLabel='Project Location'
                      placeholderText='Enter Address'
                      value={projectLocation}
                      onChange={(e) =>
                        setProjectLocation((projectLocation = e.target.value))
                      }
                    />
                  </div>
                  <div className='w-full'>
                    <InputField
                      fieldType='text'
                      fieldLabel='Start Date'
                      hasIcon
                      icon={<CalendarIcon />}
                      placeholderText='DD MM YYYY'
                      value={projectStartDate}
                      onChange={(e) =>
                        setProjectStartDate((projectStartDate = e.target.value))
                      }
                    />
                  </div>
                  <div className='w-full'>
                    <InputField
                      fieldType='text'
                      fieldLabel='Bid Due Date'
                      hasIcon
                      icon={<CalendarIcon />}
                      placeholderText='DD MM YYYY'
                      value={projectBidDueDate}
                      onChange={(e) =>
                        setProjectBidDueDate(
                          (projectBidDueDate = e.target.value)
                        )
                      }
                    />
                  </div>
                </div>
                <div className='flex flex-wrap gap-4'>
                  <div className='w-full'>
                    <TextArea
                      fieldLabel='Description'
                      placeholderText='Write your description here...'
                      value={projectDesc}
                      onChange={(e) =>
                        setProjectDesc((projectDesc = e.target.value))
                      }
                    />
                  </div>
                  <div className='w-full'>
                    <FileUpload
                      btnText='Click to upload file'
                      setFiles={setFiles}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-6 py-3 bg-white rounded-b-lg flex justify-end items-center'>
              <div className='flex flex-wrap gap-5 items-center'>
                <div>
                  <ActionBtn text='Cancel' className='border-black-300' />
                </div>
                <div>
                  <PrimaryBtn
                    text='Next'
                    type='submit'
                    onClick={async () => {}}
                  />
                </div>
              </div>
            </div>
          </form>
        </>
      )}
      {steps == 2 && (
        <>
          <div className='lg:px-0 px-6'>
            <div className='p-5 rounded-t-lg bg-white'>
              <div className='flex flex-wrap'>
                <div className='w-full flex sm:flex-nowrap flex-wrap items-center gap-5 justify-between mb-5'>
                  <div>
                    <h2 className='text-xl text-gray-900 font-medium tracking-primary-spacing capitalize'>
                      {projectName}
                    </h2>
                  </div>
                </div>
                <div className='w-full'>
                  <CustomerProjectTabs
                    onTabChange={(tab: IProjectTabs) =>
                      setSelectedProjectTab((selectedProjectTab = tab))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {selectedProjectTab?.name.toLowerCase() === 'asset list' && (
            <div className='bg-white px-5 pb-5'>
              <CustomerAssetList />
            </div>
          )}
          {selectedProjectTab?.name.toLowerCase() === 'overview' && (
            <div className='bg-white mt-3 p-5'>
              <CustomerOverview
                projectName={projectName}
                onProjectNameChange={(e) =>
                  setProjectName((projectName = e.target.value))
                }
                projectLocation={projectLocation}
                onProjectLocationChange={(e) =>
                  setProjectLocation((projectLocation = e.target.value))
                }
                projectStartDate={projectStartDate}
                onProjectStartDateChange={(e) =>
                  setProjectStartDate((projectStartDate = e.target.value))
                }
                projectBidDueDate={projectBidDueDate}
                onProjectBidDueDateChange={(e) =>
                  setProjectBidDueDate((projectBidDueDate = e.target.value))
                }
                projectDesc={projectDesc}
                onProjectDescChange={(e) =>
                  setProjectDesc((projectDesc = e.target.value))
                }
              />
            </div>
          )}
          {selectedProjectTab?.name.toLowerCase() === 'bidders' && (
            <div className='bg-white px-5 pb-5'>
              <CustomerBiddersList
                onViewBidClick={() => setSteps((steps = steps + 1))}
              />
            </div>
          )}
          {selectedProjectTab?.name.toLowerCase() === 'project contacts' && (
            <div className='bg-white px-5 pb-5'>
              <CustomerProjectContactsList />
            </div>
          )}
          {selectedProjectTab?.name.toLowerCase() === 'checklist' && (
            <div className='bg-white px-5 pb-5'>
              <CustomerChecklist />
            </div>
          )}
        </>
      )}
      {steps === 3 && (
        <>
          <ViewBidLayout
            onBackClick={() => setSteps((steps = steps - 1))}
            onAwardClick={() => setSteps((steps = steps - 1))}
          />
        </>
      )}
    </>
  );
};

export default CustomerCreateProjectFlow;

