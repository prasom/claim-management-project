import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfInsureFormComponent } from './type-of-insure-form.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TypeOfInsureFormComponent', () => {
  let component: TypeOfInsureFormComponent;
  let fixture: ComponentFixture<TypeOfInsureFormComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TypeOfInsureFormComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfInsureFormComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
