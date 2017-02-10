import { Component } from '@angular/core';
import {AuthenticationService} from "../services/autch.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(protected authService: AuthenticationService) {
  };

  protected inProgress(): boolean {
    return this.authService.inProgress();
  }
}
