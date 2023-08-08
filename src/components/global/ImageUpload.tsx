import React, { useRef, useState } from 'react'
import { CameraIcon, TrashIconShadow } from '@/components/global/icons'

type Props = {
  getUploadedImages?: (images?: any[]) => void
}

const ImageUpload: React.FC<Props> = ({ getUploadedImages }) => {
  const imageRef = useRef<any>(null)
  let [uploadedImgs, setUploadedImgs] = useState<any[]>([])
  const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let img: any = e.target.files
    let imgToShow: any[] = [].slice.call(img)
    setUploadedImgs((uploadedImgs = uploadedImgs.concat(imgToShow[0])))
    getUploadedImages && getUploadedImages(uploadedImgs)
  }

  const removeImg = (index: number) => {
    let updatedImgs = uploadedImgs.slice(0, index)
    setUploadedImgs((uploadedImgs = updatedImgs))
    getUploadedImages && getUploadedImages(uploadedImgs)
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-3">
          <span className="font-medium tracking-primary-spacing text-white-text-primary">
            Image
          </span>
        </div>
        <div className="flex flex-wrap gap-10 items-center">
          {uploadedImgs.length !== 0 && (
            <div className="flex flex-wrap gap-5">
              <>
                {uploadedImgs.map((img: any, key: number) => {
                  return (
                    <React.Fragment key={`${img}${key}`}>
                      <div className="w-20 h-20 relative rounded-xl">
                        <img
                          src={URL.createObjectURL(img)}
                          alt=""
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <button
                          type="button"
                          className="absolute -top-4 -right-5 z-10"
                          onClick={() => removeImg(key)}
                        >
                          <TrashIconShadow />
                        </button>
                      </div>
                    </React.Fragment>
                  )
                })}
              </>
            </div>
          )}
          <div>
            <input
              type="file"
              ref={imageRef}
              className="hidden"
              onChange={handleImgUpload}
            />
            <div className="mb-3">
              <button
                type="button"
                className="flex items-center justify-center bg-white-50 text-white-500 w-[129px] h-10 text-sm tracking-[0.1px] font-medium rounded-md"
                onClick={() => imageRef.current.click()}
              >
                <span className="flex items-center gap-2">
                  <span>
                    <CameraIcon />
                  </span>
                  <span>Upload</span>
                </span>
              </button>
            </div>
            <div>
              <span className="text-sm text-white-text-secondary tracking-primary-spacing">
                The optimal product image size is at least 800x800 ox.
                <br />
                PNG and JPG format is supported.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageUpload
