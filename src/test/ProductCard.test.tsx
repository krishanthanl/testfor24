// React Modules
import { render, screen } from '@testing-library/react';

//Project Modules
import ProductCard from "../components/ProductCard";
import {Product} from "../utils/interfaces";

test('render ProductCard', () => {
    const product:Product = {
        image: "https://cdn1.home24.net/resized/",
           shortName: "",
           name: "Ecksofas",
           urlPath: "eckcouches/",
           redirectUrl: "",
           articleCount: 9631
    }

    render(<ProductCard product={product} />);
    
    const productCardImage = screen.getByTestId("imgEcksofas");
    const productCardHeader = (screen.getByTestId("headerEcksofas"));
    
    
    expect(productCardImage).toBeInTheDocument();
    expect(productCardHeader).toBeInTheDocument();
    
    console.log((productCardHeader as HTMLHeadingElement).ariaLabel);

    expect((productCardImage as HTMLImageElement).src).toContain("https://cdn1.home24.net/resized/");
});