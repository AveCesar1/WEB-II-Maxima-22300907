import { Component } from "@angular/core";
import { ProductsService } from "../../services/producto.service";
import { Product } from "../../models/producto.model";
import { ProductCardComponent } from "../producto-card/producto-card";

@Component({
    selector: 'app-catalogo',
    standalone: true,
    imports:[ProductCardComponent],
    templateUrl: './catalog.html',
    styleUrls: ['./catalog.css'],
})

export class CatalogoComponent{
    products: Product[] = [];
    constructor(private productsService: ProductsService){
        this.products = this.productsService.getAll();
    }
}