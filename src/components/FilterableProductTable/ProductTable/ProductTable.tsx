import s from "./ProductTable.module.scss";
import { Product } from "../../../store/ProductStore";
import { observer } from "mobx-react";
import { useStores } from "../../../use-store";

function ProductRow({ product }: { product: Product }) {
  const { brand, title, images, price } = product;
  return (
    <tr>
      <td className={s.image}>
        <div>
          <img src={images[0]} alt="product"></img>
        </div>
      </td>
      <td className={s.brand}>{brand}</td>
      <td className={s.title}>{title}</td>
      <td className={s.price}>{price}</td>
    </tr>
  );
}

const ProductTable = observer(() => {
  const { productStore } = useStores();

  let rowsOfProducts = productStore.selectedBrand
    ? productStore.products.filter(
        (product) => product.brand === productStore.selectedBrand
      )
    : productStore.products;

  let rowsOfProductsRendered = rowsOfProducts.map((el) => (
    <ProductRow product={el} key={el.id} />
  ));

  function sort(field: keyof Product) {
    rowsOfProducts.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      else if (a[field] > b[field]) return 1;
      return 0;
    });
    console.log(rowsOfProducts);
  }

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.image}></th>
          <th className={s.brand} onClick={() => sort("brand")}>
            Brand
          </th>
          <th className={s.title} onClick={() => sort("title")}>
            Title
          </th>
          <th className={s.price} onClick={() => sort("price")}>
            Price
          </th>
        </tr>
      </thead>
      <tbody>{rowsOfProductsRendered}</tbody>
    </table>
  );
});

export default ProductTable;
