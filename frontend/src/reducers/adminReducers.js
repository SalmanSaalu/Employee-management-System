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


export const adminUsersDetailReducer=(state={allDescdetails:false },action)=>{
    switch(action.type){
        case ADMIN_USERS_DETAIL_REQUEST:
            return {loading:true}

        case ADMIN_USERS_DETAIL_SUCCESS:
            return {loading:false,allDescdetails:action.payload}

        case ADMIN_USERS_DETAIL_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
    }
}


export const adminUsersReducer=(state={alldetails:false },action)=>{
    switch(action.type){
        case ADMIN_USERS_REQUEST:
            return {loading:true}

        case ADMIN_USERS_SUCCESS:
            return {loading:false,alldetails:action.payload}

        case ADMIN_USERS_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
    }
}


export const adminUsersAttendanceReducer=(state={usersAttendance:false },action)=>{
    switch(action.type){
        case ADMIN_ATTENDANCE_REQUEST:
            return {loading:true}

        case ADMIN_ATTENDANCE_SUCCESS:
            return {loading:false,usersAttendance:action.payload}

        case ADMIN_ATTENDANCE_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
    }
}

export const adminUsersLeaveReducer=(state={usersLeave:false },action)=>{
    switch(action.type){
        case 'ADMIN_LEAVE_SUCCESS':
            return {loading:false,usersLeave:action.payload}

        default:
            return state
    }
}
