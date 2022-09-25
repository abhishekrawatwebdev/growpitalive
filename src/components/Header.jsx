import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "../styles/header.css"

function Header() {
  return (
    <>
  
      <Navbar bg="dark" variant="dark" className='ps-5 pe-2 justify-content-between navbar'>
        
          <Navbar.Brand href="#home" className='fw-bold fs-4 logo'>Growpital</Navbar.Brand>
          <Nav className="mx-5 fw-bold" bg="dark" >
            <div className="d-flex ms-5 ">
              <Nav.Link href="#home" className=' me-5 navlink'>Home</Nav.Link>
            <Nav.Link href="#about" className=' me-5 navlink'>About</Nav.Link>
            <Nav.Link href="#service"className=' me-5 navlink'>Service</Nav.Link>
            <Nav.Link href="#contact"className=' me-5 navlink'>Contact Us</Nav.Link>
            </div>
          </Nav>
          <div className='icons d-flex'>
            <NotificationsNoneOutlinedIcon className='me-3 iconYellow '/>
            <AccountCircleOutlinedIcon className="mx-3 iconYellow"/>
          </div>
      </Navbar> 
    </>
  );
}

export default Header;