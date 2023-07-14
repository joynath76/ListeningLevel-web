import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/User";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private basePath = "";
    constructor(private http: HttpClient) {
        this.basePath = environment.serverBasePath;
    }

    loginUser(user: User): Observable<User>{
        return this.http.post<User>(`${this.basePath}/login`, user).pipe(map((response: any) => {
            return response.data;
        }));
    }
}