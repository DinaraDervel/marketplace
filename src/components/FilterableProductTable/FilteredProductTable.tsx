import { observer } from "mobx-react";
import { useEffect } from "react";
import { useStores } from "../../use-store";
import ProductBrandSelection from "./ProductBrandSelection/ProductBrandSelection";
import ProductTable from "./ProductTable/ProductTable";

const FilteredProductTable = observer(() => {
  const { productStore } = useStores();

  useEffect(() => {
    if (!productStore.isLoading) productStore.load();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    productStore.getBrands();
    // eslint-disable-next-line
  }, [productStore.isLoading]);

  if (productStore.error) {
    return (
      <div className="error-wrapper">
        <div className="error">
          Sorry, something went wrong. Error: {productStore.error.message}
        </div>
      </div>
    );
  }

  if (productStore.isLoading) {
    return (
      <div className="loader-wrapper">
        <span className="loader"></span>
      </div>
    );
  }

  function selectBrand(type: string | undefined): void {
    productStore.selectBrand(type);
  }

  return (
    <>
      <ProductBrandSelection
        selectedBrand={productStore.selectedBrand}
        selectBrand={selectBrand}
      />
      <ProductTable />
    </>
  );
});

export default FilteredProductTable;
