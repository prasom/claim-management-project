import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingReceiveDetailPageComponent } from './parking-receive-detail-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ParkingReceiveDetailPageComponent', () => {
  let component: ParkingReceiveDetailPageComponent;
  let fixture: ComponentFixture<ParkingReceiveDetailPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ParkingReceiveDetailPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingReceiveDetailPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
