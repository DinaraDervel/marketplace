import React from "react";
import "./App.css";
import FilteredProductTable from "./components/FilterableProductTable/FilteredProductTable";
import { Provider } from "mobx-react";
import ProductsStore from "./store/ProductsStore";

const stores = {
  productsStore: new ProductsStore(),
};
export type ProductsStoreType = typeof stores.productsStore;

function App() {
  return (
    <div className="wrapper">
      <Provider {...stores}>
        <FilteredProductTable productsStore={stores.productsStore} />
      </Provider>
    </div>
  );
}

export default App;
