import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-citizen-groups',
  templateUrl: './citizen-groups.component.html',
  styleUrls: ['./citizen-groups.component.css']
})
export class CitizenGroupsComponent implements OnInit {
  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/l5sHCUWxrP0");
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/60-d1vpYV_Y");
  }
  
  ngOnInit() {
  }

}
