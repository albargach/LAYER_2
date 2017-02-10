import {Component} from "@angular/core";
import {AuthenticationService} from "../services/autch.service";
import {Http} from "@angular/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ['./dashboard.component.css']
})
export default class AppDashboard {

  protected user: string;

  constructor(private authService: AuthenticationService, private http: Http) {
  };

  protected logout(): void {
    this.authService.logout();
  }

  protected loadCurrentUser() {
    return this.http.get("/rest/user", null).map(res => res.json()).subscribe((user) =>
      this.user = `id: ${user.id}, name: ${user.displayName}`);
  }
}
