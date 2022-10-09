
import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Office from '../../videos/Office.mp4'
import './HomeScreen.css'
import {BsInstagram,BsCodeSlash} from 'react-icons/bs'
import {AiOutlineMail,AiOutlineWhatsApp,AiFillLock} from 'react-icons/ai'
import {HiOutlineAnnotation,HiPresentationChartLine,HiDocumentDuplicate} from 'react-icons/hi'
import {RiTeamFill,RiUserSettingsFill} from 'react-icons/ri'
import { MdSecurity,MdUpdate,MdHelp,MdCloudUpload,MdMarkunreadMailbox,MdPlace } from 'react-icons/md'
import { SiSlideshare,SiMarketo,SiTrainerroad } from 'react-icons/si'
import { IoIosPeople} from 'react-icons/io'
import { ImEarth } from 'react-icons/im'
import { GiRapidshareArrow,GiRobotGrab } from 'react-icons/gi'
import { GoDeviceMobile } from 'react-icons/go'
import { FaPhoneAlt } from 'react-icons/fa'

import computerlady from '../../images/computerlady.jpg'
import statistics from '../../images/statistics.jpg'
import google from '../../images/google.png'
import infosys from '../../images/infosys.png'
import capgemni from '../../images/capgemni.png'
import accenture from '../../images/accenture.png'
import tcs from '../../images/tcs.png'
import wipro from '../../images/wipro.png'
import microsoft from '../../images/microsoft.png'
import keyboard2 from '../../images/keyboard2.jpg'
import oracle from '../../images/oracle.png'
import hp from '../../images/hp.png'
import ibm from '../../images/ibm.png'
import cognizant from '../../images/cognizant.png'
import sap from '../../images/sap.png'
import emp1 from '../../images/emp1.png'

import ProgressBar from 'react-bootstrap/ProgressBar'
import AOS from 'aos';
import 'aos/dist/aos.css';

import {useNavigate  } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'
import {getUserAttendance,getUserLeave } from '../../actions/attendanceAction'
AOS.init();


function HomeScreen() {
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin

  const dispatch=useDispatch()
  const navigate=useNavigate()
  if(userInfo){
    dispatch(getUserAttendance('attendance'))
    dispatch(getUserLeave('leave'))
  }
  if(!userInfo){
      navigate('/login')
    }


  const logoutHandler=()=>{
    dispatch(logout())
  }

  return (
    <div>
    <div>
      <div id="videoDiv"> 
        <video  id="video1" playsInline autoPlay muted loop >
          <source src={Office} type="video/mp4"/>
        </video> 
        <div id='heading' >
          <div id='colorchange'>
          <h1 style={{fontFamily:'initial'}}>Corporate <b style={{color:'#68b2b7'}}>Employee Managing</b> </h1>
          <h1 style={{fontWeight:'100'}} >Best technology demand.</h1>
          </div>

          <hr id='hr'></hr>
          <p className='hrm' >Human resource management, HRM, is the department of a business organization that looks after the hiring,<br/> management and firing of staff. HRM focuses on the function of people within the business, <br/>ensuring best work practices are in place at all times.</p>
          <div id='colorchange' style={{paddingTop:'15px',paddingBottom:'40px'}}>
            <div className='row '>
            <hr className='hr2 col-4' style={{width:'17%',marginLeft:'13px'}}/>
              <div className='col-4 connectWithUs'  style={{width:'103px'}}><BsInstagram style={{color:'red'}} />&nbsp;&nbsp;<AiOutlineMail/>&nbsp;&nbsp;<AiOutlineWhatsApp style={{color:'#47ee47'}}/></div>
              <hr className='hr2 col-4' />
            </div>

            {/* <h3 className='getintouch'><b>Get in touch...</b></h3>
            <div>
              <button className='connectbtn'><BsInstagram/></button>
              <button className='connectbtn'><AiOutlineMail/></button>
              <button className='connectbtn'><AiOutlineWhatsApp/></button></div> */}
          </div>

        </div>
        <div id='heading2' data-aos="fade-up"  data-aos-duration='1200'>
           <div style={{width:'90%',marginLeft:'5%'}}>
            <p className='statisticHeading2' style={{color:'black'}}>O U R <strong style={{letterSpacing:'2px',fontWeight:'600'}}>&nbsp;Leading Community</strong></p>

            </div>
          <div className='row backimageForemployee' style={{marginTop:'4%' }} >
          {/* ,backgroundImage: `url(${computerwhite})`,backgroundSize:'cover' */}
            <div className=' col-md-4 ' data-aos="zoom-in" data-aos-duration='1500' >
              <div className='justify-content-center d-flex' style={{ overflow: 'hidden'}}>
              <img className='image' style={{paddingTop:'23px',paddingBottom:'13px',width:'300px',height:'16rem',backgroundColor:'black'}} src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
              </div>
              <h3 className='text-center heading' ><b><BsCodeSlash/></b>&nbsp;&nbsp;Developers</h3>
              <p className='text-start paragraphdata'><b>" A developer is the key individual behind all software applications. Generally, developers are well versed in at least one programming language and proficient in the art of structuring and developing software code for software or a program. "</b></p>
            </div>


            <div className=' col-md-4 ' data-aos="zoom-in" data-aos-duration='1500'>
              <div className='justify-content-center d-flex' style={{ overflow: 'hidden'}}>
                <img className='image' style={{paddingTop:'23px',paddingBottom:'13px',width:'300px',height:'16rem',backgroundColor:'black'}} src='https://www.insegment.com/blog/wp-content/uploads/2016/04/The-Role-of-Marketing-1.jpg'/>
              </div>
              <h3 className='text-center heading'><b><HiOutlineAnnotation/></b>&nbsp;&nbsp;Marketing</h3>
              <p className='text-start paragraphdata'><b>" Marketing research is the function that links the consumer, customer, and public to the marketer through information, used to identify and define opportunities and problems; and evaluate actions; and improve understanding of it as a process. "</b> </p>
            </div>

            <div className=' col-md-4 ' data-aos="zoom-in" data-aos-duration='1500'>
              <div className='justify-content-center d-flex' style={{ overflow: 'hidden'}}>
                <img className='image' style={{paddingTop:'23px',paddingBottom:'13px',width:'300px',height:'16rem',backgroundColor:'black'}}  src='https://miro.medium.com/max/1400/1*qzwjq5jkZ1DapKmcPAtdAQ.jpeg'/>
              </div>
              <h3 className='text-center heading'><b><RiTeamFill/></b>&nbsp;&nbsp;Project Management</h3>
              <p className='text-start paragraphdata'><b>" Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people. The development of software for an improved business process, the construction of a building & the expansion of sales into a new geographic market. "</b></p>
            </div>
          </div>
          <div className='row '  data-aos="fade-up"  data-aos-duration='1500' style={{height:'auto',backgroundColor:'#f0f0f0',marginTop:'50px',paddingBottom:'100px' }}>
            <div style={{width:'90%',marginLeft:'5%'}}>
            <p className='statisticHeading2' style={{color:'black'}}>J O B <strong style={{letterSpacing:'2px',fontWeight:'600'}}>&nbsp;Oppurtunities</strong></p>

            </div>

              <div className='col-md-6 d-flex justify-content-center'>
                <img className='image2' src={computerlady}/>

              </div>
              <div className='col-md-6'>
                <div className='jobsforyou'>
                <p className='paragraphdata2'>JOBS FOR YOU</p>
                <p style={{fontFamily:'system-ui'}}> When a hiring team finds the right candidate, it usually contacts them in order to announce its decision and make a job offer. When the job offer is verbal, the hiring manager calls the selected candidate and lets them know they are offering them the position.</p>
                <p className='paragraphdata2'>AVAILABLE PORTALS</p>
                <p style={{fontFamily:'system-ui'}}> a web portal is a specially designed website that serves as the single point of access for information, curated specifically for the user. Audiences expect digital self-service and convenience and Portals are the engine that meets this demand.
                  They are many types that serve a broad array of requirements such as Portals for business customers, partners and employees. Community, Government and Cultural Portals have also grown in the last twenty years. </p>
                </div>
             </div>

             <div className='row facility'  style={{height:'auto',paddingTop:'45px'}}>
                <div className='col-md-4 icons'>
                  <MdSecurity style={{fontSize:'76px',color:'red'}}/>
                  <p className='iconDesc'>Security</p>
                  <p className='iconDesc2'>Security basically can be considered as a tool, a fungible and negotiable one that offers a monetary value.Securing your data. </p>
                </div>
                <div className='col-md-4 icons'>
                  <HiPresentationChartLine style={{fontSize:'76px',color: '#00afff'}}/>
                  <p className='iconDesc'>Presentation</p>
                  <p className='iconDesc2'>A presentation conveys information from a speaker to an audience. Presentations are typically introduction, lecture, or speech e.t.c</p>
                </div>
                <div className='col-md-4 icons'>
                  <MdUpdate style={{fontSize:'76px',color:'#da0d5e'}}/>
                  <p className='iconDesc'>24 / 7 support</p>
                  <p className='iconDesc2'>A 24/7 support model ensures that a customer is able to get their issue resolved no matter what day or time it is. Allday support.</p>
                </div>
             </div>
          </div>
          <div style={{backgroundColor:'#2f2c2c',paddingBottom:'5rem'}} data-aos="fade-up"  data-aos-duration='1500'>
            <div className='row statisticalInfo'>
              <p className='statisticHeading'>L a t e s t <strong style={{letterSpacing:'2px',fontWeight:'600'}}>&nbsp;Statistical Information</strong></p>
                <div className='col-md-4' style={{paddingBottom:'20px'}}>
                    <p style={{lineHeight:'1.9',color:'white',fontFamily:'unset',fontWeight:'100'}}>statistics, the science of collecting, analyzing, presenting, and interpreting data. Governmental needs for census data as well as information about a variety of economic activities provided much of the early impetus for the field of statistics. Currently the need to turn the large amounts of data available in many applied fields into useful information has stimulated both theoretical and practical developments in statistics.</p>
                    <button className='readmoreBtn'>Read More</button>
                </div>
                <div className='col-md-4' style={{paddingBottom:'20px'}}>
                  <img src={statistics} style={{width:'100%'}}/>
                </div>
                <div className='col-md-4' style={{paddingBottom:'20px'}}>
                  <p className='serviceHeaders'>ONLINE MARKETING</p>
                <ProgressBar now={60} variant='first' />
                <p className='serviceHeaders'>FINANTIAL CONSULTING</p>
                <ProgressBar now={70} variant='second' />
                <p className='serviceHeaders'>CREATIVE PROJECTS</p>
                <ProgressBar now={80} variant='third' />
                <p className='serviceHeaders'>FUTURE ENHANCEMENT</p>
                <ProgressBar now={75} variant='four' />
                <p className='serviceHeaders'>24/7 SUPPORT</p>
                <ProgressBar now={90} variant='five' />

                </div>

            </div>

          </div>
          <div style={{height:'auto',paddingBottom:'5rem'}} data-aos="fade-up"  data-aos-duration='1200'>
            <div className='statisticalInfo'>
              <p className='statisticHeading' style={{color:'black'}}>O u r<strong style={{letterSpacing:'2px',fontWeight:'600'}}>&nbsp;Trusted Partners</strong></p>
              <div className='row' style={{height:'auto'}}>
                <div className='col-xl-3' style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                  <img className='logo' src={google} />
                </div>
                <div className='col-xl-3'  style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                <img className='logo' src={infosys} />
                </div>
                <div className='col-xl-3'  style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                  <img className='logo' src={capgemni} />
                </div>
                <div className='col-xl-3'  style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                <img className='logo' src={accenture} />
                </div>
              </div>
              <div className='row' style={{height:'auto'}}>
                <div className='col-xl-3' style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                  <img className='logo' src={tcs} />
                </div>
                <div className='col-xl-3'  style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                <img className='logo' src={wipro} style={{width:'128px'}}/>
                </div>
                <div className='col-xl-3'  style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                  <img className='logo' src={microsoft} />
                </div>
                <div className='col-xl-3'  style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                <img className='logo' src={oracle} />
                </div>
              </div>
              <div className='row' style={{height:'auto'}}>
                <div className='col-xl-3' style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                  <img className='logo' style={{width:'120px'}} src={hp} />
                </div>
                <div className='col-xl-3'  style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                <img className='logo' src={ibm} />
                </div>
                <div className='col-xl-3'  style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                  <img className='logo' src={cognizant} />
                </div>
                <div className='col-xl-3'  style={{display:'flex',justifyContent:'center'}} data-aos="flip-right"  data-aos-duration='1200'>
                <img className='logo' src={sap} />
                </div>
              </div>
            </div>     
          </div>
          <div style={{height:'auto',backgroundImage:`url(${keyboard2})`,backgroundSize:'cover',paddingBottom:'5rem'}} data-aos="fade-up"  data-aos-duration='1200'>
            <div className='row statisticalInfo'>
              <p className='statisticHeading' style={{color:'white'}}>O u r<strong style={{letterSpacing:'2px',fontWeight:'600'}}>&nbsp;Statistical Growth</strong></p>
              <div className='col-md-4 row data'>
                  <div className='col-6 w-50' data-aos="slide-up"  data-aos-duration='1200' style={{color:'white'}}>
                      <SiSlideshare className='logo2'/>
                      <h3 className='logo2Desc'>1568+</h3>
                      <p style={{fontFamily:'monospace'}}>Partners</p>
                  </div>
                  <div className='col-6 w-50' data-aos="slide-up"  data-aos-duration='1200' style={{color:'white'}}>
                      <IoIosPeople className='logo2' />
                      <h3 className='logo2Desc'>1900+</h3>
                      <p style={{fontFamily:'monospace'}}>Customers</p>
                  </div>
              </div>
              <div className='col-md-4 row data'  style={{color:'white'}}>
                <div className='col-6 w-50' data-aos="slide-up"  data-aos-duration='1200' style={{color:'white'}}>
                    <HiDocumentDuplicate className='logo2'/>
                    <h3 className='logo2Desc'>1422+</h3>
                    <p style={{fontFamily:'monospace'}}>Projects</p>
                </div>
                <div className='col-6 w-50' data-aos="slide-up"  data-aos-duration='1200' style={{color:'white'}}>
                    <RiUserSettingsFill className='logo2' style={{padding:'2px'}}/>
                    <h3 className='logo2Desc'>400+</h3>
                    <p style={{fontFamily:'monospace'}}>Employees</p>
                </div>
              
              </div>
              <div className='col-md-4 statisticalgrowth'>
              <p style={{fontSize:'16px',color:'white',fontFamily:'Righteous'}}>A growth curve is a graphical representation that shows the course of a phenomenon over time. An example of a growth curve might be a chart showing a country's population increase over time.</p>
              </div>
            </div>
          </div>
          <div style={{height:'auto',paddingBottom:'5rem'}} data-aos="fade-up"  data-aos-duration='1200'>
            <div className='row statisticalInfo' >
              <p className='statisticHeading' style={{color:'black'}}>O u r  M a r k e t i n g<strong style={{letterSpacing:'2px',fontWeight:'600'}}>&nbsp;Products</strong></p>
                {/* row1 */}
                <div className='col-md-6 row data2'>
                  <div className='col-6 w-50 pt-2 marketProductLogo' data-aos="fade-right"  data-aos-duration='1200'>
                    <div className='colorsetup'>
                    <MdHelp className='logo2' style={{color:'#29a1b8'}}/>
                    <p style={{fontSize:'19px'}} className='marketProduct'>Consulting</p>
                    </div>
                  </div>
                  <div className='col-6 w-50 pt-2 marketProductLogo' data-aos="fade-right"  data-aos-duration='1200'>
                    <div className='colorsetup'>
                    <SiMarketo className='logo2' style={{color:'rgb(255 138 0)'}}/>
                    <p style={{fontSize:'19px'}} className='marketProduct'>Marketing</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 row data2'>
                  <div className='col-6 w-50 pt-2 marketProductLogo' data-aos="fade-right"  data-aos-duration='1200'>
                      <div className='colorsetup'>
                      <MdMarkunreadMailbox className='logo2' style={{color:'rgb(242 183 25)'}}/>
                      <p style={{fontSize:'19px'}} className='marketProduct'>IT Software</p>
                      </div>
                  </div>
                  <div className='col-6 w-50 pt-2 marketProductLogo' data-aos="fade-right"  data-aos-duration='1200'>
                      <div className='colorsetup'>
                      <MdCloudUpload className='logo2' style={{color:'rgb(255 0 120)'}}/>
                      <p style={{fontSize:'19px'}} className='marketProduct'>Cloud Technology</p>
                      </div>
                  </div>
                </div>

                {/* row2 */}
                <div className='col-md-6 row data2'>
                  <div className='col-6 w-50 pt-2 marketProductLogo' data-aos="fade-right"  data-aos-duration='1200'>
                    <div className='colorsetup'>
                    <ImEarth className='logo2' style={{color:'#527b52'}}/>
                    <p style={{fontSize:'19px'}} className='marketProduct'>Web Developing</p>
                    </div>
                  </div>
                  <div className='col-6 w-50 pt-2 marketProductLogo' data-aos="fade-right"  data-aos-duration='1200'>
                    <div className='colorsetup'>
                    <GiRapidshareArrow className='logo2' style={{color:'#ad00ff'}}/>
                    <p style={{fontSize:'19px'}} className='marketProduct'>Hosting</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 row data2'>
                  <div className='col-6 w-50 pt-2 marketProductLogo' data-aos="fade-right"  data-aos-duration='1200'>
                      <div className='colorsetup'>
                      <GiRobotGrab className='logo2' style={{color:'grey'}}/>
                      <p style={{fontSize:'19px'}} className='marketProduct'>AI</p>
                      </div>
                  </div>
                  <div className='col-6 w-50 pt-2 marketProductLogo' data-aos="fade-right"  data-aos-duration='1200'>
                      <div className='colorsetup'>
                      <SiTrainerroad className='logo2' style={{color:'red'}}/>
                      <p style={{fontSize:'19px'}} className='marketProduct'>Trading</p>
                      </div>
                  </div>
                </div>

                {/* row3 */}
                <hr className='hr'/>
                <div className='col-md-6 row data2'>
                  <div className='col-6 w-50 pt-2 marketProductLogo' >
                    <div className='colorsetup2'>
                    
                    <p className='marketProduct2'><GoDeviceMobile className='logo3' style={{color:'rgb(255 115 9)'}}/>&nbsp;Mobile Apps</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
                    </div>
                  </div>
                  <div className='col-6 w-50 pt-2 marketProductLogo' >
                    <div className='colorsetup2'>
                    
                    <p  className='marketProduct2'><AiFillLock className='logo3' style={{color:'rgb(255 115 9)'}}/>&nbsp;Security Tips</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 row data2'>
                  <div className='col-6 w-50 pt-2 marketProductLogo' >
                      <div className='colorsetup2'>
                      
                      <p  className='marketProduct2'><MdPlace className='logo3' style={{color:'rgb(255 115 9)'}}/>&nbsp;Various Branches</p>
                      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
                      </div>
                  </div>
                  <div className='col-6 w-50 pt-2 marketProductLogo' >
                      <div className='colorsetup2'>
                      
                      <p  className='marketProduct2'><FaPhoneAlt className='logo3' style={{color:'rgb(255 115 9)'}}/>&nbsp;24/7 Support</p>
                      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
                      </div>
                  </div>
                </div>
            </div>
          </div>

          <div style={{backgroundColor:'black',paddingTop:'5rem'}} data-aos="fade-up"  data-aos-duration='1200'>
            <div style={{height:'auto',paddingBottom:'40px'}} className='row statisticalInfo2'>
                    <div className='col-md-6 row' style={{paddingLeft:'5%'}} >
                      <div className='col-sm-6 pt-2 col-12'>
                        <div className=''>
                        
                        <p className='marketProduct2'>Contact Info</p>
                        <p className='otherDetails'>2130 Fulton Street, San Diego, LA 94117-1080 USA<br/>
                            1-600-1234-567<br/>
                            1-600-1234-567<br/>
                            emp@company.com</p>
                        </div>
                      </div>
                      <div className='col-sm-6  pt-2 col-12' >
                        <div className=''>
                        
                        <p  className='marketProduct2'>Our Platforms</p>
                        <p className='otherDetails'>Digital Trade Marketing<br/>
                            Software Development<br/>
                            Cloud Marketing<br/>
                            Business Intelligence<br/>
                            Modern Technology</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6 row ' style={{paddingLeft:'5%'}}>
                      <div className='col-sm-4 w-33 pt-2 col-12' >
                          <div className=''>
                          
                          <p  className='marketProduct2'>Media Center</p>
                          <p className='otherDetails'>Press Release<br/>
                            Vision & Values<br/>
                            Winning Awards<br/>
                            Networking</p>
                          </div>
                      </div>
                      <div className='col-sm-4 w-33 pt-2 col-12' >
                          <div className=''>
                          
                          <p  className='marketProduct2'>Resources</p>
                          <p className='otherDetails'>24/7 Help Line<br/>
                            Nearest Branch<br/>
                            Guidance<br/>
                            Download<br/>
                            Mobile App</p>
                          </div>
                      </div>
                      <div className='col-sm-4 w-33 pt-2 col-12' >
                          <div className=''>
                          
                          <p  className='marketProduct2'>Other Links</p>
                          <p className='otherDetails'>Our Services<br/>
                            About Us<br/>
                            Company Blog<br/>
                            Contact Us</p>
                          </div>
                      </div>
                    </div>
            </div>
            
            <div style={{height:'auto'}} className='lastdiv'>
                <div style={{marginLeft:'6%',width:'90%',textAlign:'center',color:'white'}} className='row'>
                    <div className='col-md-6 col-12'>
                      <p className='otherDetails'>© 2022 Demand. All rights reserved | Design by Empsystems.</p>
                    </div>
                    <div className='col-md-6 col-12'>
                      <p className='otherDetails'>Privicy    PolicyTerms & Conditions   Disclaimer.</p>
                    </div>
                </div>
            </div>
          </div>
          

     
        </div>

          <div id="videoMessage">
          <Navbar expand="lg"  >
              <Container>
                <Navbar.Brand href="#home" style={{color:'white'}}><img className='webLogo' src={emp1}/><p className='employee'>Employee Managemet System</p></Navbar.Brand>
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
          </div>


      </div>

    </div>
    {/* <div style={{height:'300px'}}>
          helloggg
    </div> */}
    </div>
   
 

 
  );


  
}

export default HomeScreen
