import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';

function Cart(props) {
    
    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cart")))
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
    },[])

    return(
        <>
        <Link to='/'>Home</Link>
        <h1>Cart</h1>
        <h2>{qtyCart}</h2>
        <ProductList products={products} cart/>
        </>
    )
}

export default Cart