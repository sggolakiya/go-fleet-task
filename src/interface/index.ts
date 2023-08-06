export interface IUserType {
  id?: string | number
  icon: any
  userType: string
  numberOfUsers: string | number
}

export interface IInstallerForm {
  companyName?: string
  companyAddress?: string
  installManagerContactName?: string
  phoneNumber?: string
  email?: string
  billingEmail?: string
  projectsWithProductsFor?: string
  certifyInsurance?: boolean
}

export interface ICustomerForm {
  companyName?: string
  companyAddress?: string
  fleetProjectManagerContact?: string
  serviceCoordinatorContact?: string
}

export interface IIotVendorForm {
  companyName?: string
  companyAddress?: string
  productManager?: string
}

export interface IProjectTabs {
  id?: string | number
  name: string
  active?: boolean
  count?: string | number
}
