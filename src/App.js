
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import User from './components/User';
import Company from './components/Company';

function App() {
  return (
    <div className="App">

<Routes>
  <Route path='/' element={<Login></Login>}></Route>
  <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
  <Route path='/company' element={<Company></Company>}></Route>
  <Route path='/user' element={<User></User>}></Route>
</Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
