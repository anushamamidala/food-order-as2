import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    private BASE_URL = "http://localhost/"
    constructor(private http: HttpClient) { }

    getAllUsers() {
        return this.http.get(this.BASE_URL + "api/v1/users")
    }

    getAllUserById(userId) {
        return this.http.get(this.BASE_URL + "api/v1/users/" + userId)
    }
}