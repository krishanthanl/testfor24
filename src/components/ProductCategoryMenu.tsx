// 3rd Party Modules
import {
    Button,
    Heading,
    HStack,
    List,
    ListItem,
  } from "@chakra-ui/react";

//Project Modules
import useProductCategory from '../hooks/useProductCategory';

interface Props {
    selectedCategory: string
    onSelectCategory: (selCategory: string) => void;
}

const ProductCategoryList = ({selectedCategory, onSelectCategory}: Props) => {
    const categoryData = useProductCategory();
    return(
        <>
            <Heading data-testid={`prodCategoryHeader`} fontSize="2xl" marginTop={9} marginBottom={3}>
                Product Category
            </Heading>
            <List>
            {categoryData.map((item)=>
                <ListItem key={item} paddingY="5px">
                    <HStack>
                        <Button
                            whiteSpace="normal"
                            textAlign="left"
                            fontWeight={item === selectedCategory ? "bold" : "normal"}
                            onClick={() => onSelectCategory(item)}
                            fontSize="md"
                            variant="link"
                            data-testid={`prodCategoryHeader${item}`}
                            type="button"
                            aria-label={item}
                        >
                            {item}
                        </Button>
                    </HStack>
                </ListItem>
                ) 
            }
            </List>
        </>
    );
};

export default ProductCategoryList;