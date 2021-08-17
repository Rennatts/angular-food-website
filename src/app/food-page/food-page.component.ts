import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

    food!: Food;
    faHeart = faHeart;

    constructor(
        private activatedRoute: ActivatedRoute,
        private foodService: FoodService,
        private cartService: CartService,
        private router: Router
        ) { 
            
        activatedRoute.params.subscribe((params => {
            if(params.id) {
            this.food = foodService.getFoodById(params.id);
            }
        }))
    }

    ngOnInit(): void {
    }

    addToCart(){
        this.cartService.addToCart(this.food);
        this.router.navigateByUrl('/cart-page');
    }

}
