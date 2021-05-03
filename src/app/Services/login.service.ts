import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    private BASE_URL = "http://localhost/"
    constructor(private http: HttpClient) { }

    loginUser(user): any{
        return this.http.post(this.BASE_URL + "api/v1/login",{
            email: user.email,
            password: user.password
        })
    }

    forgotPassword(email): any{
        return this.http.post(this.BASE_URL + "api/v1/forgotpassword",{
            email: email
        })
    }
}