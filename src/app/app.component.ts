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
}
