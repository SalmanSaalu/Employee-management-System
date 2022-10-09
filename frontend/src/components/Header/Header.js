import React, { useEffect } from 'react'
import './Header.css'

import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import emp1 from '../../images/emp1.png'

function Header() {

  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin

  const navigate=useNavigate()

  const dispatch=useDispatch()

  const logoutHandler=()=>{
    
    dispatch(logout())
    navigate('/login')
  }

  useEffect(()=>{
    if(!userInfo){
      navigate('/login')
    }
  },[userInfo])

  return (
    
    <div>
 <Navbar className='color-nav' variant="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home" style={{color:'black'}}><img className='webLogo' src={emp1}/><p className='employee'>Employee Managemet System</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className='navitems' style={{fontFamily: '-webkit-body',marginTop:'-31px'}}>
                      <Nav.Link className='px-4' ><Link className='items' to={'/'}>Home</Link></Nav.Link>
                    
                    {userInfo ?                        
                      <Nav.Link className='px-4 ' ><Link className='items' to={'/attendance'}><p>Attendance</p></Link></Nav.Link>
                      :""}                  
                      
                      {userInfo ?
                      <Nav.Link className='px-4 ' > <Link className='items' to='/profile'><p>{userInfo.name}</p></Link></Nav.Link>
                       :
                       <Nav.Link className='px-4 ' ><Link className='items' to={'/login'}>login</Link></Nav.Link>}
  
                      {userInfo ?
                      <Nav.Link className='px-4 ' onClick={logoutHandler}>Logout</Nav.Link>:""}
  
                      {userInfo ? userInfo.isAdmin ? <Nav.Link className='px-4 ' ><Link className='items' to='/admin'> Admin</Link></Nav.Link>:"":""}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Navbar expand="lg"  >
        <Container>
                <Navbar.Brand href="#home" style={{color:'black'}}><img className='webLogo' src={emp1}/><p className='employee'>Employee Managemet System</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className='navitems' style={{fontFamily: '-webkit-body'}}>
                  <Nav.Link className='px-4' href="#home">Home</Nav.Link>
                    
                    
                    {userInfo ?
                    <div>
                    <Nav.Link className='px-4' ><Link to={'/attendance'}><p>Attendance</p></Link></Nav.Link>
                    <Nav.Link className='px-4' onClick={logoutHandler}>Logout</Nav.Link>
                    <Nav.Link className='px-4' > <Link to='/profile'><p>{userInfo.name}</p></Link></Nav.Link>  
                    </div>
                     :
                     <Link to={'/login'}><Nav.Link className='px-4' >login</Nav.Link></Link>}

                    {userInfo ? userInfo.isAdmin ? <Link to='/admin'> <Nav.Link className='px-4' >Admin</Nav.Link></Link>:"":""}
                </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar> */}
    </div>
  
);
}


export default Header
