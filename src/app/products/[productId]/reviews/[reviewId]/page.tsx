const Review = ({params}: {params:{reviewId: string, productId: string}}) =>{
    const reviewId = params.reviewId
    const productId = params.productId
    return (
        <div>
            <h1>Product Id {productId} Single Review{reviewId}</h1>
        </div>
    )
}
export default Review;