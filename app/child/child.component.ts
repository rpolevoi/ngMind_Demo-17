import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  moduleId: module.id,
  selector: 'app-child-component',
  template: `<h3>Shared Store injected in child = {{store.storeValue}}</h3>
             <button (click)="incrementStore()" >Click to ++ store value</button>`,
  styleUrls: ['child.component.css']           
})
export class ChildComponent {
  
  constructor(private store: StoreService) {}
  
  incrementStore() {this.store.incrementStore();
                    this.store.logStore();
    
  }
 
}
