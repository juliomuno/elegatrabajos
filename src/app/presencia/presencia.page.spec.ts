import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresenciaPage } from './presencia.page';

describe('PresenciaPage', () => {
  let component: PresenciaPage;
  let fixture: ComponentFixture<PresenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
