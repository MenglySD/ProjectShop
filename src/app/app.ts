import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Footer } from './footer/footer';
import { CartService } from './service/cart-service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
    ngOnInit(): void {
    initFlowbite();
  }

  constructor(public cartService: CartService) {

  }
}
