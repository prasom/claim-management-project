import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingMainComponent } from './setting-main.component';
import { Store, StoreModule } from '@ngrx/store';

describe('SettingMainComponent', () => {
  let component: SettingMainComponent;
  let fixture: ComponentFixture<SettingMainComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ SettingMainComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingMainComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
