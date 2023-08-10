import { AuthApiController } from './auth/auth.api';
import { ProjectApiController } from './project/project.api';

export interface IApiResponse {
  data: any[];
  error: any[];
  message: string;
  success: boolean;
}

export const API = {
  auth: new AuthApiController(),
  project: new ProjectApiController(),
};

export interface IPaginationResponse<T> {
  count: number;
  currentPage: number;
  rows: T[];
  totalPage: number;
}

