import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfCarListComponent } from './type-of-car-list.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TypeOfCarListComponent', () => {
  let component: TypeOfCarListComponent;
  let fixture: ComponentFixture<TypeOfCarListComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TypeOfCarListComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfCarListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
