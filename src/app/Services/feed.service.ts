import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedService {
    private BASE_URL = "http://localhost/"
    constructor(private http: HttpClient) { }

    getFeed(): any{
        return this.http.get(this.BASE_URL + "api/v1/feed")
    }
}