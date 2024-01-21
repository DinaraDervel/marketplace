import "./ProductBrandSelection.module.scss";

type ProductBrandSelectionProps = {
  selectedBrand: string | undefined;
  selectBrand: (type: string | undefined) => void;
};

export default function ProductBrandSelection({
  selectedBrand,
  selectBrand,
}: ProductBrandSelectionProps) {
  const handleChange = (event: React.SyntheticEvent): void => {
    let target = event.target as HTMLInputElement;
    selectBrand(target.value);
  };
  return (
    <div className="dropdown">
      <label>
        Select brand
        <select onChange={handleChange} className="dropbtn">
          {/* {productsStore.brands.map((brand) => (
            <option value={brand}>{brand}</option>
          ))} */}
        </select>
      </label>
    </div>
  );
}
