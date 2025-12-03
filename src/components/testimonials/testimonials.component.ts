import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class TestimonialsComponent {
  readonly testimonials = signal<Testimonial[]>([
    {
      quote: "The coffee here is simply the best in town! The atmosphere is so cozy and welcoming. I could spend hours here.",
      name: 'Priya Sharma',
      rating: 5,
    },
    {
      quote: "A perfect spot for a weekend brunch. The Spicy Chicken Sandwich was amazing, and the service was top-notch.",
      name: 'Rahul Verma',
      rating: 5,
    },
    {
      quote: "I love the vibe at Love Birds Cafe. It's my go-to place for meetings and catching up with friends. Highly recommended!",
      name: 'Anjali Mehta',
      rating: 4,
    },
  ]);

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStarArray(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }
}
