import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'organizador-web';

  public ngOnInit(){
    console.log(!environment.production ? '--- is development ---' : '--- is production ---');
  }
}
