// React Modules
import { useEffect, useState } from "react";

//Project Modules
import ProductCategoryList from "../services/productCategory";

const useProductCategory = () => {
    const [categoryData, setcategoryData] = useState<string[]>([]);

    useEffect(() => {
        const categoryList = ProductCategoryList();
        setcategoryData(categoryList);
    },[]);
    return categoryData;
};

export default useProductCategory;
