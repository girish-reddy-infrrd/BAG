import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestPayLoadFormat, CommonServiceLayerService } from 'src/app/services/common-service-layer.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  @ViewChild('mobileVerification', { static: true }) mobileVerification;
  form: FormGroup = new FormGroup({});
  public selectedTab: any = 'home';
  public mobileNo: number;
  public modalBody;
  public modalHeader;
  public responseData;
  public url: SafeResourceUrl;
  constructor(
    public router: Router,
    private modalService: NgbModal,
    private http: CommonServiceLayerService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    this.router.events.subscribe(
      (event: NavigationEvent) => {
        if (event instanceof NavigationEnd) {
          console.log(event);
          const data = event.url.split('/');
          // this.setSelectedTab(data[2]);
          console.log(data);
        }
      }
    );
  }

  ngOnInit() {
    // this.selectedTab = 'HOME';
    // this.setSelectedTab('HOME');
    this.getHeaderMenuData();
  }
  getHeaderMenuData() {
    this.responseData = null;
    this.url = '';
    const payload = {  };
    try {
      const request: RequestPayLoadFormat = {
        api: 'getHeaderMenu',
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
          this.responseData = response.data.menus;
          console.log(this.responseData);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  navigateTo(data) {
    try {
      // this.setSelectedTab(data);
      this.router.navigate(['/layout/' + data]);
    } catch (error) {
      console.log(error);
    }
  }
  // setSelectedTab(data) {
  //     this.selectedTab = data;
  // }
  openModal(body) {
    this.modalBody = body;
    if (body === 'phone') {
      this.modalHeader = 'Verify Volunteer Using Phone No.';
      this.modalService.open(this.mobileVerification, { centered: true });
    } else if (body === 'QR') {
      this.modalHeader = 'Verify Volunteer Using QR Code';
      this.modalService.open(this.mobileVerification, { centered: true });
    } else {
      this.modalHeader = 'Volunteer Details';
      this.modalService.open(this.mobileVerification, { centered: true});
    }
  }
  get f() {
    return this.form.controls;
  }
  verifyVolunteer(mobileNo) {
    this.responseData = null;
    this.url = '';
    const payload = { mobileNumber: mobileNo };
    try {
      const request: RequestPayLoadFormat = {
        api: 'verifyUser',
        // type: 'JSON',
        payLoad: payload,
        type: 'API',
        method: 'post',
        loader: true,
        hideErrorMessage: false,
        disableUserDetails: true
      };
      this.http.API_REQUEST(request).subscribe(response => {
        this.responseData = response;
        if (response.status) {
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.responseData.data.filename);
          this.modalService.dismissAll();
          this.openModal('PDF');
          this.mobileNo = null;
        } else {
          this.modalService.dismissAll();
          this.openModal('PDF');
          this.mobileNo = null;
          // console.log(response.message);
        }
      });
    } catch (error) {
      console.log(error);
      this.responseData = {
        status : false,
        message: 'Couldn\'t Verify now, Please try again'
      };
      this.modalService.dismissAll();
      this.openModal('PDF');
      this.mobileNo = null;
    }
  }
}
