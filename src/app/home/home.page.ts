import { Component } from '@angular/core';
import { QrcodeService } from '../services/qrcode.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  qrResult: any;
  isUrl = false;

  constructor(private qrcode: QrcodeService) { }

  async scanQrCode() {
    try {
      const result: any = await this.qrcode.scanQr();
      this.qrResult = result.code;
      this.isUrl = await this.checkUrl(this.qrResult);
    } catch (error) {
      console.log(error);
    }
  }

  deleteContent() {

    this.qrResult = '';

  }

  async checkUrl(text: string) {
    let url: any;
    try {
      url = new URL(text);
    } catch (_) {
      return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
  }

}
