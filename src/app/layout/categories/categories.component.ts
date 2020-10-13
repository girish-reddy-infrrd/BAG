import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { RequestPayLoadFormat, CommonServiceLayerService } from 'src/app/services/common-service-layer.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(
    public router: Router,
    private http: CommonServiceLayerService,
  ) { }
  public responseData;

  ngOnInit() {
    this.getSelectedProductData();
  }
  navigateTo(data) {
    this.router.navigate(['/layout/' + data]);
  }
  getSelectedProductData() {
    this.responseData = null;
    const payload = {  };
    try {
      const request: RequestPayLoadFormat = {
        api: 'getProductDetails',
        type: 'JSON',
        payLoad: payload,
        // type: 'API',
        method: 'get',
        loader: true,
        hideErrorMessage: false,
        disableUserDetails: true
      };
      this.http.API_REQUEST(request).subscribe(response => {
        if (response.status) {
          this.responseData = response.data.products;
          console.log(this.responseData);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
