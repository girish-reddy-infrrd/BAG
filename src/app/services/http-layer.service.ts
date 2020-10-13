import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestPayLoadFormat } from './common-service-layer.service';
import 'rxjs/Rx';
import { LoaderService } from '../shared/loader/loader-service.service';
@Injectable({
    providedIn: 'root'
})
export class HttpLayerService {

    constructor(
        private http: HttpClient,
        private loaderService: LoaderService,

    ) {

    }
    private monitoring = {
        pendingRequestsNumber: 0
    };
    get(url, request: RequestPayLoadFormat): Observable<any> {
        try {
            if (request.type === 'API') {
                return this.handleResponse(this.http.get( // for encrypted response
                    url).map((res: any) => {
                        // res = JSON.parse(atob(res));
                        return res;
                    })
                ).finally(() => {
                    // this.hideLoader();
                });
            } else {
                return this.handleResponse(this.http.get( // for normal response
                    url), request.loader).finally(() => {
                    });
            }

        } catch (error) {
            console.log(error);
        }
    }
    post(url, request: RequestPayLoadFormat): Observable<any> {
        request = JSON.parse(JSON.stringify(request));
        try {
            if (request.loader) {
                this.showLoader();
            }
            let headerJson;
            let token;
            // if (!request.options) {
            //     const sessionKey = JSON.parse(localStorage.getItem('session_key'));
            //     if (!sessionKey) {
            //         this.logOut();
            //         return Observable.throw('Please login');
            //     }
            //     token = sessionKey.accessToken;
            //     if (!token) {
            //         this.logOut();
            //         return Observable.throw('Please login');
            //     }
            // }
            // headerJson = request.options ? request.options : {
            //     'Content-Type': 'text/plain',
            //     Authorization: token
            // };
            // const headersConfig = new HttpHeaders(headerJson);
            const requestOptions: any = { responseType: 'text' };
            // const userDetails = this.getUserDetails(request);
            // request.payLoad = Object.assign(userDetails, request.payLoad);
            const body = JSON.stringify(request.payLoad);
            return this.handleResponse(this.http.post(
                url, body, requestOptions).map((res: any) => {
                    res = JSON.parse(res);
                    // res = JSON.parse(atob(res));
                    return res;
                }), request.loader
            ).finally(() => {
                if (request.loader) {
                    this.hideLoader();
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleResponse(observable: Observable<any>, loader?): Observable<any> {
        try {
            return observable.catch((err) => {
                console.log(err)
                // tslint:disable-next-line: deprecation
                return Observable.throw(err);
            }).finally(() => {
                if (loader) {
                    this.hideLoader();
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    private showLoader(): void {
        this.monitoring.pendingRequestsNumber++;
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.monitoring.pendingRequestsNumber--;
        if (this.monitoring.pendingRequestsNumber <= 0) {
            this.loaderService.hide();
        }
    }
}
