import { observer } from "mobx-react";
import { useEffect } from "react";
import ProductBrandSelection from "./ProductBrandSelection/ProductBrandSelection";
import ProductTable from "./ProductTable/ProductTable";
import { useStores } from "../../use-store";

const FilteredProductTableinject = observer(() => {
  const { productStore } = useStores();

  useEffect(() => {
    if (!productStore.isLoading) {
      productStore.load();
      productStore.getBrands();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    productStore.load();
    productStore.getBrands();
    // eslint-disable-next-line
  }, [productStore.error]);

  function selectBrand(type: string | undefined): void {
    productStore.selectBrand(type);
  }

  return (
    <>
      <ProductBrandSelection
        selectedBrand={productStore.selectedBrand}
        selectBrand={selectBrand}
      />
      <ProductTable
        productArray={productStore.products}
        selectedBrand={productStore.selectedBrand}
      />
    </>
  );
});
export default FilteredProductTableinject;
