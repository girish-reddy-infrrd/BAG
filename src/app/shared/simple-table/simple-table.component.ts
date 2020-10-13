import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css']
})
export class SimpleTableComponent implements OnInit {
  
  @Input() tableDataWithActions;
  @Output() actionEmitter = new EventEmitter();
  public filterObject: any;
  public metaData = {
    searchText: null,
    counter: 1,
    no_of_steps: 1,
    no_of_items_to_display: 10,
    display_options: [
      {
        label: '5',
        value: 5,
      },
      {
        label: '10',
        value: 10,
      },
      {
        label: '25',
        value: 25,
      },
    ],
  };
  public seggregatedTableContent = [];

 
  constructor() { }
/* tslint:disable */
  ngOnInit() {
    this.seggregateTableData();
  }
  isArray(value) {
    return typeof (value);
  }

  onChangeInDisplay(value) {
    try {
      this.seggregateTableData();
    } catch (error) {
      console.error(error);
    }
  }
  onChangeInCounter(type) {
    if (type === 'increase') {
      if (this.metaData['counter'] < this.seggregatedTableContent.length) {
        this.metaData['counter'] = this.metaData['counter'] + 1;
      }
    } else if (type === 'decrease') {
      if (this.metaData['counter'] > 1) {
        this.metaData['counter'] = this.metaData['counter'] - 1;
      }
    }
  }
  seggregateTableData() {
    try {
      this.metaData['counter'] = 1;
      this.seggregatedTableContent = [];
      const bodyContentLength = this.tableDataWithActions['tableData']['bodyContent'].length;
      if (bodyContentLength) {
        this.metaData['no_of_steps'] = Math.ceil(bodyContentLength / this.metaData['no_of_items_to_display']);
        for (let eachStep = 1; eachStep <= this.metaData['no_of_steps']; eachStep++) {
          const eachStepArray = [];
          const fromIndex = (eachStep - 1) * this.metaData['no_of_items_to_display'];
          const toIndex = eachStep * this.metaData['no_of_items_to_display'] - 1;
          this.tableDataWithActions['tableData']['bodyContent'].forEach((eachItem, index) => {
            if (index >= fromIndex && index <= toIndex) {
              eachStepArray.push(eachItem);
            }
          });
          this.seggregatedTableContent.push(eachStepArray);
        }
        this.seggregatedTableContent = this.seggregatedTableContent.filter((eachStep) => {
          if (eachStep.length) {
            eachStep = eachStep.filter((subStep) => {
              return (subStep !== null && subStep !== '' && subStep !== undefined);
            });
          }
          return (eachStep !== null && eachStep !== '' && eachStep !== undefined);
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  emitAction(actionType, data?: any) {
    try {
      const dataToEMit = {
        action: actionType,
      };
      if (data) {
        dataToEMit['data'] = data;
      }
      this.actionEmitter.emit(dataToEMit);
    } catch (error) {
      console.error(error);
    }
  }
  onSearchTextChange() {
    if (!this.tableDataWithActions || !this.tableDataWithActions['tableData'] || !this.tableDataWithActions['tableData']['headerContent']) {
      return;
    }
    const headerContent = this.tableDataWithActions['tableData']['headerContent'];
    this.filterObject = {};
    for (const item of headerContent) {
      this.filterObject[item['key'] || item['value']] = this.metaData['searchText'];
    }
  }

}
