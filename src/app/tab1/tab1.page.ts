import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab1Page implements OnInit {
  constructor(public photoService: PhotoService) {}

  ngOnInit() {
    // No se carga automáticamente
  }

  // Cargar fotos guardadas al presionar el botón
  async loadPhotos() {
    await this.photoService.loadSaved();
  }
}
