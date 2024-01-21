import { Product } from './../components/FilterableProductTable/ProductTable/ProductTable';
import { makeAutoObservable } from "mobx";
import { getAllProducts } from "../api/request";

class ProductsStore {
    products: Array<Product> = [];
    brands: Array<string> = [];
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
        this.brands = this.products.map(product => product.brand);
    }
}


export default ProductsStore;

