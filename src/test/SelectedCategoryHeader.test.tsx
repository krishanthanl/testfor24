// React Modules
import { render, screen } from '@testing-library/react';

//Project Modules
import SelectedCategoryHeader from "../components/SelectedCategoryHeader";
import {ProductQuery} from "../utils/interfaces";

test('render ProductCard', () => {
    const productQuery:ProductQuery = {
        searchText: "",
        selectedCategory: "Ecksofas"
    }

    render(<SelectedCategoryHeader productQuery={productQuery} />);
    
    const categoryHeader = screen.getByTestId("categoryHeader");
    
    expect(categoryHeader).toBeInTheDocument();
    expect((categoryHeader as HTMLHeadingElement).nodeType).toBe(1);
});