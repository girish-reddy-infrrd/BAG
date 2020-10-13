import { Component, OnInit } from '@angular/core';
import { RequestPayLoadFormat, CommonServiceLayerService } from 'src/app/services/common-service-layer.service';
import { Router } from '@angular/router';
declare var require: any;
const Flickity = require('flickity-imagesloaded');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // flkty = new Flickity( '.carousel', {
  //   imagesLoaded: true
  // });
  public covidStatistics = {};
  public squadDetails = {};
  public newsBullitens = [];
  constructor(
    public router: Router,
    private http: CommonServiceLayerService
  ) { }
  ngOnInit() {
    this.getVolunteerData();
  }
  getVolunteerData() {
    try {
      let payload = {};
      const request: RequestPayLoadFormat = {
        api: 'home',
        // type: 'API',
        type: 'API',
        method: 'post',
        hideErrorMessage: false,
        disableUserDetails: true,
        payLoad: payload,
      };
      this.http.API_REQUEST(request).subscribe(response => {
        if (response.status) {
          this.covidStatistics = response.covidStatistics;
          this.squadDetails = response.squadDetails;
          this.newsBullitens = response.latestUpdates;
        } else {
          console.log(response.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }


  navigateTo(data) {
    try {
      this.router.navigate(['/layout/' + data]);
    } catch (error) {
      console.log(error);
    }
  }
  openNews(link) {
    window.open(link, '_blank');
  }
}
