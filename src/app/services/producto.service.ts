import { Injectable } from "@angular/core";
import { Product } from "../models/producto.model";

@Injectable({providedIn: 'root'})

export class ProductsService {
    private readonly products: Product[]=[
    {
        id: 1,
        name: 'Audífonos',
        price: 599,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7-EMeF3fuDckrIwt82T7VX6rLZnyJwtGGA&s',
        category: 'Audio',
        description: 'Audífonos Inalámbricos',
        inStock: true,
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 999,
        imageUrl: 'https://helios-i.mashable.com/imagery/reviews/05VWnorCBXlbMxLXrrXWmIY/hero-image.fill.size_1248x702.v1759358941.jpg',
        category: 'Electrónica',
        description: 'Smartphone de última generación',
        inStock: true,
    }
    ];
    
    getAll():Product[]{
        return this.products;
    }
}