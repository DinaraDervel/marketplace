import { observer } from "mobx-react";
import "./ProductBrandSelection.module.scss";
import { useStores } from "../../../use-store";

type ProductBrandSelectionProps = {
  selectedBrand: string | undefined;
  selectBrand: (type: string | undefined) => void;
};

const ProductBrandSelection = observer(
  ({ selectedBrand, selectBrand }: ProductBrandSelectionProps) => {
    const { productStore } = useStores();

    const handleChange = (event: React.SyntheticEvent): void => {
      let target = event.target as HTMLInputElement;
      selectBrand(target.value);
    };
    return (
      <div className="dropdown">
        <label>
          Select brand
          <select onChange={handleChange} className="dropbtn">
            <option value={undefined}>Not selected</option>
            {Array.from(productStore.brands).map((brand) => (
              <option value={brand}>{brand}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
);
export default ProductBrandSelection;
