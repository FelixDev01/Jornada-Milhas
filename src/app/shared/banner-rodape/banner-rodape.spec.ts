import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRodape } from './banner-rodape';

describe('BannerRodape', () => {
  let component: BannerRodape;
  let fixture: ComponentFixture<BannerRodape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerRodape]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerRodape);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
