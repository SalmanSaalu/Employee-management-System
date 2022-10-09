import { ATTENDANCE_FAIL,
ATTENDANCE_REQUEST,
ATTENDANCE_SUCCESS,

TODAY_ATTENDANCE_FAIL,
TODAY_ATTENDANCE_REQUEST,
TODAY_ATTENDANCE_SUCCESS,

LEAVE_REQUEST,
LEAVE_FAIL,
LEAVE_SUCCESS} from '../constants/attendanceConstants'
import axios from 'axios'


export const getUserLeave =(leave)=> async (dispatch,getState)=>{
    try{
        dispatch({
            type:LEAVE_REQUEST
        })

        const {userLogin:{userInfo},}=getState()

       
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data}=await axios.get(`/api/users/${leave}`,config)

        dispatch({
            type:LEAVE_SUCCESS,
            payload:data
        })
        // localStorage.setItem('attendance',JSON.stringify(data))
        // const {newdata}=await axios.get(`/api/users/leave`,config)
        // dispatch({
        //     type:LEAVE_SUCCESS,
        //     payload:newdata
        // })

    }catch(error){
        dispatch({
            type:LEAVE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.leavemessage,
        })
    }
}



export const getUserAttendance =(attendance)=> async (dispatch,getState)=>{
    try{
        dispatch({
            type:ATTENDANCE_REQUEST
        })

        const {userLogin:{userInfo},}=getState()

       
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data}=await axios.get(`/api/users/${attendance}`,config)

        dispatch({
            type:ATTENDANCE_SUCCESS,
            payload:data
        })
        // localStorage.setItem('attendance',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:ATTENDANCE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message,
        })
    }
}

export const markTodayattendance =(checkattendance)=> async (dispatch,getState)=>{
    try{
        dispatch({
            type:TODAY_ATTENDANCE_REQUEST
        })

        const {userLogin:{userInfo},}=getState()

       
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data}=await axios.post('/api/users/todaydate/',{'checkattendance':checkattendance},config)

        dispatch({
            type:TODAY_ATTENDANCE_SUCCESS,
            payload:data
        })
    
        dispatch({
            type:ATTENDANCE_SUCCESS,
            payload:data
        })
        // localStorage.setItem('attendance',JSON.stringify(data))
        

    }catch(error){
        dispatch({
            type:TODAY_ATTENDANCE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message,
        })
    }
}
