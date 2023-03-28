// 3rd Party Modules
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';

//Project Modules
import {Material,Product} from "../utils/interfaces";
import {MaterialNames} from "../utils/enum";
import MaterialIconList from "./MaterialIconList";

interface Props {
    product: Product
}

const ProductCard = ({product}: Props) => {
    // hard code this temporary 
    // TODO: need get Materail list from Back end
    const materialList:Material[] = [
        {id: 1, name: MaterialNames[MaterialNames.Teak]},
        {id: 2, name: MaterialNames[MaterialNames.Ash]},
        {id: 3, name: MaterialNames[MaterialNames.Mahogany]},
    ];

    //TODO: Need to enable localization
    return(
        <Card>
            <CardBody>
                <Image data-testid={`img${product.name}`} src={product.image} boxSize='250px' objectFit='cover' borderRadius='full' aria-label={product.name} />
                <Heading data-testid={`header${product.name}`} fontSize='2xl' aria-label={product.name}>{product.name}</Heading>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <MaterialIconList materials={materialList} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default ProductCard;