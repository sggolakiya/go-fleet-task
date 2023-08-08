import ActionBtn from '@/components/global/ActionBtn'
import InputField from '@/components/global/InputField'
import {
  CalendarIcon,
  MapMarkerIcon,
  PlusIcon,
  ShareIcon,
} from '@/components/global/icons'
import { IAssetListFields } from '@/interface'
import React, { useState } from 'react'

type Props = {
  hasShareBtn?: boolean
  onShareClick?: () => void
}

const MyBid: React.FC<Props> = ({ hasShareBtn, onShareClick }) => {
  let [projectAssetListFields, setProjectAssetListFields] = useState<
    IAssetListFields[]
  >([
    {
      id: 1,
      vehicleType: 'Heavy Duty + Camera',
      quantity: '',
      pricePerVehicles: '',
      subTotal: '',
    },
    {
      id: 2,
      vehicleType: '',
      quantity: '',
      pricePerVehicles: '',
      subTotal: '',
    },
    {
      id: 3,
      vehicleType: '',
      quantity: '',
      pricePerVehicles: '',
      subTotal: '',
    },
  ])

  const updateListFields = (
    valueToEdit: 'vehicleType' | 'quantity' | 'pricePerVehicles' | 'subTotal',
    value: string,
    index: number,
  ) => {
    const updatedFields: IAssetListFields[] = [...projectAssetListFields]
    updatedFields[index]![valueToEdit] = value
    setProjectAssetListFields((projectAssetListFields = updatedFields))
  }

  const addNewListField = () => {
    let listFields: IAssetListFields[] = [...projectAssetListFields]
    listFields.push({
      vehicleType: '',
      quantity: '',
      pricePerVehicles: '',
      subTotal: '',
    })
    setProjectAssetListFields((projectAssetListFields = listFields))
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-gray-900 text-xl font-bold">
              Nevada State Government
            </h2>
          </div>
          {hasShareBtn && (
            <div>
              <ActionBtn
                text="Share"
                hasIcon
                icon={<ShareIcon />}
                onClick={onShareClick}
              />
            </div>
          )}
        </div>
        <div className="w-full mb-4">
          <p className="text-gray-900 font-medium tracking-primary-spacing mb-1">
            Project: Nevada Phase 2
          </p>
          <span className="text-gray-500 text-sm tracking-primary-spacing md:w-[654px] block">
            Description: Brace yourself for a comedy extravaganza filled with
            witty humor and hilarious punchlines. Get lost in the enchanting
            voice of a singer whose melodious tones resonate with your soul.
            Witness a stunning makeup transformation that showcases intricate
            artistry and impeccable skill.
          </span>
        </div>
        <div className="w-full flex flex-wrap items-center gap-4 pb-4 mb-4 border-b border-b-black-200">
          <div className="flex items-center gap-2">
            <div className="text-black-500">
              <MapMarkerIcon />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.1px] text-gray-900 -mb-1">
                Site Location
              </p>
              <span className="text-gray-500 text-sm tracking-primary-spacing">
                Canada
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-black-500">
              <CalendarIcon />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.1px] text-gray-900 -mb-1">
                Requested Start
              </p>
              <span className="text-gray-500 text-sm tracking-primary-spacing">
                August 17, 2023
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-black-500">
              <CalendarIcon />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.1px] text-gray-900 -mb-1">
                Asset Summary
              </p>
              <span className="text-gray-500 text-sm tracking-primary-spacing">
                500 Assets, 44 Cameras, 5 GPS, 4 Routers
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-full mb-4">
            <p className="text-xl font-bold text-gray-900">
              Project Asset List
            </p>
          </div>
          {projectAssetListFields.map(
            (field: IAssetListFields, index: number) => {
              return (
                <React.Fragment key={`${field.id}${index}`}>
                  <div className="w-full flex md:flex-nowrap flex-wrap gap-6 mb-6">
                    <div className="md:flex-1 w-full">
                      <InputField
                        fieldType="text"
                        fieldLabel="Vehicle Type"
                        isRequired
                        placeholderText="Heavy Duty + Cameras"
                        value={field.vehicleType}
                        onChange={(e) =>
                          updateListFields('vehicleType', e.target.value, index)
                        }
                      />
                    </div>
                    <div className="w-20">
                      <InputField
                        fieldType="text"
                        fieldLabel="Quantity"
                        isRequired
                        placeholderText="12"
                        value={field.quantity}
                        onChange={(e) =>
                          updateListFields('quantity', e.target.value, index)
                        }
                      />
                    </div>
                    <div className="w-[136px]">
                      <InputField
                        fieldType="text"
                        fieldLabel="Price per Vehicles"
                        placeholderText="10"
                        hasSymbol
                        symbol="usd"
                        value={field.pricePerVehicles}
                        onChange={(e) =>
                          updateListFields(
                            'pricePerVehicles',
                            e.target.value,
                            index,
                          )
                        }
                      />
                    </div>
                    <div className="w-[136px]">
                      <InputField
                        fieldType="text"
                        fieldLabel="Subtotal"
                        placeholderText="120"
                        hasSymbol
                        symbol="$"
                        value={field.subTotal}
                        onChange={(e) =>
                          updateListFields('subTotal', e.target.value, index)
                        }
                      />
                    </div>
                  </div>
                </React.Fragment>
              )
            },
          )}
        </div>
        <div className="w-full flex pb-4 mb-4 border-b border-b-black-100">
          <button
            type="button"
            className="px-2.5 py-2 flex gap-2 items-center text-primary"
            onClick={() => addNewListField()}
          >
            <span>
              <PlusIcon />
            </span>
            <span className="text-sm font-medium tracking-[0.1px]">
              Add New Line Item
            </span>
          </button>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <span className="text-sm font-medium tracking-[0.1px] text-gray-900">
              Total Price Assets List
            </span>
          </div>
          <div>
            <span className="text-sm font-medium tracking-[0.1px] text-gray-900">
              $360
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyBid
