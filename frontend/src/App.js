import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import {} from 'react-bootstrap'
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen'
import AttendanceScreen from './screens/Attendance/AttendanceScreen';
import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from './screens/Register/RegisterScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import AdminScreen from './screens/Admin/AdminScreen';

import Check from './screens/Attendance/Check';
function App() {
  return (
    
    <Router>
      <Routes>

      <Route path='/' element={<HomeScreen/>} exact/>
      <Route path='/attendance' element={<AttendanceScreen/>} />
      <Route path='/login' element={<LoginScreen/>} />
      <Route path='/register' element={<RegisterScreen/>} />
      <Route path='/profile' element={<ProfileScreen/>} />
      <Route path='/check' element={<Check/>} />
      <Route path='/admin' element={<AdminScreen/>}/>



      </Routes>     
    </Router>
   

  );
}

export default App;
