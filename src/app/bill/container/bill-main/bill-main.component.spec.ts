import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillMainComponent } from './bill-main.component';
import { Store, StoreModule } from '@ngrx/store';

describe('BillMainComponent', () => {
  let component: BillMainComponent;
  let fixture: ComponentFixture<BillMainComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ BillMainComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillMainComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
