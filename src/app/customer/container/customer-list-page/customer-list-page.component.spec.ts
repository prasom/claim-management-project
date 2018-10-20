import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListPageComponent } from './customer-list-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('CustomerListPageComponent', () => {
  let component: CustomerListPageComponent;
  let fixture: ComponentFixture<CustomerListPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ CustomerListPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
