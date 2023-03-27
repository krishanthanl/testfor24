// 3rd Party Modules
import { Heading } from '@chakra-ui/react';

//Project Modules
import { ProductQuery } from "../utils/interfaces";


interface Props {
    productQuery: ProductQuery
}

const SelectedCategoryHeader = ({ productQuery }: Props) => {
    const header = `${productQuery.selectedCategory || ''}`;
  
    return (
      <Heading as='h1' marginY={5} fontSize='5xl'>{header}</Heading>
    )
}
  
export default SelectedCategoryHeader