// React Modules
import { render, screen, fireEvent } from '@testing-library/react';

//Project Modules
import ProductCategoryMenu from "../components/ProductCategoryMenu";
import {ProductQuery} from "../utils/interfaces";

test('render ProductCategoryList', () => {
    const productQuery:ProductQuery= {
        searchText: "",
        selectedCategory: "Ecksofas"
    }
    const setCategory = (selectedCategory: string) => ({ ...productQuery, selectedCategory });

    render(<ProductCategoryMenu selectedCategory="Ecksofas" onSelectCategory={setCategory}  />);
    const buttonEinzelsofas = screen.getByTestId("prodCategoryHeader");
    
    expect(buttonEinzelsofas).toBeInTheDocument();
    expect(buttonEinzelsofas.classList).toHaveLength(2);
    fireEvent.click(buttonEinzelsofas);
});
