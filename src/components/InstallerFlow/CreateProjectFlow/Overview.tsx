import React from 'react'
import { CalendarIcon } from '@/components/global/icons'

const Overview: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <h2 className="font-inter text-xl font-bold text-gray-900 tracking-[0.15px] mb-4">
            Detail Overview
          </h2>
        </div>
        <div>
          <form className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-black-900 mb-1 tracking-primary-spacing">
                    Project Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-black-100 rounded-md py-2.5 px-3 focus:outline-none border border-black-200 placeholder:text-black-400 text-black-900 text-sm"
                    type="text"
                    placeholder="Nevada Phase 2"
                  />
                </div>
                <div>
                  <label className="text-sm text-black-900 mb-1 tracking-primary-spacing">
                    Project Location
                  </label>
                  <input
                    className="appearance-none block w-full bg-black-100 rounded-md py-2.5 px-3 focus:outline-none border border-black-200 placeholder:text-black-400 text-black-900 text-sm"
                    type="text"
                    placeholder="Canada"
                  />
                </div>
                <div>
                  <label className="text-sm text-black-900 mb-1 tracking-primary-spacing">
                    Start Date
                  </label>
                  <div className="flex items-center gap-3 bg-black-100 rounded-md py-2.5 px-4 border border-black-200">
                    <div className="text-black-400">
                      <CalendarIcon />
                    </div>
                    <div className="flex-1">
                      <input
                        className="appearance-none focus:outline-none placeholder:text-black-400 text-black-900 text-sm border-0 bg-transparent outline-none focus:ring-0 p-0 w-full"
                        type="text"
                        placeholder="01 JAN 2022"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-black-900 mb-1 tracking-primary-spacing">
                    Bid Due Date
                  </label>
                  <div className="flex items-center gap-3 bg-black-100 rounded-md py-2.5 px-4 border border-black-200">
                    <div className="text-black-400">
                      <CalendarIcon />
                    </div>
                    <div className="flex-1">
                      <input
                        className="appearance-none focus:outline-none placeholder:text-black-400 text-black-900 text-sm border-0 bg-transparent outline-none focus:ring-0 p-0 w-full"
                        type="text"
                        placeholder="01 JAN 2022"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <label className="text-sm text-black-900 mb-1 tracking-primary-spacing">
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full bg-black-100 rounded-md py-2.5 px-3 focus:outline-none border border-black-200 placeholder:text-black-400 text-black-900 text-sm"
                  cols={30}
                  rows={14}
                  placeholder="A highly skilled and creative freelance UX designer with a passion for crafting seamless and user-friendly digital experiences. With a strong background in user research, information architecture, and prototyping, I specialize in turning complex problems int intuitive and visually appealing solutions. My expertise includes conducting useability tests, wireframing, and creating interactive prototypes to ensure optimal user satisfaction. As a freelancer, I am dedicated to collaborating with clients to understand their unique needs and delivering captivating designs that enhance designs that enhance user engagement and drive business success"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Overview
