import { Component } from '@angular/core';
//Importamos los datos del dispositivo a partir de Capacitor
import { Device } from '@capacitor/device';
//Importamos la informacion de Capacitor
import { Capacitor } from '@capacitor/core';
//Network
import { Network } from '@capacitor/network'
//App
import { App } from '@capacitor/app'
//Importamos la Geolocalizacion
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Para el plugin de capacitor
  ptfName: any;
  isNative: any;
  isAvailable: any;
  //PAra el plugin de Device
  //Los definimos como any.
  deviceInfo: any;
  deviceId: any;
  deviceBattery: any;
  //network
  networkStatus: any;
  networkStatusChange: any;
  //App
  resumeS: any;
  pauseS: any;
  appStateChangeS: any;
  //Gps
  coordinates:any;



  constructor() {

    this.ptfName = Capacitor.getPlatform();
    this.isNative = Capacitor.isNativePlatform();
    this.isAvailable = Capacitor.isPluginAvailable('Camera');

    Device.getInfo().then(
      result => { this.deviceInfo = result; }),

      Device.getId().then(
        result => { this.deviceId = result; }),

      Device.getBatteryInfo().then(
        result => { this.deviceBattery = result; })

    //Recuperamos los datos a partir de Network
    Network.getStatus().then(
      result => { this.networkStatus = result; })
    //Listener que recuperar. 
    Network.addListener('networkStatusChange', status => { this.networkStatusChange = status })
    //App
    App.addListener('appStateChange', ({ isActive }) => {
      this.appStateChangeS = isActive;
    })
    this.geolocalizacion();
  }

  //Calculamos la geolocalizacion.
  geolocalizacion(){
        //Geolocalizacion:
        const printCurrentPosition = async () => {
          this.coordinates = await Geolocation.getCurrentPosition();
        };

  }


}
