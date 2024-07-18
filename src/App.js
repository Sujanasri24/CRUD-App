
import './App.css';
import NavBar from './components/Navbar';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import CodeforInterview from './components/CodeforInterview';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/add' element={<AddUser />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/' element={<CodeforInterview />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
