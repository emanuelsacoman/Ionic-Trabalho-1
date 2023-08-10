import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public primeiroN! : number;
  public segundoN! : number;
  public op! : number;

  constructor(private alertController: AlertController) {

  }

  calcular(){
    if (this.primeiroN && this.segundoN && this.op){
      if (this.op == 0){
        let resultado = this.primeiroN + this.segundoN;
        this.presentAlert('' + resultado);
      }
      if (this.op == 1){
        let resultado = this.primeiroN - this.segundoN;
        this.presentAlert('' + resultado);
        
      }
      if (this.op == 2){
        let resultado = this.primeiroN * this.segundoN;
        this.presentAlert('' + resultado);
        
      }
      if (this.op == 3){
        let resultado = this.primeiroN / this.segundoN;
        this.presentAlert('' + resultado);
      }
      this.primeiroN = NaN;
      this.segundoN = NaN;
      this.op = NaN;
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Calculadora',
      subHeader: 'O resultato é:',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
