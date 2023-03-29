// React Modules
import { useState } from "react";

// 3rd Party Modules
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

//Project Modules
import TopNavigationBar from "./components/TopNavigationBar";
import ProductCategoryMenu from "./components/ProductCategoryMenu";
import SelectedCategoryHeader from './components/SelectedCategoryHeader';
import ProductList from "./components/ProductList";
import {ProductQuery, Search} from "./utils/interfaces";

function App() {

  const [productQuery, setProductQuery] = useState<ProductQuery>({} as ProductQuery);

  if(productQuery.selectedCategory === null || productQuery.selectedCategory === undefined){
    productQuery.selectedCategory = "Ecksofas";
  }
  const search: Search = {
    onSearch: (searchText) => setProductQuery({ ...productQuery, searchText })
  }

  return (
    <Grid 
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
        <TopNavigationBar search={search}  />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <ProductCategoryMenu 
            selectedCategory={productQuery.selectedCategory} 
            onSelectCategory={(selectedCategory) => setProductQuery({...productQuery,selectedCategory})} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <SelectedCategoryHeader productQuery={productQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}></Box>
          </Flex>
        </Box>
        <ProductList productQuery={productQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
