import { ATTENDANCE_FAIL,
    ATTENDANCE_REQUEST,
    ATTENDANCE_SUCCESS,
    TODAY_ATTENDANCE_FAIL,
    TODAY_ATTENDANCE_REQUEST,
    TODAY_ATTENDANCE_SUCCESS,
    LEAVE_REQUEST,
LEAVE_FAIL,
LEAVE_SUCCESS } from '../constants/attendanceConstants'


export const userLeaveReducer=(state={ },action)=>{
    switch(action.type){
        case LEAVE_REQUEST:
            return {leaveloading:true}

        case LEAVE_SUCCESS:
            return {leaveloading:false,leave:action.payload}

        case LEAVE_FAIL:
            return {leaveloading:false,leaveerror:action.payload}

        case 'USER_LEAVE_RESET':
            return {}
        default:
            return state
    }
}




export const userAttendanceReducer=(state={ attendance:{}},action)=>{
        switch(action.type){
            case ATTENDANCE_REQUEST:
                return {loading:true}
    
            case ATTENDANCE_SUCCESS:
                return {loading:false,attendance:action.payload}
    
            case ATTENDANCE_FAIL:
                return {loading:false,error:action.payload}
    
            case 'USER_ATTENDANCE_RESET':
                return {attendance:{}}
            default:
                return state
        }
    }


    export const todayAttendanceReducer=(state={ },action)=>{
        switch(action.type){
            case TODAY_ATTENDANCE_REQUEST:
                return {loading:true}
    
            case TODAY_ATTENDANCE_SUCCESS:
                return {loading:false,todayattendance:action.payload}
    
            case TODAY_ATTENDANCE_FAIL:
                return {loading:false,error:action.payload}
    
    
            default:
                return state
        }
    }