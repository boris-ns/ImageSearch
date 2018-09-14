import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoint = 'https://api.unsplash.com';
  private apiClientId: String;

  constructor(private http: HttpClient) { 
    this.getApiKey();
  }

  getApiKey() {
    this.http.get('../../res/api_key.json')
      .subscribe((response: any) => this.apiClientId = response.key);
  }

  getPhotos(keyword: string) {
    return this.http.get(`${this.endpoint}/photos/search?client_id=${this.apiClientId}&query=${keyword}`);
  }
}
