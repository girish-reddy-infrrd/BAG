import { Injectable } from '@angular/core';
import * as toastr from 'toastr';


@Injectable({
  providedIn: 'root'
})

export class AlertConfig {
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  body: string;
}
export class AlertService {

  constructor() {
    toastr.options.closeButton = true;
    toastr.options.progressBar = true;
    toastr.options.timeOut = 10000;
  }
  /**
   *
   * @param type success||error||info||warning
   * @param title title - any string
   * @param body body - any string
   *
   */
  public open(alert: AlertConfig) {
    toastr[alert.type](alert.body, alert.title);
  }
}
