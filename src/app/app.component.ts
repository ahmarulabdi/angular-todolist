import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama: string;
  constructor() {
    this.setNama('abdi');
  }

  setNama(nama: string) {
    this.nama = nama;
  }
}
