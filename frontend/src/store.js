import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userPersonalDetailReducer,userLoginReducer,userRegisterReducer,userDetailReducer,userDetailUpdate,userVerifyReducer} from './reducers/userReducers'
import { userAttendanceReducer,todayAttendanceReducer,userLeaveReducer } from './reducers/attendanceReducer'
import { adminUsersReducer,adminUsersDetailReducer,adminUsersAttendanceReducer,adminUsersLeaveReducer} from './reducers/adminReducers'
const reducer=combineReducers({
    userLogin:userLoginReducer,
    userRegistering:userRegisterReducer,
    userDetail:userDetailReducer,
    userUpdateProfile:userDetailUpdate,
    userVerify:userVerifyReducer,
    userAttendance:userAttendanceReducer,
    todayAttendance:todayAttendanceReducer,
    userLeave:userLeaveReducer,
    userPersonalDetail:userPersonalDetailReducer,
    adminUsers:adminUsersReducer,
    adminUserdetail:adminUsersDetailReducer,
    adminUsersAttendance:adminUsersAttendanceReducer,
    adminUsersLeave:adminUsersLeaveReducer,
})

const userInfoFromStorage=localStorage.getItem('userInfo')?
    JSON.parse(localStorage.getItem('userInfo')) : null

const userAttendanceFromStorage=localStorage.getItem('attendance')?
    JSON.parse(localStorage.getItem('attendance')) : null

const initialState={
    userLogin:{userInfo:userInfoFromStorage},
    userAttendance:{attendance:userAttendanceFromStorage}
}

const middleware=[thunk]

const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store