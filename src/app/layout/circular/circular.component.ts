import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  downloadSSB(){
    window.open('assets/documents/SSB_exemption_to_HQ_rule.pdf', '_blank');
  }
  downloadCommisionRate(){
    window.open('assets/documents/ComissionRate.pdf', '_blank');
  }
  downloadAbulance(){
    window.open('assets/documents/Ambulance_Details.pdf', '_blank');
  }
  
}
