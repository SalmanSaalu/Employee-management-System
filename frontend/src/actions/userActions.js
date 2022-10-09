import { USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,


    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,

    USER_PERSONAL_FAIL,
    USER_PERSONAL_REQUEST,
    USER_PERSONAL_RESET,
    USER_PERSONAL_SUCCESS} from '../constants/userConstants'
import axios from 'axios'


export const login =(email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST,
        })

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data}=await axios.post('/api/users/login/',
            {'username':email,'password':password},
            config
            )

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const logout=()=>(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({
        type:USER_LOGOUT
    })
    dispatch({type:USER_DETAILS_RESET})
    dispatch({type:'USER_REGISTER_RESET'})
    dispatch({type:'USER_VERIFY_RESET'})
    dispatch({type:'USER_ATTENDANCE_RESET'})
    dispatch({type:'USER_LEAVE_RESET'})
}

export const getUserDetail =(id)=> async (dispatch,getState)=>{
    try{
        dispatch({
            type:USER_DETAILS_REQUEST
        })

        const {userLogin:{userInfo},}=getState()

       
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data}=await axios.get(`/api/users/${id}`,config)

        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data
        })


        const newdata=await axios.get(`/api/users/personaldetails/`,config)
        // console.log(newdata)
        // const newdata={'user': 28, 'postalcode': 12, 'salary': 7, 'position': 'developer', 'address': 'erfeff', 'phonenumber': 8464363}
        // console.log(newdata)
        dispatch({
            type:USER_PERSONAL_SUCCESS,
            payload:newdata
        })



        

    }catch(error){
        dispatch({
            type:USER_DETAILS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message,
        })
    }
}



export const register =(name,email,password,tokenverify,address,position,postalcode,phonenumber)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_REGISTER_REQUEST,
        })

        // dispatch({
        //     type:'USER_RESET'
        // })

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}=await axios.post('/api/users/register/',
            {'name':name,'email':email,'password':password,'tokenverify':tokenverify,'address':address,'position':position,'postalcode':postalcode,'phonenumber':phonenumber},
            config
            )
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })

        // dispatch({
        //     type:USER_LOGIN_SUCCESS,
        //     payload:data
        // })
        // localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        // console.log(error)
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail 
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const verify =(name,email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:'USER_VERIFY_REQUEST',
        })

        // dispatch({
        //     type:'USER_RESET'
        // })

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}=await axios.post('/api/users/verify/',
            {'name':name,'email':email,'password':password},
            config
            )

        
        dispatch({
            type:'USER_VERIFY_SUCCESS',
            payload:data
        })

    }catch(error){

        dispatch({
            type:'USER_VERIFY_FAIL',
            payload:error.response && error.response.data
            ? error.response.data
            : error.message,
        })
    }
}




export const updateUserDetail =(user)=> async (dispatch,getState)=>{
    try{
        dispatch({
            type:USER_UPDATE_PROFILE_REQUEST
        })

        const {userLogin:{userInfo},}=getState()

       
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data}=await axios.put(`/api/users/profile/update/`,user,config)

        dispatch({
            type:USER_UPDATE_PROFILE_SUCCESS,
            payload:data
        })

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))

        

    }catch(error){
        dispatch({
            type:USER_UPDATE_PROFILE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message,
        })
    }
}


export const updateUserPerosnalDetail =(persondetail)=> async (dispatch,getState)=>{
    try{
        // dispatch({
        //     type:'USER_UPDATE_PERSONAL_PROFILE_REQUEST'
        // })

        const {userLogin:{userInfo},}=getState()

       
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        
        const {data}=await axios.put(`/api/users/profile/personaldetailupdate/`,persondetail,config)

        dispatch({
            type:USER_PERSONAL_SUCCESS,
            payload:data
        })


        

    }catch(error){
        dispatch({
            type:USER_PERSONAL_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message,
        })
    }
}