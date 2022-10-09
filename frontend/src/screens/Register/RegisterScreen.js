import React,{useEffect,useState} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {register, verify,logout } from '../../actions/userActions'
import './Register.css'
import registerInner from '../../images/registerInner.jpg'
import back from '../../images/back.jpg'

function RegisterScreen() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const [confirmpassword,setConfirmpassword]=useState('')
  const [tokenverify,setTokenverify]=useState('')
  const [message,setMessage]=useState('')
  const [error2,setError2]=useState(' ')
  const [userRegistercomplete,setUserregistercomplete]=useState('')


  const [position,setPosition]=useState('')
  const [salary,setsalary]=useState('')
  const [address,setAddress]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [image,setImage]=useState('')
  const [postalcode,setPostalcode]=useState('')


  const dispatch=useDispatch()
  const navigate=useNavigate()

  const location=useLocation()
  const redirect=location.search? location.search.split('=')[1] : '/'

  const userRegistering=useSelector(state=>state.userRegistering)
  const {userRegister,loading,errorOTP}=userRegistering

  const userVerify=useSelector(state=>state.userVerify)
  const {userVerifyData,error}=userVerify

  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
      if(userRegister){
        setMessage('')
        setError2('')
        setUserregistercomplete(userRegister)
        setIsOpen(true)
        console.log(userRegister)
        console.log(isOpen)
             // navigate(redirect)
      }
      else if(userVerifyData){
        setMessage(userVerifyData)
      }
      else if(error){
        setError2(error[0])
      }
  },[navigate,userRegister,redirect,userVerifyData,error,isOpen])


  



  const submit=(e)=>{
      e.preventDefault()
      // setError2(' ')
      if(password !==confirmpassword && message!=='an email is sent' ){
        setMessage('password do not match')
        setError2('')
      }else{
        if(message!=='an email is sent')
        {dispatch(verify(name,email,password))
          setMessage('')
          setError2('')
        }
        else{
          dispatch(register(name,email,password,tokenverify,address,position,postalcode,phonenumber))
          setError2('')
        }
   
        // setError2(error)

      
        
      }
  }


  const home=()=>{
    setIsOpen(false)
    dispatch(logout())
    navigate(redirect)
  }
  // const verify=(e)=>{
  //   // e.preventDefault()
  //   console.log('verify')
  //   // dispatch(register(name,email,password,tokenverify))
  // }
return (
  <div className='all'  style={{height:'auto',backgroundImage:`url(${back})`,backgroundSize:'cover',width:'100%'}}>
      <div className='row registerRow divs' >
        <div className='col-md-6 col-12 ' style={{height:'auto',backgroundImage:`url(${registerInner})`,backgroundSize:'cover'}} >
            {/* <img src={registerInner} style={{height:'auto',backgroundSize:'cover',width:'100%'}}/> */}
            <h3 className='head'>It's good <br/>to <b style={{color:'yellow'}}>have you</b> on<br/> board.</h3>
        </div>
        {message!=='an email is sent'?
        (<div className='col-md-6 col-12' style={{padding:'35px',backgroundColor:'white'}}>
          <form onSubmit={submit}>
          <div style={{overflowX:'hidden',overflowY:'auto',height:'23rem'}}>
            <h3 style={{paddingBottom:'30px',color:'#ff5722',fontFamily:'fantasy'}}>Sign Up</h3>
            <hr/>
            <p className='DetailHead'>username</p>
            <input  value={name} onChange={(e)=>setName(e.target.value)} type='text' className='inputs' required/>
            <p className='DetailHead'>email</p>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' className='inputs' required/>
            <p className='DetailHead'>phonenumber</p>
            <input value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}} type='number' className='inputs' required/>
            <p className='DetailHead'>password</p>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' className='inputs' required/>
            <p className='DetailHead'>confirm password</p>
            <input value={confirmpassword} onChange={(e)=>{setConfirmpassword(e.target.value)}} type='password' className='inputs' required/>
            <p className='DetailHead'>address</p>
            <input value={address} onChange={(e)=>{setAddress(e.target.value)}} type='text' className='inputs' required/>
            <p className='DetailHead'>postalcode</p>
            <input value={postalcode} onChange={(e)=>{setPostalcode(e.target.value)}} type='number' className='inputs' required/>
            <p className='DetailHead' >position</p>
            <input value={position} onChange={(e)=>{setPosition(e.target.value)}} type='text' className='inputs' required/>
          </div>
          <div style={{paddingTop:'30px'}}><button  className='register' type='submit'>Register</button>
          {error2 && <p className='message'>{error2}</p>}
          {message && <p className='message'>{message}</p>}
          <p style={{fontSize:'13px',paddingTop:'18px'}}>if you already have an account, please login <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}><i>here</i></Link></p>
          </div>
          </form>
        </div>):
        (<div className='col-md-6 col-12' style={{padding:'35px',backgroundColor:'white'}}>
          <p className='message2'>An OTP is send to yor Mail</p>
        {errorOTP && <p className='message'>{errorOTP}</p>}
          <h2>OTP</h2>
          <form onSubmit={submit}>
          <input className='inputs' type='number' onChange={(e)=>setTokenverify(e.target.value)}/><br/>
          <button className='verify' type='submit' >verify</button>
          </form>

        </div>)
        }


      </div>
       {isOpen  ? 
      <div className='popup-box' >
      <div className="box" >
      <p className='userReg'>{userRegistercomplete}</p>
      {/* <Link to='/'><button onClick={home}>ok</button></Link> */}
      <svg style={{marginLeft:'47%'}} class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>

      </div>
      </div>:""}
  </div>
)
}

export default RegisterScreen
// {error2 && <p>{error2}</p>}
// {message && <p>{message}</p>}

// {message!=='an email is sent'?
//   (<div>
//      <form onSubmit={submit}>
//  username :
//  <input value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='username'/><br/>
//  email address:
//  <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='example@gmail.com'/><br/>
//  password:
//  <input value={password} onChange={(e)=>{
//    setPassword(e.target.value)
//  }} type='password' /><br/>
//  confirm   password:
//  <input value={confirmpassword} onChange={(e)=>{
//    setConfirmpassword(e.target.value)
//  }} type='password' /><br/>

//  postalcode:
//  <input value={postalcode} onChange={(e)=>{
//    setPostalcode(e.target.value)
//  }} type='number' /><br/>

//  address:
//  <input value={address} onChange={(e)=>{
//    setAddress(e.target.value)
//  }} type='text' /><br/>
//  position:
//  <input value={position} onChange={(e)=>{
//    setPosition(e.target.value)
//  }} type='text' /><br/>
//  phonenumber:
//  <input value={phonenumber} onChange={(e)=>{
//    setPhonenumber(e.target.value)
//  }} type='number' /><br/>
//  image:




//  <button type='submit'>register </button><br/><br/>
// </form>

//  if u already have an account please login
//  <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>login</Link>
//    </div>):
//    (<div>
//      {errorOTP && <p>{errorOTP}</p>}
//       <h2>OTP</h2>
//       <form onSubmit={submit}>
//       <input type='number' onChange={(e)=>setTokenverify(e.target.value)}/><br/>
//        <button type='submit' >verify</button>
//       </form>

//      </div>)
//   }

// {isOpen  ? 
// <div className='popup-box' >
// <div className="box" >
// <p>{userRegistercomplete}</p>
// <Link to='/'><button onClick={home}>ok</button></Link>
// </div>
// </div>:""}
