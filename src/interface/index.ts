export interface IInstallerProjectRow {
  id?: string | number
  projectTitle: string
  projectStatus: string
  numberOfVehicles: string | number
  productsByCamera: string | number
  productsByGpsTracker: string | number
  projectLocation: string
  projectStartDate: string
}

export interface IInstallerProductRow {
  id?: string | number
  productInstructions: string[]
  productVideo: {
    __html: any
  }
}
