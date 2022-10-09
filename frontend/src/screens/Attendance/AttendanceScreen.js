import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate  } from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from '../../components/Header/Header'
import './Attendance.css'
import {getUserAttendance,markTodayattendance,getUserLeave } from '../../actions/attendanceAction'

function AttendanceScreen() {
    var date = new Date().toDateString();
    const [attendshow,setAttendshow]=useState(date)
    const [checkattendance,setCheckattendance]=useState(date)

    const [value, setValue] = useState(new Date());
    const navigate=useNavigate()

    const userAttendance=useSelector(state=>state.userAttendance)
    const {error,attendance,loading}=userAttendance

    const userLeave=useSelector(state=>state.userLeave)
    const {leaveerror,leave,leaveloading}=userLeave

    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin

    const dispatch=useDispatch()
    const [attendbutton,setAttendbutton]=useState('')
    

    useEffect(()=>{
        // console.log(value)
        if(!userInfo){
          navigate('/login')
        }
        var k=value.toDateString()
        setAttendbutton(k)


        if(!attendance){
        dispatch(getUserAttendance('attendance'))
        setAttendshow(date)
        dispatch(getUserLeave('leave'))}
        // console.log(leave)
      console.log(attendbutton)

    },[userInfo,value,attendbutton,attendance])

    const submitAttendance=(e)=>{
      e.preventDefault()
      dispatch(markTodayattendance(checkattendance))

      // console.log('working')
    }

    

  return (
    
  <div>
    <Header/>
    <div style={{paddingTop:'6rem'}}>
      <div className='row' style={{marginBottom:'12px'}}>
          <div className='col-md-5 col-12 boxshadowouter' style={{marginBottom:'40px'}}>
          <div className='boxshadow'>

          
          <Calendar className='calender' onChange={(d) => {setValue(d)}}value={value}/>
          <p className='Date'>{attendbutton}</p>
          {attendance ? attendance.map((obj,i)=>
        <div style={{paddingLeft:'15%'}} key={i}>
          {attendbutton===obj.date ?
          <div>
          
          <p className='attendanceMarked'>Attendance marked  <svg  class="checkmark2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg></p>
          </div>:""}
        </div>
         ):""}


         <br/>

        {leave && leave.map((obj,i)=>{
        if (leave[i].date===attendbutton){
          return <p className='leave' key={i}>{leave[i].id}----{leave[i].date}---{leave[i].submitteddate}</p>
        }
        else{
          return <p></p>
        }
        }
          )}
        <br/>
      

        {attendshow && <button className='attendBtn' onClick={submitAttendance}>mark my today's attendance</button>}
        </div>
        </div>
        
          <div className='col-md-7 col-12 row'>
            <div className='col-md-6 col-12' style={{}}>
            <p style={{color:'green',fontWeight:'600'}}>Attendance:</p>
      
            <div className='leaveHeight'>
            {attendance  && attendance.map((obj,i)=>
              <div key={i} style={{display:'flex'}} >
                <p className='attendDetail'>{obj.date} , {obj.submitteddate}</p>
                
              </div>
              )}

            {attendance  && attendance.map((obj,i)=>
            <div key={i} >
            {attendshow===obj.date? setAttendshow(false):""}  
              </div>
              )}
            {error && <p style={{fontFamily:'auto'}}>{error}</p>}
            </div>
            </div>
            



            <div className='col-md-6 col-12'  style={{}}>
            <p style={{color:'red',fontWeight:'600'}}>Leave</p>
            <div className='leaveHeight'>
                      {/* {leave && <p>{leave[0].id}</p>} */}
            {leave && leave.map((obj,i)=>{
            return (<p key={i} className='leaveDetail'>{leave[i].date} , {leave[i].submitteddate}</p>)}
            )}
            {leaveerror && <p style={{fontFamily:'auto'}}>{leaveerror}</p>}
            </div>


            
            </div>
           


            

          </div>
      </div>
   

    </div>

  </div>
  )
}

export default AttendanceScreen
