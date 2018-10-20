import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillListComponent } from './bill-list.component';
import { Store, StoreModule } from '@ngrx/store';

describe('BillListComponent', () => {
  let component: BillListComponent;
  let fixture: ComponentFixture<BillListComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ BillListComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
