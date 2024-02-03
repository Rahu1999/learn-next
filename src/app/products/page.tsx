import Link from "next/link";

const Products = () =>{
    return (
        <div>
            <Link href="/">Back to Home</Link>
            <h1>Products</h1>
            <Link href="/products/1"> <p>Product1</p></Link>
            <Link href="/products/2"> <p>Product2</p></Link>
            <Link href="/products/3" replace> <p>Product3</p></Link>
        </div>
    )
}

export default Products;