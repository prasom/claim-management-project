import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBillComponent } from './print-bill.component';
import { Store, StoreModule } from '@ngrx/store';

describe('PrintBillComponent', () => {
  let component: PrintBillComponent;
  let fixture: ComponentFixture<PrintBillComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ PrintBillComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintBillComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
