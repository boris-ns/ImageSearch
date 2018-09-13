import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Image Search';
  searchKeyword = '';
  resultImages = [];
  favouriteImages = [];
  isLoading = false;

  constructor(private dataService: DataService) {
  }

  onSearch() {
    this.isLoading = true;
    this.resultImages.splice(0, this.resultImages.length);

    this.dataService.getPhotos(this.searchKeyword)
      .subscribe((response: any) => {
        this.isLoading = false;
        response.forEach(element => this.resultImages.push(element.urls.small));
      }
    );
  }

  onAddToFavourites(imageUrl: String) {
    if (this.favouriteImages.indexOf(imageUrl) === -1) {
      this.favouriteImages.push(imageUrl);
    } else {
      alert('This image is already in your favourites.');
    }
  }

  onRemoveFromFavourites(imageUrl: String) {
    const index = this.favouriteImages.indexOf(imageUrl);

    if (index === -1) {
      alert('Error while removing image from favourites.');
      return;
    }

    this.favouriteImages.splice(index, 1);
  }
}
