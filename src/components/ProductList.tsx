// 3rd Party Modules
import { SimpleGrid } from "@chakra-ui/react";

//Project Modules
import { ProductQuery, Product } from "../utils/interfaces";
import useProductData from "../hooks/useProductData";
import ProductCard from "./ProductCard";
import ProductCardContainer from "./ProductCardContainer";
import ProductCardStructure from "./ProductCardStructure";

interface Props {
    productQuery: ProductQuery;
}

const ProductList = ({ productQuery }: Props) => {
    const {data, isLoading} = useProductData<Product>();
    const structures = [1, 2, 3, 4, 5, 6];
    //console.log("-----------------------");
    //console.log(data);
    //data.map((product, index) => (console.log(`productListCardContainer${product.name}${index}`)));
    //console.log("-----------------------");
    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={6}
        >
            {isLoading && structures.map((structure) =>(
                <ProductCardContainer key={structure}>
                    <ProductCardStructure />
                </ProductCardContainer>
            ))}
            {data.map((product, index) => (
                <ProductCardContainer key={index} data-testid={`productListCardContainer${product.name}${index}`}>
                    <ProductCard product={product} data-testid={`productListCard${product.name}${index}`} />
                </ProductCardContainer>
            ))}
        </SimpleGrid>
    );
}

export default ProductList 