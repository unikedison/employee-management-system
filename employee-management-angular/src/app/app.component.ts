import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MATERIAL_MODULES } from '../app/shared/material';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MATERIAL_MODULES],
  templateUrl: './app.component.html',
})
export class AppComponent {}
