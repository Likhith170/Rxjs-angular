import { Component, OnInit } from '@angular/core';
import {concat, from, interval, merge, Observable, of} from 'rxjs';
import { map, filter, last, single, take, skip, distinctUntilChanged, debounceTime} from 'rxjs/operators';
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
array3 = interval(1000);
array4 = ['100','200','300'];
array5 = [3, 5, 5, 9, 11, 11, 13, 5, 9];

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

 concatObs = concat(from(this.array1), from(this.array2));

 takeObs = this.myObservable.pipe(take(3));
 
 skipObs = this.myObservable.pipe(skip(3));

 mergeObs = merge(from(this.array1), from(this.array2), from(this.array3), from(this.array4));

 distinctUntilChangedObs = from(this.array5).pipe(distinctUntilChanged());

 debouncedIntervalObs = interval(1000).pipe(debounceTime(500));

ngOnInit(){
  this.debouncedIntervalObs.subscribe((val)=>{
    console.log(val);
  },
  (error)=>{
    alert(error.message);
  },()=>{
    alert('Observable has complete emitting value')
  });
}
}



