import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { StoreService } from './store.service';


@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h3>Shared Store injected in parent = {{store.storeValue}}</h3>
             <button (click)="incrementStore()" >Click to ++ store value</button>
             <br>
             <br>
             <app-child-component></app-child-component>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  constructor(private store: StoreService) {}
  
  incrementStore() {this.store.incrementStore(); this.store.logStore();}
  
}
