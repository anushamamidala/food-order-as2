import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SettingsService {
    private BASE_URL = "http://localhost/"
    constructor(private http: HttpClient) { }

    getSettings(): any{
       return this.http.get(this.BASE_URL + "api/v1/settings")
    }
}