import React,{useState,useEffect} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {login } from '../../actions/userActions'
import './Login.css'
import '../Register/Register.css'
import back from '../../images/back.jpg'
import registerInner from '../../images/registerInner.jpg'
import loginInner from '../../images/loginInner.jpg'

function LoginScreen() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const location=useLocation()
    
    const redirect= '/'
    console.log(redirect)

    const userLogin=useSelector(state=>state.userLogin)
    const {error,userInfo,loading}=userLogin

    useEffect(()=>{
      // console.log(location)
        if(userInfo){
            navigate(redirect)
        }
    },[navigate,userInfo,redirect])

    const submit=(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
    }
  return (
<div className='all'  style={{height:'auto',backgroundImage:`url(${back})`,backgroundSize:'cover',width:'100%'}}>
      <div className='row registerRow divs' >
        <div className='col-md-6 col-12 ' style={{height:'auto',backgroundImage:`url(${loginInner})`,backgroundSize:'cover'}} >
            
            <h3 className='head' style={{color:'black'}}>It's good <br/>to <b style={{color:'#f70846'}}>have you</b> <br/> back.</h3>
        </div>
        
        <div className='col-md-6 col-12' style={{padding:'35px',backgroundColor:'white'}}>
          <form onSubmit={submit}>
          <div style={{overflowX:'hidden',overflowY:'auto',height:'23rem'}}>
            <h3 style={{paddingBottom:'30px',color:'#ff5722',fontFamily:'fantasy'}}>Sign In</h3>
            <hr/>
            <p className='DetailHead'>email</p>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' className='inputs' required/>
            <p className='DetailHead'>password</p>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' className='inputs' required/>
          </div>
          <div style={{paddingTop:'30px'}}><button  className='register' type='submit'>Login</button>
          {error && <p className='message'>{error}</p>}
          <p style={{fontSize:'13px',paddingTop:'18px'}}>if you don't have an account, please register <Link to= '/register'><i>here</i></Link></p>
          </div>
          </form>
        </div>
        


      </div>
      
  </div>
  )
}

export default LoginScreen
// {error && <p>{error}</p>}
// <form onSubmit={submit}>
//   email address:
//   <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='example@gmail.com'/><br/>
//   password:
//   <input value={password} onChange={(e)=>{
//     setPassword(e.target.value)
//   }} type='password' /><br/>
//   <button type='submit'>SIGN IN </button><br/><br/>
// </form>
//   if u are new customer please register
//   <Link to= '/register'>register</Link>