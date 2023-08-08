import React, { useRef, useState } from 'react'
import moment from 'moment'
import {
  FileUploadIcon,
  ThreeDotsIcon,
  XlsFileIcon,
} from '@/components/global/icons'
import { formatBytes } from '@/utils'

type Props = {
  btnText?: string
  getFiles?: (files: any[]) => void
}

const FileUpload: React.FC<Props> = ({ btnText, getFiles }) => {
  const fileInputRef = useRef<any>(null)
  let [filesToShow, setFilesToShow] = useState<any[]>([])

  const handleFileUpload = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let file = e.target.files
    let fileData: any[] = [].slice.call(file)
    setFilesToShow((filesToShow = filesToShow.concat(fileData[0])))
    getFiles && getFiles(filesToShow)
  }

  return (
    <>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e)}
      />
      <div className="flex flex-wrap">
        <div className="w-full">
          <button
            type="button"
            className="px-3 py-2 shadow-sm border border-black-300 rounded-md flex items-center gap-2 text-black-900 text-sm font-medium tracking-[0.1px]"
            onClick={() => handleFileUpload()}
          >
            <span>
              <FileUploadIcon />
            </span>
            <span>{btnText}</span>
          </button>
        </div>
        {filesToShow.length !== 0 && (
          <>
            {filesToShow.map((file: any, index: number) => {
              return (
                <React.Fragment key={`${file.name}${index}`}>
                  <div className="w-full flex flex-wrap items-start justify-between border-b border-b-[#ebeff2] py-4 gap-4">
                    <div className="flex gap-4">
                      <div>
                        <XlsFileIcon />
                      </div>
                      <div className="-mt-1">
                        <p className="text-sm font-medium text-black-900">
                          {file.name.split(' ').join('-').toLowerCase()}
                        </p>
                        <span className="text-xs text-black-900">
                          {moment(new Date(file.lastModified)).fromNow()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-end sm:w-auto w-full gap-3.5">
                      <div className="border border-[#cdd3d8] px-2">
                        <span className="text-[11px] font-medium text-[#242634] uppercase">
                          {formatBytes(file.size, 3)}
                        </span>
                      </div>
                      <div>
                        <button type="button">
                          <ThreeDotsIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </>
        )}
      </div>
    </>
  )
}

export default FileUpload
