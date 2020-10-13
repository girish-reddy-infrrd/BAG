import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent implements OnInit {

  constructor(
    public router: Router

  ) { }

  ngOnInit() {
  }

  navigateTo(data) {
    try {
      this.router.navigate(['/layout/' + data]);
    } catch (error) {
      console.log(error);
    }
  }


  navigateToVolunteer() {
    try {
      window.open('https://register.quarantinesquad.in/', '_blank');
    } catch (error) {
      console.log(error);

    }
  }

}
