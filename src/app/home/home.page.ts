import { Component } from '@angular/core';
import { QrcodeService } from '../services/qrcode.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private qrcode: QrcodeService) { }

  async scanQrCode() {
    this.qrcode.scanQr().then(result => {
      console.log('result: ', result);
    }).catch(error => console.error(error));
  }

}
