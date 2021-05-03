import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
    private BASE_URL = "http://localhost/"
    constructor(private http: HttpClient) { }

    registerUser(user): any{
        this.http.post(this.BASE_URL + "api/v1/register",{
            name: user.name,
            email: user.email,
            password: user.password
        })
    }
}