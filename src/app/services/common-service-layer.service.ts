import { Injectable } from '@angular/core';
import { HttpLayerService } from './http-layer.service';
import { Config } from '../config/Config';

export class RequestPayLoadFormat {
  api: string;
  payLoad?: object;
  method: 'post' | 'get' | 'postText' | 'postFile';
  loader?: boolean;
  type: 'API' | 'JSON';
  hideErrorMessage?: boolean;
  options?: object;
  formData?: any;
  disableUserDetails?: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CommonServiceLayerService {

  constructor(
    private http: HttpLayerService,

  ) { }

  API_REQUEST(request: RequestPayLoadFormat) {
    try {
      return this.http[request.method](Config[request.type][request.api], request);
    } catch (error) {
      console.log(error);
    }
  }
}
