export class StoreService {
   
   storeValue = 0;
   
   incrementStore() { this.storeValue = this.storeValue + 1;}
    
   logStore() { console.log(this.storeValue) }
        
}
