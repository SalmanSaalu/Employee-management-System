import React from 'react'
import { Container } from 'react-bootstrap'
import {BsInstagram,BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

function Footer() {
  return (
    <footer style={{position:'absolute',bottom:'0',width:'100%'}}>
      <div style={{textAlign:'center'}}>
        <p  style={{fontFamily:'monospace',color:'grey',height:'4px'}}>&copy; copyright owned by Emp systems</p>
        <p style={{fontSize:'14px'}}>connect us : &nbsp; &nbsp; <BsInstagram/> &nbsp; &nbsp;<BsWhatsapp/> &nbsp; &nbsp;<AiOutlineMail/></p>
      </div>
    </footer>
  )
}

export default Footer
