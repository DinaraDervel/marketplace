import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import ProductBrandSelection from "./ProductBrandSelection/ProductBrandSelection";
import ProductTable from "./ProductTable/ProductTable";
import { ProductsStoreType } from "../../App";

const FilteredProductTableinject = inject("productsStore")(
  observer(({ productsStore }: { productsStore: ProductsStoreType }) => {
    useEffect(() => {
      if (!productsStore.isLoading) productsStore.load();
      // eslint-disable-next-line
    }, []);

    useEffect(() => {
      productsStore.load();
      // eslint-disable-next-line
    }, [productsStore.error]);

    const [selectedBrand, setSelectedBrand] = useState(undefined);
    function selectBrand(newBrand: string | undefined): void {
      setSelectedBrand(undefined);
    }

    return (
      <>
        <ProductBrandSelection
          selectedBrand={selectedBrand}
          selectBrand={selectBrand}
        />
        <ProductTable
          productArray={productsStore.products}
          selectedBrand={selectedBrand}
        />
      </>
    );
  })
);
export default FilteredProductTableinject;
