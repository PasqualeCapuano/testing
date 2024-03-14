import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Data } from 'src/app/store/data.actions';
import { DataState } from 'src/app/store/data.state';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  a: number = 0;
  b: number = 0;
  result: number = 0;
  dataValue: boolean = false;

  @Select(DataState.getDataList) data$?: Observable<boolean>;
  subscribed: Subscription | undefined;

  constructor(private router: Router, private store: Store) { 

    this.a = 10;
    this.b = 20;
    this.dataValue = false;

  }

  ngOnInit(): void {
    this.subscribed = this.data$?.subscribe((res) => {
      this.dataValue = res;
    })
  }

  ngOnDestory(): void {
    this.subscribed?.unsubscribe();
  }

  goTo(x: string) {
    this.router.navigate(['/'+ x]);
  } 

  changeData() {
    if(this.dataValue) {
      this.store.dispatch(new Data(false));
    }else {
      this.store.dispatch(new Data(true));
    }
  }

}