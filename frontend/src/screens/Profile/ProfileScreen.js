import React,{useEffect,useState} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getUserDetail } from '../../actions/userActions'
import Header from '../../components/Header/Header'
import {updateUserDetail,updateUserPerosnalDetail } from '../../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import axios from 'axios'
import computerwhite from '../../images/computerwhite.jpg'
 import './profile.css'

function ProfileScreen() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [confirmpassword,setConfirmpassword]=useState('')
    const [message,setMessage]=useState('')

    const [address,setAddress]=useState('')
    const [phonenumber,setPhonenumber]=useState('')
    const [position,setPosition]=useState('')
    const [salary,setSalary]=useState('')
    const [postalcode,setPostalcode]=useState('')
    const [personaluser,setUser]=useState('')
    const [checkmark,setCheckmark]=useState(false)
  
    const dispatch=useDispatch()
    const navigate=useNavigate()
  
    const location=useLocation()
  
    const userDetail=useSelector(state=>state.userDetail)
    const {error,user,loading}=userDetail

    const userPersonalDetail=useSelector(state=>state.userPersonalDetail)
    const {personal}=userPersonalDetail

    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin

    const userUpdateProfile=useSelector(state=>state.userUpdateProfile)
    const {success}=userUpdateProfile

    useEffect(()=>{

        if(!userInfo){
            navigate('/login')
        }else{
            if(!user || !user.name || success ){
                dispatch({type:USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetail('profile'))

            }else{

              if(personal && personal.data){
                setName(user.name)
                setEmail(user.email)
                setAddress(personal.data.address)
                setPhonenumber(personal.data.phonenumber)
                setPosition(personal.data.position)
                setSalary(personal.data.salary)
                setPostalcode(personal.data.postalcode)
                setUser(personal.data.user)
              }

                // console.log(personal.data.address)

            }

        }

    },[navigate,userInfo,dispatch,user,success,personal])
  
    const submit=(e)=>{
        e.preventDefault()
        if(password !==confirmpassword){
          setMessage('password do not match')
        }else{
          dispatch(updateUserDetail({
                'id':user._id,
                'name':name,
                'email':email,
                'password':password}))
          dispatch(updateUserPerosnalDetail({
            'user':personaluser,
            'address':address,
            'postalcode':postalcode,
            'position':position,
            'phonenumber':phonenumber,
            'salary':salary
          }))
                setMessage('')
                setCheckmark(true)
  
        }
    }
  return (
    <div>
      <Header/>
      <div style={{backgroundImage:`url(${computerwhite})`,height:'auto',backgroundSize:'cover'}}>
          <div className='row rowdiv' >
            
              <div className='col-md-6 col-12 card' style={{paddingBottom:'50px'}}>
                <div className='innerdiv' style={{paddingBottom:'5rem'}}>
                  <img className='img' style={{borderRadius: '109px'}} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'/>
                  <form onClick={submit}>
                  <div>
                    <div className='smallhead'>
                      <p>date</p>
                      <p>day</p>
                    </div>

                  <h4 style={{fontSize:'41px'}}>profile</h4>
                  <p className='data'>username</p>
                  <input value={name} onChange={(e)=>{
                    setCheckmark(false)
                    setName(e.target.value)}}  className='inp' type='text'/>
                  <p className='data'>email</p>
                  <input value={email} onChange={(e)=>{
                    setCheckmark(false)
                    setEmail(e.target.value)}} className='inp' type='email'/>
                  <p  className='data'>position</p>
                <input value={position} onChange={(e)=>{
                  setCheckmark(false)
                  setPosition(e.target.value)}} className='inp' type='text'/>
                </div>
                </form>
                
                </div>
                

              
              </div>
              
              <div className='col-md-6 col-12 card2' >
                <form onClick={submit}>
                <div className='col-12 innerdiv'>
                    <p className='data'>password</p>
                  <input value={password} onChange={(e)=>{
                    setCheckmark(false)
                    setPassword(e.target.value)}}t className='inp' type='password'/>
                  <p className='data'>confirm password</p>
                  <input value={confirmpassword} onChange={(e)=>
                    {setCheckmark(false)
                      setConfirmpassword(e.target.value)}} className='inp' type='password'/>
                </div>
                
                <div className='col-12 innerdiv' style={{marginTop:'20px'}}>
                <p  className='data'>address</p>
                <input value={address} onChange={(e)=>
                  {setCheckmark(false)
                    setAddress(e.target.value)}} className='inp' type='text'/>
                <p className='data'>postalcode</p>
                <input value={postalcode} onChange={(e)=>
                  {setCheckmark(false)
                    setPostalcode(e.target.value)}} className='inp' type='text'/>
                <p  className='data'>phonenumber</p>
                <input value={phonenumber} onChange={(e)=>{
                  setCheckmark(false)
                  setPhonenumber(e.target.value)}} className='inp' type='text'/>
                
                <button type='submit' className='btn'>Update</button>
                {checkmark &&
                        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                }
        
 
                
               {message && <p>{message}</p>}
                </div>
                </form>
              </div>
              
              
          </div>
      </div>
    </div>
  )
}

export default ProfileScreen
