import { Component } from '@angular/core';
import {AuthService} from "./features/authorization/domain/auth.service";
import { ToastsService } from './core/components/toast-alert/services/toast-alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToastsService]
})
export class AppComponent {

  constructor(authService: AuthService) {

  }

}
