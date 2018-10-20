import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingReceiveMainPageComponent } from './parking-receive-main-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ParkingReceiveMainPageComponent', () => {
  let component: ParkingReceiveMainPageComponent;
  let fixture: ComponentFixture<ParkingReceiveMainPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ParkingReceiveMainPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingReceiveMainPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
