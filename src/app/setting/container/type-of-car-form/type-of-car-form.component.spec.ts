import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfCarFormComponent } from './type-of-car-form.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TypeOfCarFormComponent', () => {
  let component: TypeOfCarFormComponent;
  let fixture: ComponentFixture<TypeOfCarFormComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TypeOfCarFormComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfCarFormComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
