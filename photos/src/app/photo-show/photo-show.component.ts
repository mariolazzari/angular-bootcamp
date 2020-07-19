import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string;

  constructor(private photoService: PhotosService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((res) => {
      this.photoUrl = res.urls.regular;
    });
  }

  ngOnInit(): void {}
}
