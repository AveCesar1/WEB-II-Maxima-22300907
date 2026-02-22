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
    },
    {
        id: 3,
        name: 'Laptop',
        price: 1499,
        imageUrl: 'https://i5.walmartimages.com/seo/HP-15-6-Ryzen-5-8GB-256GB-Laptop-Rose-Gold_36809cf3-480b-47a5-94f0-e1d5e70c58c0_3.fcc0d6494b0e279a13c32c80c28abfa3.jpeg',
        category: 'Computación',
        description: 'Laptop ultraligera con 16GB RAM',
        inStock: true,
    },
    {
        id: 4,
        name: 'Teclado mecánico',
        price: 129,
        imageUrl: 'https://d1q3zw97enxzq2.cloudfront.net/images/K65_PLUS_WIRELESS_14_2.width-1000.format-webp.webp',
        category: 'Accesorios',
        description: 'Teclado mecánico RGB',
        inStock: true,
    },
    {
        id: 5,
        name: 'Monitor 27"',
        price: 299,
        imageUrl: 'https://d1q3zw97enxzq2.cloudfront.net/images/Slide5_Ttl6rNn.width-1000.format-webp.webp',
        category: 'Computación',
        description: 'Monitor IPS 1440p 75Hz',
        inStock: false,
    },
    {
        id: 6,
        name: 'Mouse inalámbrico',
        price: 49,
        imageUrl: 'https://www.achemex.com/cdn/shop/products/41e_9tyTboL.jpg?v=1682007369',
        category: 'Accesorios',
        description: 'Mouse ergonómico con batería de larga duración',
        inStock: true,
    },
    {
        id: 7,
        name: 'Parlante Bluetooth',
        price: 199,
        imageUrl: 'https://www.achemex.com/cdn/shop/products/41xG8y43EVL.jpg?v=1682012834',
        category: 'Audio',
        description: 'Parlante portátil resistente al agua',
        inStock: true,
    },
    {
        id: 8,
        name: 'Cámara de seguridad',
        price: 149,
        imageUrl: 'https://i0.wp.com/superinventos.blog/wp-content/uploads/2025/05/guia-de-camaras-de-vigilancia-y-seguirdad.jpg?fit=1200%2C800&ssl=1',
        category: 'Seguridad',
        description: 'Cámara de seguridad con visión nocturna',
        inStock: false,
    }
    ];
    
    getAll():Product[]{
        return this.products;
    }
}