import { Metadata } from "next";

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetaData = ({ params }: Props): Metadata => {
    return {
        title: `Product ${params.productId}`
    }
}

const Product = ({ params }: Props) => {
    const productId = params.productId;
    return (
        <div>
            <h1>Single Product {productId}</h1>
        </div>
    )
}

export default Product;