import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgOptimizedImage],
})
export class MenuComponent {
  readonly menuItems = signal<MenuItem[]>([
    {
      name: 'Classic Cheeseburger',
      description: 'Juicy beef patty, melted cheese, fresh lettuce, and our special sauce.',
      price: '₹299',
      imageUrl: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Spicy Chicken Sandwich',
      description: 'Crispy fried chicken with a spicy glaze, pickles, and creamy slaw.',
      price: '₹320',
      imageUrl: 'https://images.pexels.com/photos/6605651/pexels-photo-6605651.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh mozzarella, San Marzano tomatoes, and basil.',
      price: '₹350',
      imageUrl: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice cooked with tender chicken and a blend of exotic spices.',
        price: '₹450',
        imageUrl: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Loaded Waffle Fries',
      description: 'Golden waffle fries topped with cheese sauce, bacon, and chives.',
      price: '₹190',
      imageUrl: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Creamy Tomato Pasta',
      description: 'Rigatoni pasta in a rich tomato and cream sauce with fresh basil.',
      price: '₹280',
      imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Paneer Tikka Sandwich',
      description: 'Grilled sandwich filled with spicy paneer tikka, onions, and bell peppers.',
      price: '₹220',
      imageUrl: 'https://images.pexels.com/photos/4676404/pexels-photo-4676404.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Chocolate Fudge Milkshake',
      description: 'A rich and creamy milkshake made with premium chocolate ice cream.',
      price: '₹180',
      imageUrl: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Oreo Shake',
      description: 'Thick and creamy shake blended with Oreo cookies and topped with whipped cream.',
      price: '₹199',
      imageUrl: 'https://images.pexels.com/photos/5946968/pexels-photo-5946968.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
  ]);
}