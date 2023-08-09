import { ApiController } from '../axios';

export interface IUserToken {
  refreshToken: string;
  role: string;
  token: string;
}

export class AuthApiController extends ApiController {
  protected urlPath = '/auth';
  async login(ra_id: string, password: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.post(
          `${this.urlPath}/login`,
          {},
          {},
          {
            ra_id: ra_id,
            password: password,
          }
        );
        if (result.status !== 200) {
          return reject();
        }
        const data = result.data;
        if (data.success !== true) {
          return reject(data.message);
        }
        const token = data.data.token;
        resolve(token);
      } catch (e: any) {
        reject(e);
      }
    });
  }
  async customerLogin(cu_id: string, password: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.post(
          `${this.urlPath}/login/customer`,
          {},
          {},
          {
            cu_id: cu_id,
            password: password,
          }
        );
        if (result.status !== 200) {
          return reject();
        }
        const data = result.data;
        if (data.success !== true) {
          return reject(data.message);
        }
        const token = data.data.token;
        resolve(token);
      } catch (e: any) {
        reject(e);
      }
    });
  }
  async forgotPassword(cu_id: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.post(
          `${this.urlPath}/forgot-password-customer`,
          {},
          {},
          {
            cu_id: cu_id,
          }
        );
        if (result.status !== 200) {
          return reject();
        }
        const data = result.data;
        if (data.success !== true) {
          return reject(data.message);
        }
        resolve(data.message);
      } catch (e: any) {
        reject(e);
      }
    });
  }
  async resetPassword(password: string, code: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.post(
          `${this.urlPath}/reset-password-customer`,
          {},
          {},
          {
            password,
            code,
          }
        );
        if (result.status !== 200) {
          return reject();
        }
        const data = result.data;
        if (data.success !== true) {
          return reject(data.message);
        }
        resolve(data.message);
      } catch (e: any) {
        reject(e);
      }
    });
  }
  async signUp(userData: any): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.post(
          `${this.urlPath}/new-customer`,
          {},
          {},
          userData
        );
        if (result.status !== 200) {
          return reject();
        }
        const data = result.data;
        if (data.success !== true) {
          return reject(data.message);
        }
        const token = data.data.token;
        resolve(token);
      } catch (e: any) {
        reject(e);
      }
    });
  }
}

