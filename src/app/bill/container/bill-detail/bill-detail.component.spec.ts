import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDetailComponent } from './bill-detail.component';
import { Store, StoreModule } from '@ngrx/store';

describe('BillDetailComponent', () => {
  let component: BillDetailComponent;
  let fixture: ComponentFixture<BillDetailComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ BillDetailComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
