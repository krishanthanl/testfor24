// React Modules
import { HStack, Text } from "@chakra-ui/react";
import { Image, ImageProps } from '@chakra-ui/react';

//Project Modules
import {Material} from "../utils/interfaces";
import {MaterialNames} from "../utils/enum";
import teakWood from "../assets/teak-wood.jpeg";
import ashWood from "../assets/ash-wood.jpg";
import mahoganyWood from "../assets/mahogany-wood.png";

interface Props {
    materials: Material[];
}

const MaterialIconList = ({ materials }: Props) => {
    const MaterialList: { [key: string]: ImageProps } = {
        [MaterialNames[MaterialNames.Teak]]: { src: teakWood, alt: 'teak wood', boxSize: '25px' },
        [MaterialNames[MaterialNames.Ash]]: { src: ashWood, alt: 'ash wood', boxSize: '25px' },
        [MaterialNames[MaterialNames.Mahogany]]: { src: mahoganyWood, alt: 'mahogany wood', boxSize: '25px' },
    }

    return (
        <HStack marginY={1}>
            <Text data-testid="matTextBlock">Materials</Text>
            {materials.map((mat,index) => (<Image data-testid={`img${mat.name}`} key={index} {...MaterialList[mat.name]} marginTop={1}></Image>))}
        </HStack>
    );
};

export default MaterialIconList;