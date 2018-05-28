import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSocialComponent } from './ng-social.component';

describe('NgSocialComponent', () => {
  let component: NgSocialComponent;
  let fixture: ComponentFixture<NgSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
