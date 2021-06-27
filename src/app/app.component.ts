import { AfterViewInit, Component, OnInit } from '@angular/core';

import 'stencil-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shared-css-app';
  instances = 1000;
  timer = 0;
  startTime = performance.now();
}
