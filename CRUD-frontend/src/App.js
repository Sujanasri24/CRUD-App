
import './App.css';
import NavBar from './components/Navbar';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import CodeforInterview from './components/CodeforInterview';
import EditUser from './components/EditUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/add' element={<AddUser />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/' element={<CodeforInterview />} />
        <Route path='/edit/:id' element={<EditUser />} />  
        {/* //if we keep colon it depicts that it is variable */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
