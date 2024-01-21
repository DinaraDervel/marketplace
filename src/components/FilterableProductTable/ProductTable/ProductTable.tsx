import s from "./ProductTable.module.scss";
import { Product } from "../../../store/ProductStore";

function ProductRow({
  product: { brand, title, images, price },
  key,
}: {
  product: Product;
  key: number;
}) {
  return (
    <tr>
      <td>{key}</td>
      <td>{brand}</td>
      <td>{title}</td>
      <td>
        <div>
          <img src={images[0]} alt="product"></img>
        </div>
      </td>
      <td>{price}</td>
    </tr>
  );
}

export default function ProductTable({
  productArray,
  selectedBrand,
}: {
  productArray: Array<Product>;
  selectedBrand: string | undefined;
}) {
  let rowsOfProducts = selectedBrand
    ? productArray.map((product) =>
        product.brand === selectedBrand ? (
          <ProductRow product={product} key={product.id} />
        ) : undefined
      )
    : productArray.map((product) => (
        <ProductRow product={product} key={product.id} />
      ));

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Brand</th>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rowsOfProducts}</tbody>
    </table>
  );
}
