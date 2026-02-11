import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'; // Corrected import name
import { provideRouter } from '@angular/router'; // Required for routing tests

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Use the exported class name
      providers: [provideRouter([])] // Provide empty routes for the test
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    // Update this string to match whatever title you set in app.component.ts
    // If you haven't set a title, 'Food List App' is a good choice for Assignment 5
    expect(compiled.querySelector('h1')?.textContent).toContain('Food List App');
  });
});