import { observer } from "mobx-react";
import s from "./ProductBrandSelection.module.scss";
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
      selectBrand(target.value !== "Not selected" ? target.value : undefined);
    };

    return (
      <div className={s.wrapper}>
        <label>
          <span>Select brand:</span>
          <select onChange={handleChange}>
            <option>Not selected</option>
            {Array.from(productStore.brands).map((brand) => (
              <option key={brand}>{brand}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
);
export default ProductBrandSelection;
