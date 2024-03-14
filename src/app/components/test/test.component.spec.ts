import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { Router } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { of } from 'rxjs';
import { DataState } from 'src/app/store/data.state';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [NgxsModule.forRoot([DataState])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should go to valid route', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.goTo('banana');
    expect(spy).toHaveBeenCalledWith(['/banana']);
  })

  it('dataValue should start at false', () => {
    expect(component.dataValue).toEqual(false);
  })

  
});
