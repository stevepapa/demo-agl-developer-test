import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PageCatsComponent } from './page-cats.component';

describe('PageCatsComponent', () => {
  let component: PageCatsComponent;
  let fixture: ComponentFixture<PageCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PageCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('contains page h1 title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1')).toBeTruthy();
  });

  it('should create page component', () => {
    expect(component).toBeTruthy();
  });
});
