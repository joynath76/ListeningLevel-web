import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SharedService } from "../services/shared.service";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { User } from "../models/User";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

    constructor(private sharedService: SharedService, private router: Router, private loginService: LoginService){}
    user: User = {
        userId: '',
        password: ''
    }
    ngOnInit() {
        
    }

    onLogin() {
        this.loginService.loginUser(this.user).subscribe(user => {
            this.sharedService.setLoginUser(this.user);
            this.router.navigate(['/listening'])
        })
    }
}