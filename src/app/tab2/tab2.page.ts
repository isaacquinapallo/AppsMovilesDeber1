import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {}

  async takePhoto() {
    await this.photoService.addNewToGallery();
  }

  async takeLowQualityPhoto() {
    await this.photoService.addLowQualityPhoto(); // Asegúrate de que este método exista en el servicio
  }

  openGallery() {
    this.photoService.loadSaved();
  }

  ionViewWillEnter() {
    this.photoService.resetState();
  }
}
