import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPostComponent } from './icon-post.component';

describe('IconPostComponent', () => {
  let component: IconPostComponent;
  let fixture: ComponentFixture<IconPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
