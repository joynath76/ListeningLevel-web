import { Injectable } from "@angular/core";
import { User } from "../mockapi/models/User";

@Injectable({
    providedIn: 'root'
})
export class SharedService{
    loginUser: User;
    setLoginUser(user: User){
        this.loginUser = user;
    }
    getUser(){
        return this.loginUser;
    }
}