import { Component, OnInit } from '@angular/core';
import { RequestPayLoadFormat, CommonServiceLayerService } from 'src/app/services/common-service-layer.service';

@Component({
  selector: 'app-covid-warriors',
  templateUrl: './covid-warriors.component.html',
  styleUrls: ['./covid-warriors.component.css']
})
export class CovidWarriorsComponent implements OnInit {

  constructor(
    private http: CommonServiceLayerService,
  ) { }
  public images;
  public fileData;
  public fileUpload = {
    documentName: '',
    data: ''
  };
  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    const request: RequestPayLoadFormat = {
      api: 'loadWarriorImages',
      type: 'JSON',
      method: 'get',
      hideErrorMessage: false,
      disableUserDetails: true
    };
    this.http.API_REQUEST(request).subscribe(response => {
      if (response.status === 'success') {
        this.images = response.data;
      } else {
      }
    });
  }
  onFileChange(event) {
    try {
      this.fileData = undefined;
      const fileList: FileList = event.target.files;
      const self = this;
      const ValidImageTypes = ['image/jpeg', 'image/png'];
      if (fileList.length > 0) {
        this.fileData = fileList[0];
        let imgData = {};
        for (const fileName of Object.values(fileList)) {
          const reader: FileReader = new FileReader();
          let fileType = this.fileData.type;
          if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
            if (this.fileData.name.indexOf('.') > -1) {
              fileType = this.fileData.name.split('.')[1];
            } else {
              fileType = '';
            }
          }
          reader.onload = (frEvent) => {
            const imgContent = frEvent.target['result'];
            if (imgContent && ValidImageTypes.indexOf(fileType) > -1) {
              imgData = {};
              this.fileUpload.data = reader.result.toString();
              this.fileUpload.documentName = this.fileData.name;
              if (this.fileUpload.data) {
                this.loadImages();
              }
            }
          };
          this.fileData = fileName;
          reader.readAsDataURL(this.fileData);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


}
