import { Component } from '@angular/core';
import { QrcodeService } from '../services/qrcode.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  qrResult: any;

  constructor(private qrcode: QrcodeService) { }

  async scanQrCode() {
    this.qrcode.scanQr().then((result: any) => {
      this.qrResult = result.code;
    }).catch(error => console.error(error));
  }

  deleteContent() {

    this.qrResult = '';

  }

}
