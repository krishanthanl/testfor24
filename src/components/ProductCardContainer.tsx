// React Modules
import { ReactNode } from "react";

// 3rd party componenents
import { Box } from "@chakra-ui/react";

interface Props {
    children: ReactNode;
}

const ProductCardContainer = ({ children }: Props) => {
    return (
        <Box borderRadius={10} overflow="hidden">
            {children}
        </Box>
    );
};
export default ProductCardContainer;