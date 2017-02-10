import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {AppComponent} from './app.component';
import {LocalStorageService, LocalStorageModule} from "angular-2-local-storage";
import {RouteController} from "../services/route-controller.service";
import {AuthenticationService} from "../services/autch.service";
import {HttpController} from "../services/http-controller";
import {RouterModule, Routes} from "@angular/router";
import {LoginPage} from "app/login-page.component";
import AppDashboard from "./dashboard.component";

const appRoutes: Routes = [
  {path: "", component: AppDashboard, canActivate: [RouteController]},
  {path: "login", component: LoginPage}
];

export function httpFactory(backend: XHRBackend, options: RequestOptions) {
  return new HttpController(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    AppDashboard
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: false}),
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: "auth-layer",
      storageType: "localStorage"
    })
  ],
  providers: [
    AuthenticationService,
    RouteController,
    LocalStorageService,
    {
      provide: Http,
      deps: [XHRBackend, RequestOptions],
      useFactory: httpFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
