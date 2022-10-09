import React,{useEffect,useState} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {getAdminDetails,getUpdateAdminDetails} from '../../actions/adminActions'
import  Header  from '../../components/Header/Header'
import './AdminScreen.css'
import { HiUserCircle } from 'react-icons/hi'
import user1 from '../../images/user1.jpg'
function AdminScreen() {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin

  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [position,setPosition]=useState('')
  const [address,setAddress]=useState('')
  const [postalcode,setPostalcode]=useState('')
  const [salary,setSalary]=useState('')
  const [id,setId]=useState('')
  const [checkmark,setCheckmark]=useState(false)
  const [edit,setEdit]=useState(true)
  
  const [attend,setAttend]=useState('')
  const [leav,setLeav]=useState('')
  const [personalData,setpersonalData]=useState('')

  const adminUsers=useSelector(state=>state.adminUsers)
  const {alldetails}=adminUsers

  const adminUserdetail=useSelector(state=>state.adminUserdetail)
  const {allDescdetails}=adminUserdetail

  const adminUsersAttendance=useSelector(state=>state.adminUsersAttendance)
  const {usersAttendance}=adminUsersAttendance

  const adminUsersLeave=useSelector(state=>state.adminUsersLeave)
  const {usersLeave}=adminUsersLeave

  const [detail,setDetail]=useState([])

  const [allpersonaldata,setAllpersonaldata]=useState('')
  const [allpersonaldetail,setAllpersonaldetail]=useState('')

  useEffect(()=>{

      if(!userInfo){
          navigate('/login')
      }
      if(!alldetails){
          dispatch(getAdminDetails('users'))
      }
      else{
          setDetail(alldetails)
      }

      if(usersAttendance){
        usersAttendance.data.map((obj,i)=>{
        if(allpersonaldetail===usersAttendance.data[i].user){
          setAttend('yes')
        }})
      }

      if(usersLeave){
        usersLeave.data.map((obj,i)=>{
          if(allpersonaldata===usersLeave.data[i].user){
          setLeav('yes')
        }})
      }

      if(allDescdetails){
        allDescdetails.data.map((obj,i)=>{
          if(allpersonaldata===allDescdetails.data[i].user){
            setpersonalData('yes')
          }})
      }


      
        
      
  },[alldetails,dispatch,navigate,userInfo,allpersonaldata,allpersonaldetail,allDescdetails,checkmark])


const submit=(e)=>{
  e.preventDefault()
  setCheckmark(true)
  dispatch(getUpdateAdminDetails(id,username,email,address,position,postalcode,phonenumber,salary))
}
 


return (
  <div>
    <Header/>
    <div className='row' >
      <div className='col-md-2 col-12 divsetUp1' style={{backgroundColor:' #d7d7d7',paddingLeft:'24px'}}>
        <div style={{display:'flex'}} className='userHead'>
        <HiUserCircle style={{fontSize:'26px'}}/>
        <h5 >Users</h5>
        </div>
          {detail?detail.map((obj,j)=>{
          return (<div key={j} onClick={()=>{
            setAttend('')
            setLeav('')
            setCheckmark(false)
            setEdit(true)
            setpersonalData('')
            setAllpersonaldata(detail[j].id)
            setAllpersonaldetail(detail[j].email)
            setUsername(detail[j].username)
            setEmail(detail[j].email)
            setId(detail[j].id)
     
            allDescdetails.data.map((obj,i)=>{
              if(detail[j].id===allDescdetails.data[i].user){
        
              setPhonenumber(allDescdetails.data[i].phonenumber)
              setAddress(allDescdetails.data[i].address)
              setPosition(allDescdetails.data[i].position)
              setSalary(allDescdetails.data[i].salary)
              setPostalcode(allDescdetails.data[i].postalcode)
              }
            })

          }}>
            
            <p >{detail[j].username.substring(0, 10)}</p>
            <p className='userEmail'>{detail[j].email.substring(0, 10)}...</p>
            
          </div>)
          }):''}
        
      </div>
      <div className='col-md-10 col-12 row'>
          <div className='col-md-8 row divsetUp2' >
            <div className='personal d-flex'>
            PERSONAL <p style={{paddingTop:'2px'}}>&nbsp;<b>DATA</b></p>
            </div>
            <form onSubmit={submit}>
            {allDescdetails?allDescdetails.data.map((obj,i)=>{
                  if(allpersonaldata===allDescdetails.data[i].user){
                    return <div className='row' key={i}>
                                
                                <div className='col-md-6' style={{paddingLeft:'24px'}}>

                                <img style={{width:'100%',borderRadius: '109px'}} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
                                <div className='personalDiv'>
                                  <p className='personalDetailP'>USERNAME</p>
                                  <input className='personalDetailInput' value={username} readOnly type='text'/>
                                </div>
                                <div className='personalDiv'>
                                  <p className='personalDetailP'>EMAIL</p>
                                  <input  className='personalDetailInput'  value={email}  readOnly type='email'/>
                                </div>
                                <div className='personalDiv'>
                                  <p className='personalDetailP'>PHONE NUMBER</p>
                                  <input  className='personalDetailInput' value={phonenumber} readOnly={edit} onChange={(e)=>
                                    { setCheckmark(false)
                                      setPhonenumber(e.target.value)}} type='text'/>
                                </div>
                                <div className='personalDiv'>
                                  <p className='personalDetailP'>POSITION</p>
                                  <input  className='personalDetailInput' value={position} readOnly={edit} onChange={(e)=>
                                    { setCheckmark(false)
                                      setPosition(e.target.value)}}  type='text'/>
                                </div>


                                </div>
                                <div className='col-md-6' style={{paddingLeft:'24px'}}>
                                <div className='personalDiv'>
                                  <p className='personalDetailP'>ADDRESS</p>
                                  <input className='personalDetailInput' value={address} readOnly={edit} onChange={(e)=>
                                    { setCheckmark(false)
                                      setAddress(e.target.value)}} type='text'/>
                                </div>
                                <div className='personalDiv'>
                                  <p className='personalDetailP'>POSTAL CODE</p>
                                  <input  className='personalDetailInput' value={postalcode} readOnly={edit} onChange={(e)=>
                                    {setCheckmark(false)
                                      setPostalcode(e.target.value)}} type='number'   />
                                </div>
                                <div className='personalDiv'>
                                  <p className='personalDetailP'>SALARY</p>
                                  <input  className='personalDetailInput' value={salary} readOnly={edit} onChange={(e)=>
                                    {setCheckmark(false)
                                      setSalary(e.target.value)}} type='text'  />
                                </div>
                                <button className='update' type='submit'>Update</button>
                                <button className='update' onClick={(e)=>{
                                    e.preventDefault()
                                    setEdit(false)
                                }
                                 } >Edit</button>

                                {checkmark &&
                                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                                }
                                


                                </div>
                                
                                
                            </div>
                    }
                  }):''}
                  </form>


                  {personalData !== 'yes' && 
                  <div className='row'>
                      <div className='col-md-6' style={{paddingLeft:'24px'}}>

                      <img style={{width:'100%',borderRadius: '109px'}} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
                      <div className='personalDiv'>
                        <p className='personalDetailP'>USERNAME</p>
                        <input className='personalDetailInput' value=''  type='text'/>
                      </div>
                      <div className='personalDiv'>
                        <p className='personalDetailP'>EMAIL</p>
                        <input  className='personalDetailInput' value=''  type='email'/>
                      </div>
                      <div className='personalDiv'>
                        <p className='personalDetailP'>PHONE NUMBER</p>
                        <input  className='personalDetailInput' value=''  type='text'/>
                      </div>
                      <div className='personalDiv'>
                        <p className='personalDetailP'>POSITION</p>
                        <input  className='personalDetailInput' value=''    type='text'/>
                      </div>


                      </div>
                      <div className='col-md-6' style={{paddingLeft:'24px'}}>
                      <div className='personalDiv'>
                        <p className='personalDetailP'>ADDRESS</p>
                        <input className='personalDetailInput' value=''   type='text'/>
                      </div>
                      <div className='personalDiv'>
                        <p className='personalDetailP'>POSTAL CODE</p>
                        <input  className='personalDetailInput' value=''   type='number'   />
                      </div>
                      <div className='personalDiv'>
                        <p className='personalDetailP'>SALARY</p>
                        <input  className='personalDetailInput' value=''  type='text'  />
                      </div>

                      </div>
                  </div>}



              
          </div>
          <div className='col-md-4' style={{paddingLeft:'24px'}}>
            <h3 className='attendanceDetails'>Attendance Details</h3>
              <div>
                <h4 className='attendInnerHead'>Attendance</h4>
                
                <div className='attendanceDiv' style={{marginTop:'15px'}}>




                {usersAttendance?usersAttendance.data.map((obj,i)=>{
                  if(allpersonaldetail===usersAttendance.data[i].user){
                    return <p key={i} className='pdata'>{usersAttendance.data[i].date},{usersAttendance.data[i].submitteddate}</p>
                  }
                }):''}


                { attend !== 'yes' && <p  className='pdata'>No Attendance marked</p>}


                </div>
              </div>
              <div>
                <h4 style={{marginTop:'15px'}} className='leaveInnerDiv'>Leave</h4>
                <div className='leaveDiv' style={{marginTop:'15px'}}>
                {usersLeave?usersLeave.data.map((obj,i)=>{
                  if(allpersonaldata===usersLeave.data[i].user){
                    return <p key={i} className='pdata2'>{usersLeave.data[i].date},{usersLeave.data[i].submitteddate}</p>}
                  }):''}

                { leav !== 'yes' && <p  className='pdata2'>No leave marked</p>}
                </div>
              </div>
          </div>
      </div>
    </div>



  </div>
)
}


export default AdminScreen
