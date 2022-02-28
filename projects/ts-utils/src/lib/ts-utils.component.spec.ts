import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsUtilsComponent } from './ts-utils.component';

describe('TsUtilsComponent', () => {
  let component: TsUtilsComponent;
  let fixture: ComponentFixture<TsUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
