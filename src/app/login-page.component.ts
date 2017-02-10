import {Component} from "@angular/core";
import {AuthenticationService} from "../services/autch.service";

@Component({
  selector: "login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ['./login-page.component.css']
})
export class LoginPage {
  protected username: string;
  protected password: string;

  constructor(private authService: AuthenticationService) {}

  protected doLogin(): void {
    this.authService.login(this.username, this.password)
    this.username = "";
    this.password = "";
  }

  protected getLastError(): string {
    return this.authService.getLastError();
  }
}
