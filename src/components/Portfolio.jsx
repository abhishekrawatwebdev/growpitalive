import React from 'react'
import {Link} from "react-router-dom"
import Sidebar from './Sidebar'
const Portfolio = () => {
    return (
        <>
        <Sidebar/>
        <div>Portfolio</div>
        <p>please check /wallet page for the assignment</p>
        <Link to="/wallet">click here</Link>
        </>
        


    )
}

export default Portfolio