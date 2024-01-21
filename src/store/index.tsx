import { createContext } from "react";
import { ProductStore } from "./ProductStore";

export const rootStoreContext = createContext({
  productStore: new ProductStore(),
});
