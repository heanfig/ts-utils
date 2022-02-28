import { Component } from '@angular/core';
import { Memoize } from '@heanfig/ts-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ts-utils-demo';

  @Memoize()
  public getValue(value: number){
    return value ** 45;
  }

}
