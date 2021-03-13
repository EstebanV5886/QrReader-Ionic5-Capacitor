import { Injectable } from '@angular/core';
import '@johnbraum/capacitor-qrscanner';
import { Plugins } from '@capacitor/core';
const { CapacitorQRScanner } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  constructor() { }

  scanQr() {
    return new Promise(async(resolve, reject) => {
      let result = await CapacitorQRScanner.scan();
      resolve(result);
    })
  }

}
