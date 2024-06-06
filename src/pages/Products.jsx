import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:9090/products")
            .then(response => response.json())
            .then(productsArray => setProducts(productsArray))
    }, [])

    return (
        <div>
            {products.map(item=>{
                return <Link to={`${item.id}`}><h5>{item.name}</h5></Link>
            })}
        </div>
    )
}

export default Products