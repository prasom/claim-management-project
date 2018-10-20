import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfInsureListComponent } from './type-of-insure-list.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TypeOfInsureListComponent', () => {
  let component: TypeOfInsureListComponent;
  let fixture: ComponentFixture<TypeOfInsureListComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TypeOfInsureListComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfInsureListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
