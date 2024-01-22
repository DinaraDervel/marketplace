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
      <td>{title}</td>
      <td className={s.price}>{price}</td>
    </tr>
  );
}

const ProductTable = observer(() => {
  const { productStore } = useStores();

  let rowsOfProducts = productStore.selectedBrand
    ? productStore.products.map((product) =>
        product.brand === productStore.selectedBrand ? (
          <ProductRow product={product} key={product.id} />
        ) : undefined
      )
    : productStore.products.map((product) => (
        <ProductRow product={product} key={product.id} />
      ));

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th></th>
          <th>Brand</th>
          <th>Title</th>
          <th className={s.price}>Price</th>
        </tr>
      </thead>
      <tbody>{rowsOfProducts}</tbody>
    </table>
  );
});

export default ProductTable;
