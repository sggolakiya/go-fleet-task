import React, { useState } from 'react'
import InputField from '@/components/global/InputField'
import { ICustomerForm, IInstallerForm, IIotVendorForm } from '@/interface'
import SelectField from '@/components/global/SelectField'
import { UploadIcon } from '@/components/global/icons'

type Props = {
  formType?: string
  onBackClick?: () => void
}

const RegistrationForm: React.FC<Props> = ({
  formType = 'iot vendor',
  onBackClick,
}) => {
  let [installerFormValues, setInstallerFormValues] = useState<IInstallerForm>({
    companyName: '',
    companyAddress: '',
    installManagerContactName: '',
    phoneNumber: '',
    email: '',
    billingEmail: '',
    projectsWithProductsFor: '',
    certifyInsurance: false,
  })
  let [customerFormValues, setCustomerFormValues] = useState<ICustomerForm>({
    companyName: '',
    companyAddress: '',
    fleetProjectManagerContact: '',
    serviceCoordinatorContact: '',
  })
  let [iotVendorFormValues, setIotVendorFormValues] = useState<IIotVendorForm>({
    companyName: '',
    companyAddress: '',
    productManager: '',
  })

  const updateFormValues = (
    formValues: any,
    setFormValues: any,
    valueToEdit: any,
    value: any,
  ) => {
    let updatedFormValues = { ...formValues }
    updatedFormValues[valueToEdit] = value
    setFormValues((formValues = updatedFormValues))
  }

  const handleInstallerFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('userType', 'installer')
    window.location.pathname = '/installer/projects'
  }

  const handleIotVendorFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('userType', 'iotVendor')
    window.location.pathname = '/iot-vendor/our-products'
  }

  const handleCustomerFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('userType', 'customer')
    window.location.pathname = '/customer/projects'
  }

  return (
    <>
      {formType.toLowerCase() === 'installer' && (
        <form onSubmit={handleInstallerFormSubmit}>
          <div className="flex flex-wrap">
            <div className="w-full md:text-left text-center mb-6">
              <h2 className="md:text-4xl text-[30px] text-black-900 font-bold capitalize">
                {formType} Information
              </h2>
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Company Name"
                isRequired
                fieldType="text"
                placeholderText="e.g flatgreen"
                value={installerFormValues.companyName}
                onChange={(e) =>
                  updateFormValues(
                    installerFormValues,
                    setInstallerFormValues,
                    'companyName',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Company Address"
                fieldType="text"
                placeholderText="Enter your company address"
                value={installerFormValues.companyAddress}
                onChange={(e) =>
                  updateFormValues(
                    installerFormValues,
                    setInstallerFormValues,
                    'companyAddress',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Install Manager Contact Name"
                isRequired
                fieldType="text"
                placeholderText="e.g johndoe"
                value={installerFormValues.installManagerContactName}
                onChange={(e) =>
                  updateFormValues(
                    installerFormValues,
                    setInstallerFormValues,
                    'installManagerContactName',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Phone Number"
                isRequired
                fieldType="text"
                placeholderText="e.g +1828 1929"
                value={installerFormValues.phoneNumber}
                onChange={(e) =>
                  updateFormValues(
                    installerFormValues,
                    setInstallerFormValues,
                    'phoneNumber',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Email"
                isRequired
                fieldType="email"
                placeholderText="e.g johndoe@mail.com"
                value={installerFormValues.email}
                onChange={(e) =>
                  updateFormValues(
                    installerFormValues,
                    setInstallerFormValues,
                    'email',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Billing Email"
                fieldType="email"
                placeholderText="e.g 123 123 123"
                value={installerFormValues.billingEmail}
                onChange={(e) =>
                  updateFormValues(
                    installerFormValues,
                    setInstallerFormValues,
                    'billingEmail',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <SelectField
                fieldLabel="Send me Projects with Products for:"
                fieldOptions={['Product 1', 'Product 2', 'Product 3']}
                value={installerFormValues.projectsWithProductsFor}
                onChange={(e) =>
                  updateFormValues(
                    installerFormValues,
                    setInstallerFormValues,
                    'projectsWithProductsFor',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <button
                type="button"
                className="outline-none focus:outline-none py-2.5 px-3 flex gap-2.5 text-black-900 tracking-primary-spacing font-medium rounded-xl border border-black-300 shadow-sm"
              >
                <span>
                  <UploadIcon />
                </span>
                <span>Upload Company Logo</span>
              </button>
            </div>
            <div className="w-full mb-6">
              <button
                type="button"
                className="outline-none focus:outline-none py-2.5 px-3 flex gap-2.5 text-black-900 tracking-primary-spacing font-medium rounded-xl border border-black-300 shadow-sm"
              >
                <span>
                  <UploadIcon />
                </span>
                <span>Upload Upload Document Insurance</span>
              </button>
            </div>
            <div className="w-full mb-6">
              <div className="relative flex items-start cursor-pointer">
                <div className="flex h-6 items-center">
                  <input
                    id="certify"
                    type="checkbox"
                    className="h-5 w-5 rounded border-2 border-black-500 text-primary focus:border-primary ring-0 ring-offset-0 outline-none focus:outline-none focus:ring-0 focus:ring-offset-0"
                    checked={installerFormValues.certifyInsurance}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updateFormValues(
                        installerFormValues,
                        setInstallerFormValues,
                        'certifyInsurance',
                        e.target.checked,
                      )
                    }
                  />
                </div>
                <div className="ml-2">
                  <label
                    htmlFor="certify"
                    className="text-black-400 tracking-primary-spacing"
                  >
                    I Certify I have Insurance Liability Coverage
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="h-11 disabled:bg-black-100 disabled:text-black-300 w-full flex items-center justify-center font-medium tracking-primary-spacing transition-all ease-in-out duration-200 bg-primary text-white rounded-md"
                disabled={!installerFormValues.certifyInsurance}
              >
                Continue as a Installer
              </button>
            </div>
          </div>
        </form>
      )}
      {formType.toLowerCase() === 'customer' && (
        <form onSubmit={handleCustomerFormSubmit}>
          <div className="flex flex-wrap">
            <div className="w-full md:text-left text-center mb-6">
              <h2 className="md:text-4xl text-[30px] text-black-900 font-bold capitalize">
                {formType} Information
              </h2>
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Company Name"
                isRequired
                fieldType="text"
                placeholderText="e.g flatgreen"
                value={customerFormValues.companyName}
                onChange={(e) =>
                  updateFormValues(
                    customerFormValues,
                    setCustomerFormValues,
                    'companyName',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Company Address"
                fieldType="text"
                placeholderText="Enter your company address"
                value={customerFormValues.companyAddress}
                onChange={(e) =>
                  updateFormValues(
                    customerFormValues,
                    setCustomerFormValues,
                    'companyAddress',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Fleet Project Manager Contact Name"
                isRequired
                fieldType="text"
                placeholderText="e.g johndoe"
                value={customerFormValues.fleetProjectManagerContact}
                onChange={(e) =>
                  updateFormValues(
                    customerFormValues,
                    setCustomerFormValues,
                    'fleetProjectManagerContact',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Service Coordinator Contact"
                fieldType="text"
                placeholderText="e.g +1828 1929"
                value={customerFormValues.serviceCoordinatorContact}
                onChange={(e) =>
                  updateFormValues(
                    customerFormValues,
                    setCustomerFormValues,
                    'serviceCoordinatorContact',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="h-11 w-full flex items-center justify-center font-medium tracking-primary-spacing transition-all ease-in-out duration-200 bg-primary text-white rounded-md"
              >
                Continue as a Customer
              </button>
            </div>
          </div>
        </form>
      )}
      {formType.toLowerCase() === 'iot vendor' && (
        <form onSubmit={handleIotVendorFormSubmit}>
          <div className="flex flex-wrap">
            <div className="w-full md:text-left text-center mb-6">
              <h2 className="md:text-4xl text-[30px] text-black-900 font-bold capitalize">
                {formType} Information
              </h2>
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Company Name"
                isRequired
                fieldType="text"
                placeholderText="e.g flatgreen"
                value={iotVendorFormValues.companyName}
                onChange={(e) =>
                  updateFormValues(
                    iotVendorFormValues,
                    setIotVendorFormValues,
                    'companyName',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Company Address"
                fieldType="text"
                placeholderText="Enter your company address"
                value={iotVendorFormValues.companyAddress}
                onChange={(e) =>
                  updateFormValues(
                    iotVendorFormValues,
                    setIotVendorFormValues,
                    'companyAddress',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full mb-6">
              <InputField
                fieldLabel="Project Manager Contact Name"
                isRequired
                fieldType="text"
                placeholderText="e.g johndoe"
                value={iotVendorFormValues.productManager}
                onChange={(e) =>
                  updateFormValues(
                    iotVendorFormValues,
                    setIotVendorFormValues,
                    'productManager',
                    e.target.value,
                  )
                }
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="h-11 w-full flex items-center justify-center font-medium tracking-primary-spacing transition-all ease-in-out duration-200 bg-primary text-white rounded-md"
              >
                Continue as a Iot Vendor
              </button>
            </div>
          </div>
        </form>
      )}
      <div className="w-full">
        <button
          type="button"
          className="w-full h-11 items-center flex justify-center text-black tracking-primary-spacing"
          onClick={onBackClick}
        >
          Back
        </button>
      </div>
    </>
  )
}

export default RegistrationForm
