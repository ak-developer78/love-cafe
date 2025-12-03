import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, HeroComponent, MenuComponent, TestimonialsComponent, FooterComponent]
})
export class AppComponent {}