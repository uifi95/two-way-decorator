# two-way-decorator
Angular Two Way Data Binding Decorator

Usage:

```typescript
import { Component, OnInit } from '@angular/core';
import { TwoWay } from 'two-way-decorator';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  @TwoWay()
  public text: string;

  @TwoWay()
  public count: number;

}
```

Then just use the binding like this in the parent template

```html
  <app-example [(text)]="anyText" [(count)]="anyCount"></app-example>
```

Made with pure TypeScript and **@angular/core**.

Author: Sergiu Uifalean
