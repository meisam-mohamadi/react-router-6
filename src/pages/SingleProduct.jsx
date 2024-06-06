import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const params = useParams()
    console.log(params.productId)

    const [product, setProducts] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:9090/products/${params.productId}`)
            .then(response => response.json())
            .then(prd => setProducts(prd))
    }, [])

    return (
        <div>
            {product && <h2>{product.name}</h2>}
        </div>
    )
}

export default SingleProduct