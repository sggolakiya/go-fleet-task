export interface IUserType {
  id?: string | number;
  icon: any;
  userType: string;
  numberOfUsers: string | number;
}

export interface IInstallerForm {
  companyName?: string;
  companyAddress?: string;
  installManagerContactName?: string;
  phoneNumber?: string;
  email?: string;
  billingEmail?: string;
  projectsWithProductsFor?: string;
  certifyInsurance?: boolean;
}

export interface ICustomerForm {
  companyName?: string;
  companyAddress?: string;
  fleetProjectManagerContact?: string;
  serviceCoordinatorContact?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
}

export interface IIotVendorForm {
  companyName?: string;
  companyAddress?: string;
  productManager?: string;
}

export interface IProjectTabs {
  id?: string | number;
  name: string;
  active?: boolean;
  count?: string | number;
}

export interface IAssetListTable {
  assetName: string;
  plate: string;
  driver: string;
  products: string;
  status: string;
  action: {
    text: string;
    callbackFunction?: () => void;
  };
}

export interface IAssetListFields {
  id?: string | number;
  vehicleType?: string;
  quantity?: string;
  pricePerVehicles?: string;
  subTotal?: string;
}

