import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbSidebarComponent } from './fb-sidebar.component';

describe('FbSidebarComponent', () => {
  let component: FbSidebarComponent;
  let fixture: ComponentFixture<FbSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
