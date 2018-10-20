import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingReceiveListPageComponent } from './parking-receive-list-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ParkingReceiveListPageComponent', () => {
  let component: ParkingReceiveListPageComponent;
  let fixture: ComponentFixture<ParkingReceiveListPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ParkingReceiveListPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingReceiveListPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
