# two-way-decorator
Angular Two Way Data Binding Decorator

Usage:

```typescript
import { Component, OnInit } from '@angular/core';
import { TwoWay } from 'two-way-decorator';

@Component({
  selector: 'app-child-two-way',
  templateUrl: './child-two-way.component.html',
  styleUrls: ['./child-two-way.component.scss']
})
export class ChildTwoWayComponent {

  @TwoWay()
  public text: string;

  @TwoWay()
  public secondText: string;

}
```