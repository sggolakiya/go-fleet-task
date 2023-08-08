import ActionBtn from '@/components/global/ActionBtn'
import FileUpload from '@/components/global/FileUpload'
import ImageUpload from '@/components/global/ImageUpload'
import InputField from '@/components/global/InputField'
import PrimaryBtn from '@/components/global/PrimaryBtn'
import RichTextEditor from '@/components/global/RichTextEditor'
import { TrashIcon } from '@/components/global/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EditProductFlow: React.FC = () => {
  let [productName, setProductName] = useState<string>('')
  let [productDesc, setProductDesc] = useState<{ __html: string }>({
    __html:
      'This shirt has classic fit with a crew neckline and short sleeves that make it perfect for everyday wear or for layering under a jacket or hoodie. The hemline falls just at the waist, giving it a flattering silhouette.',
  })
  let [_productImgs, setProductImgs] = useState<any[]>([])
  let [_productVideoInfo, setProductVideoInfo] = useState<any[]>([])
  let [_productDocs, setProductDocs] = useState<any[]>([])
  let [authorName, setAuthorName] = useState<string>('')
  let [authorPhoneNumber, setAuthorPhoneNumber] = useState<string>('')

  return (
    <>
      <div className="bg-white lg:px-10 px-4 pt-6 pb-10 rounded-2xl shadow-card-shadow lg:mt-0 lg:mx-0 mt-5 mx-5">
        <div className="flex flex-wrap border-b border-b-black-100 pb-[25px] mb-3">
          <div className="w-full flex flex-wrap items-center justify-between mb-7 gap-4">
            <div>
              <h2 className="text-[30px] font-bold text-white-text-primary">
                Edit product
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <button
                  type="button"
                  className="bg-white-50 px-6 py-2.5 text-white-500 font-medium tracking-primary-spacing rounded-lg"
                >
                  Duplicate
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-white-error-50 px-6 py-2.5 text-white-error-500 font-medium tracking-primary-spacing rounded-lg flex items-center gap-2"
                >
                  <span>
                    <TrashIcon />
                  </span>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mb-[25px]">
            <p className="text-white-primary tracking-primary-spacing font-medium">
              Product Details
            </p>
          </div>
          <div className="w-full flex flex-wrap gap-[25px]">
            <div className="md:w-2/3 w-full">
              <InputField
                fieldType="text"
                fieldLabel="Product name"
                placeholderText="Enter name of product"
                labelClassName="text-sm"
                value={productName}
                onChange={(e) => setProductName((productName = e.target.value))}
              />
            </div>
            <div className="md:w-2/3">
              <RichTextEditor
                editorLabel="Description"
                editorId="edit-product-desc"
                editorValue={productDesc}
                onChange={(e: any) =>
                  setProductDesc(
                    (productDesc = {
                      __html: e.target.innerHTML,
                    }),
                  )
                }
              />
            </div>
            <div className="w-full">
              <ImageUpload
                getUploadedImages={(imgs?: any[]) =>
                  setProductImgs((_productImgs = imgs!))
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap border-b border-b-black-100 pb-6 mb-3">
          <div className="w-full mb-3.5">
            <p className="text-white-text-primary font-medium tracking-primary-spacing">
              Resources
            </p>
          </div>
          <div className="w-full mb-5">
            <div className="mb-2">
              <span className="text-white-text-primary tracking-primary-spacing">
                Video Instruction
              </span>
            </div>
            <div>
              <FileUpload
                btnText="Upload Video Instruction"
                getFiles={(files?: any[]) =>
                  setProductVideoInfo((_productVideoInfo = files!))
                }
              />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-2">
              <span className="text-white-text-primary tracking-primary-spacing">
                Document
              </span>
            </div>
            <div>
              <FileUpload
                btnText="Attach Document"
                getFiles={(files?: any[]) =>
                  setProductDocs((_productDocs = files!))
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap border-b border-b-black-100 pb-6 mb-10">
          <div className="w-full border-b border-b-black-100 pb-6 mb-3">
            <div className="mb-3">
              <p className="text-white-text-primary font-medium tracking-primary-spacing">
                Install Steps
              </p>
            </div>
            <div className="mb-2">
              <span className="text-white-text-primary tracking-primary-spacing">
                Add Install Step
              </span>
            </div>
            <ActionBtn text="Add Install Step" className="border-black-300" />
          </div>
          <div className="w-full">
            <div className="mb-3">
              <p className="text-white-text-primary font-medium tracking-primary-spacing">
                Support
              </p>
            </div>
            <div className="mb-3 md:w-2/3">
              <InputField
                fieldType="text"
                fieldLabel="Contact Name"
                isRequired
                placeholderText="e.g johndoe"
                value={authorName}
                onChange={(e) => setAuthorName((authorName = e.target.value))}
              />
            </div>
            <div className="mb-3 md:w-2/3">
              <InputField
                fieldType="text"
                fieldLabel="Phone Number"
                isRequired
                placeholderText="e.g +612 123 123"
                value={authorPhoneNumber}
                onChange={(e) =>
                  setAuthorPhoneNumber((authorPhoneNumber = e.target.value))
                }
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex flex-wrap items-center gap-[15px]">
            <div>
              <Link to="/iot-vendor/our-products">
                <ActionBtn text="Save as Draft" />
              </Link>
            </div>
            <div>
              <Link to="/iot-vendor/our-products">
                <PrimaryBtn text="Save Product" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProductFlow
