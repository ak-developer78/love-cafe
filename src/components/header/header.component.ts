import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }
}
