import { IInstallerProductRow, IInstallerProjectRow } from '@/interface'

export const activeProjectRows: IInstallerProjectRow[] = [
  {
    id: 1,
    projectTitle: 'Project 1',
    projectStatus: 'Active',
    numberOfVehicles: 4,
    productsByCamera: 2,
    productsByGpsTracker: 1,
    projectLocation: 'carson city',
    projectStartDate: '5 august, 2023',
  },
  {
    id: 2,
    projectTitle: 'Project 2',
    projectStatus: 'Active',
    numberOfVehicles: 2,
    productsByCamera: 4,
    productsByGpsTracker: 5,
    projectLocation: 'Las Vegas',
    projectStartDate: '5 august, 2023',
  },
  {
    id: 3,
    projectTitle: 'Project 3',
    projectStatus: 'Active',
    numberOfVehicles: 5,
    productsByCamera: 3,
    productsByGpsTracker: 7,
    projectLocation: 'California',
    projectStartDate: '5 august, 2023',
  },
  {
    id: 4,
    projectTitle: 'Project 4',
    projectStatus: 'Active',
    numberOfVehicles: 3,
    productsByCamera: 7,
    productsByGpsTracker: 2,
    projectLocation: 'New Jersey',
    projectStartDate: '5 august, 2023',
  },
]

export const toBidProjectRows: IInstallerProjectRow[] = [
  {
    id: 5,
    projectTitle: 'Project 1',
    projectStatus: 'To Bid',
    numberOfVehicles: 4,
    productsByCamera: 2,
    productsByGpsTracker: 1,
    projectLocation: 'carson city',
    projectStartDate: '5 august, 2023',
  },
  {
    id: 6,
    projectTitle: 'Project 2',
    projectStatus: 'To Bid',
    numberOfVehicles: 2,
    productsByCamera: 4,
    productsByGpsTracker: 5,
    projectLocation: 'Las Vegas',
    projectStartDate: '5 august, 2023',
  },
  {
    id: 7,
    projectTitle: 'Project 3',
    projectStatus: 'To Bid',
    numberOfVehicles: 5,
    productsByCamera: 3,
    productsByGpsTracker: 7,
    projectLocation: 'California',
    projectStartDate: '5 august, 2023',
  },
]

export const lostProjectRows: IInstallerProjectRow[] = [
  {
    id: 8,
    projectTitle: 'Project 1',
    projectStatus: 'Lost',
    numberOfVehicles: 4,
    productsByCamera: 2,
    productsByGpsTracker: 1,
    projectLocation: 'carson city',
    projectStartDate: '5 august, 2023',
  },
  {
    id: 9,
    projectTitle: 'Project 2',
    projectStatus: 'Lost',
    numberOfVehicles: 2,
    productsByCamera: 4,
    productsByGpsTracker: 5,
    projectLocation: 'Las Vegas',
    projectStartDate: '5 august, 2023',
  },
]

export const installerProducts: IInstallerProductRow[] = [
  {
    id: 10,
    productInstructions: [
      'Instruction 1',
      'Instruction 2',
      'Instruction 3',
      'Instruction 4',
      'Instruction 5',
      'Instruction 6',
      'Instruction 7',
      'Instruction 8',
      'Instruction 9',
      'Instruction 10',
    ],
    productVideo: {
      __html: `
      <iframe class='aspect-video w-full' src="https://www.youtube.com/embed/R12XNNvGXPk" title="Fleet Management Software - GPS Tracking Solutions | GoFleet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
  },
  {
    id: 11,
    productInstructions: [
      'Instruction 1',
      'Instruction 2',
      'Instruction 3',
      'Instruction 4',
      'Instruction 5',
      'Instruction 6',
      'Instruction 7',
      'Instruction 8',
      'Instruction 9',
      'Instruction 10',
    ],
    productVideo: {
      __html: `
      <iframe class='aspect-video w-full' src="https://www.youtube.com/embed/F3_U0_JIDR4" title="The City of Columbus Success Story | GoFleet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
  },
]
