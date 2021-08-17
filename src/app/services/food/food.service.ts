import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getAllFoodsBySearchTerm(searchTerm: string): Food[]{
    return this.getAll().filter(food => 
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 1 },
      { name: 'Dinner', count: 2 },
      { name: 'Lunch', count: 2 },
      { name: 'pasta', count: 1 },
      { name: 'Hamburger', count: 1 },
      { name: 'japanese', count: 2 },
      { name: 'asian', count: 3 },
      { name: 'fried', count: 1 },
      { name: 'korean', count: 1 },
    ]

  }

  getAllFoodsByTag(tag: string): Food[] {

    return tag == "All"? 
    this.getAll() : 
    this.getAll().filter(food => food.tags?.includes(tag));

  }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;

  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/1.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 2,
        name: 'Lasagna',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['europe', 'italy'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/2.jpg',
        tags: ['Dinner', 'Lunch'],
      },
      {
        id: 3,
        name: 'Pasta',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Italy'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/3.jpg',
        tags: ['Lunch', 'Dinner', 'pasta'],
      },
      {
        id: 4,
        name: 'Sushi',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Japan'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/4.jpg',
        tags: ['japanese', 'asian'],
      },
      {
        id: 5,
        name: 'Tempurá',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['japan'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/5.jpg',
        tags: ['fried', 'japanese', 'asian'],
      },
      {
        id: 6,
        name: 'Kimchi',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['korea'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/6.jpg',
        tags: ['asian', 'korean'],
      },
    ]

  }
}
