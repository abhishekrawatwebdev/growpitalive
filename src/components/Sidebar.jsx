import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/sidebar.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

 const handleClick = ()=>{
        let sidebarlink = document.getElementsByClassName("sidebarlink");
        for(let i = 0; i<sidebarlink.length; i++){
            sidebarlink[i].classList.remove("activeSidelink");
        }
        sidebarlink.forEach(link => {
            link.classList.add("activeSidelink")
            
        });
        
    }
const Sidebar = () => {
  return (
   
    
    <div className='sidebar h-100'>
        <div className='d-flex px-4 py-2 sidebarMenu' style={{color: "white"}} >
            <MenuOutlinedIcon />
            <p className='ms-3 fw-bold'>Menu</p>
        </div>
        <ul className='sidebarList'>
            <li className='px-4 py-3 '>
                
                <Link to={"/"} className='d-flex sidebarlink activeSidelink' onClick={handleClick} >
                    <HomeOutlinedIcon />
                    <p>Home</p>
                </Link>
            </li>
            <li className='px-4 py-3 '>
                <Link to={"/portfolio"} className='d-flex sidebarlink' onClick={handleClick} >
                    <BusinessCenterOutlinedIcon />
                    <p>Portfolio</p>
                </Link>
            </li>
            <li className='px-4 py-3 '>
                <Link to={"/invest"} className='d-flex sidebarlink' onClick={handleClick} >
                    <LocalAtmOutlinedIcon />
                <p>Invest</p>
                </Link>
            </li>
            <li className='px-4 py-3 '>
                <Link to={"/wallet"} className='d-flex sidebarlink' onClick={handleClick} >
                    <AccountBalanceWalletOutlinedIcon />
                    <p>Wallet</p>
                </Link>
            </li>
            <li className='px-4 py-3 '>
                <Link to={"/support"} className='d-flex sidebarlink' onClick={handleClick}>
                    <SupportAgentOutlinedIcon/>
                    <p>Support</p>
                </Link>
            </li>
        </ul>

    </div>
  )
}

export default Sidebar