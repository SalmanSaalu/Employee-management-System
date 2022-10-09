import {
    ADMIN_ATTENDANCE_FAIL,
    ADMIN_ATTENDANCE_REQUEST,
    ADMIN_ATTENDANCE_SUCCESS,

    ADMIN_USERS_FAIL,
    ADMIN_USERS_REQUEST,
    ADMIN_USERS_SUCCESS,

    ADMIN_USERS_DETAIL_FAIL,
    ADMIN_USERS_DETAIL_REQUEST,
    ADMIN_USERS_DETAIL_SUCCESS,
} from '../constants/adminConstants'
import axios from 'axios'


export const getUpdateAdminDetails =(id,username,email,address,position,postalcode,phonenumber,salary)=> async (dispatch,getState)=>{
    try{
        dispatch({
            type:'ADMIN_DETAIL_UPDATE'
        })

        const {userLogin:{userInfo},}=getState()

       
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const newdata=await axios.put('/api/admin/updateAdmin/',
        {'id':id,'username':username,'email':email,'position':position,'postalcode':postalcode,'salary':salary,'address':address,'phonenumber':phonenumber},
        config)

        dispatch({
            type:ADMIN_USERS_DETAIL_SUCCESS,
            payload:newdata
        })
        // localStorage.setItem('attendance',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:'ADMIN_DETAIL_FAIL',
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message,
        })
    }
}


export const getAdminDetails =(id)=> async (dispatch,getState)=>{
    try{
        dispatch({
            type:ADMIN_USERS_REQUEST
        })

        const {userLogin:{userInfo},}=getState()


        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data}=await axios.get(`/api/admin/${id}`,config)

        dispatch({
            type:ADMIN_USERS_SUCCESS,
            payload:data
        })


        const newdata=await axios.get('/api/admin/userDetails/',config)

        dispatch({
            type:ADMIN_USERS_DETAIL_SUCCESS,
            payload:newdata
        })


        const attendance=await axios.get('api/admin/allAttendance/',config)
        dispatch({
            type:ADMIN_ATTENDANCE_SUCCESS,
            payload:attendance
        })

        const leave=await axios.get('api/admin/allLeave/',config)

        dispatch({
            type:'ADMIN_LEAVE_SUCCESS',
            payload:leave
        })
        

    }catch(error){
        dispatch({
            type:ADMIN_USERS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message,
        })
    }
}