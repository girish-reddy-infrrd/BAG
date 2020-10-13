import { environment } from '../../environments/environment';
import { config } from 'rxjs';
export class Config {
  public static get BASE_POINT_API() { return environment.API_END_POINT; }
  public static get BASE_POINT_JSON() { return 'assets/jsons/'; }

  public static BASE_API_MAPPING = {
    // common: Config.BASE_POINT_API + 'CQS_Website/services/'
    common: Config.BASE_POINT_API + ''
  };
  // ALL JSON FILES ENDPOINTS
  public static JSON = {

    getHeaderMenu: Config.BASE_POINT_JSON + 'getHeaderMenu.json',
    getProductDetails: Config.BASE_POINT_JSON + 'getProductDetails.json',


    geoJSON: Config.BASE_POINT_JSON + 'geoJson.json',
    mapData: Config.BASE_POINT_JSON + 'mapData.json',
    getTableData: Config.BASE_POINT_JSON + 'tableData.json',
    home: Config.BASE_POINT_JSON + 'volunteerData.json',
    chartData: Config.BASE_POINT_JSON + 'chartData.json',
    loadWarriorImages: Config.BASE_POINT_JSON + 'covidWarriors.json',


  };
  public static API = {

    getHeaderMenu: Config.BASE_API_MAPPING.common + 'getHeaderMenu',
    getProductDetails: Config.BASE_POINT_JSON + 'getProductDetails.json',


    geoJSON: Config.BASE_API_MAPPING.common + 'getShapeData',
    mapData: Config.BASE_API_MAPPING.common + 'getHospitalData',
    getHospitalInfo: Config.BASE_API_MAPPING.common + 'getHospitalInfo',
    getTableData: Config.BASE_API_MAPPING.common + 'getStoresData',
    home: Config.BASE_API_MAPPING.common + 'covid19Statistics',
    chartData: Config.BASE_API_MAPPING.common + 'volunteerdashboard',

  };
}
