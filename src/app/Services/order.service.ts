import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {
    private BASE_URL = "http://localhost/"
    constructor(private http: HttpClient) { }

    getOrders(): any{
        return this.http.get(this.BASE_URL + "api/v1/orders")
    }

    getOrderById(orderId): any{
        return this.http.get(this.BASE_URL + "api/v1/orders/"+orderId)
    }

    getOrderByIdStatus(orderId, status): any{
        return this.http.get(this.BASE_URL + "api/v1/orders/"+orderId + "/"+status)
    }
}