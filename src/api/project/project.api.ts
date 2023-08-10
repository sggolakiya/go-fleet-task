import { ApiController } from '../axios';

export class ProjectApiController extends ApiController {
  protected urlPath = '/project';

  async createProject(projectData: any): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.post(
          `${this.urlPath}`,
          {},
          {
            contentType: 'multipart/form-data',
          },
          projectData
        );
        if (result.status !== 200) {
          return reject();
        }
        const data = result.data;
        if (data.success !== true) {
          return reject(data.message);
        }
        resolve(data);
      } catch (e: any) {
        reject(e);
      }
    });
  }

  async signUpCustomer(userData: any): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.post(
          `${this.urlPath}/signup/customer`,
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

