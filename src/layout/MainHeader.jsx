import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
    return (
        <div>
            <Link to="/">home page</Link> |
            <Link to="/contactUs">contact us</Link> |
            <Link to="/products">products</Link>
        </div>
    )
}

export default MainHeader