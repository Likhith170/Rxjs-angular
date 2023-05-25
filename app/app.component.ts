import { Component, OnInit } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import { map, filter, last, single} from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rxjs';

array1 = [1, 2, 6, 7, 8];
array2 = ['A', 'B', 'C'];

myObservable =from(this.array1);

 transformedObs = this.myObservable.pipe(map((val)=>{
  return val * 5;
}))

filteredObs = this.transformedObs.pipe(filter((val)=>{
 return val >= 30;
}))

lastObs = this.transformedObs.pipe(last((val)=>{
  return val >= 30;
 }))
 
 singleObs = this.transformedObs.pipe(single((val)=>{
  return val >= 8;
 }))


ngOnInit(){
  this.lastObs.subscribe((val)=>{
    console.log(val);
  },
  (error)=>{
    alert(error.message);
  },()=>{
    alert('Observable has complete emitting value')
  });
}
}



