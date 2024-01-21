import { makeAutoObservable } from "mobx";
import { getAllProducts } from "../api/request";

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>;
  };
  
export class ProductStore {
    products: Array<Product> = [];
    brands: Set<string> = new Set([]);
    selectedBrand: string | undefined = undefined;
    isLoading:boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    load() {
        this.isLoading = true;
        this.error = null;
        getAllProducts()
            .then((response) => {
                this.products = response.products;
            })
            .catch(err => {
                this.error = err;
            })
            .finally(() => this.isLoading = false)
    }

    getBrands() {
         let brands = new Set(this.products.map(product => product.brand));
         this.brands = brands;
    }

    selectBrand(brand:string | undefined) {
        this.selectedBrand=brand;
    }
}


