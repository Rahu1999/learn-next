"use client"
import { useRouter } from "next/navigation";


const ProductOrder = () =>{
const router = useRouter();
    return <div>
        <h1>Product Order</h1>
        <button onClick={()=>router.push('/')}>Place Order</button>
    </div>
}

export default ProductOrder;