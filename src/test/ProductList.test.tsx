// React Modules
import { render, screen } from '@testing-library/react';

//Project Modules
import ProductList from "../components/ProductList";
import {ProductQuery,Product} from "../utils/interfaces";
import useProductData from '../hooks/useProductData';

jest.mock('../hooks/useProductData');
const mockUseProductData = useProductData as jest.MockedFunction<typeof useProductData>;

const products: Product[] = [
    {
        image: "https://cdn1.home24.net/resized/",
        shortName: "",
        name: "Ecksofas",
        urlPath: "eckcouches/",
        redirectUrl: "",
        articleCount: 9631
    },
    {
        image: "https://cdn1.home24.net/resized/2",
        shortName: "",
        name: "Einzelsofas",
        urlPath: "einzelsofas/",
        redirectUrl: "",
        articleCount: 963
    }
];
const productQuery: ProductQuery = {
    searchText:"",
    selectedCategory:""
}

const useProductDataResult = {
    data: products,
    error: "",
    isLoading: false
};

test('render ProductList', () => {
    mockUseProductData.mockReturnValue(useProductDataResult);

    render(<ProductList productQuery={productQuery} />);
    const productCardEcksofas = screen.getByText("Ecksofas");
    const productCardEinzelsofas = screen.getByText("Einzelsofas")
            
    expect(productCardEcksofas).toBeInTheDocument();
    expect(productCardEinzelsofas).toBeInTheDocument();

});