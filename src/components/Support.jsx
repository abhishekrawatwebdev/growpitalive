import React from 'react'
import { Link } from "react-router-dom"
import Sidebar from './Sidebar'
const Support = () => {
    return (
        <>
        <Sidebar/>
            <div>Support page</div>
            <p>please check /wallet page for the assignment</p>
            <Link to="/wallet">click here</Link>
        </>
    )
}

export default Support