// 3rd Party Modules
import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const ProductCardStructure = () => {
    return (
        <Card>
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}
  
export default ProductCardStructure