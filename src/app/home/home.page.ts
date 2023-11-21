import { Component } from '@angular/core';
//Importamos los datos del dispositivo a partir de Capacitor
import  {Device } from '@capacitor/device';
//Importamos la informacion de Capacitor
import {Capacitor} from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  //Para el plugin de capacitor
  ptfName:any;
  isNative:any;
  isAvailable:any;
  //PAra el plugin de Device
  //Los definimos como any.
  deviceInfo:any;
  deviceId:any;
  deviceBattery:any;


  constructor(){

    this.ptfName= Capacitor.getPlatform();
    this.isNative = Capacitor.isNativePlatform();
    this.isAvailable = Capacitor.isPluginAvailable('Camera');

    Device.getInfo().then(
      result=> { this.deviceInfo = result;}),
  
    Device.getId().then(
      result=> { this.deviceId = result;}),

    Device.getBatteryInfo().then(
         result=> { this.deviceBattery = result;})
    }

}
